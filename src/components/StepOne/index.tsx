import { useState, useRef, useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import NextStepButton from '../NextStepButton';
import styles from './StepOne.module.css';

interface Errors {
  name: string;
  email: string;
  phone: string;
}

enum ErrorType {
  Empty = 'This field is required.',
  Invalid = 'Enter a valid data.',
}

const defaultErrors: Errors = { name: '', email: '', phone: '' };

const noErrors = (errors: Errors) => {
  const errorsArray = Object.entries(errors).flat();
  const defaultErrorsArray = Object.entries(defaultErrors).flat();
  return errorsArray.every(
    (element, index) => element === defaultErrorsArray[index]
  );
};

const StepOne = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { setStep, data, setData } = useContext(AppContext);
  const [errors, setErrors] = useState(defaultErrors);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors(defaultErrors);

    if (!formRef.current) return;
    const data = Object.fromEntries(new FormData(formRef.current));

    const errorsData: Errors = { ...defaultErrors };
    if (!data.name) errorsData.name = ErrorType.Empty;
    if (!data.email) errorsData.email = ErrorType.Empty;
    if (!data.phone) errorsData.phone = ErrorType.Empty;
    // add data validation function
    if (noErrors(errorsData)) {
      setData((prevData) => ({ ...prevData, ...data }));
      setStep(2);
      return;
    }
    setErrors(errorsData);
  };
  return (
    <>
      <h1 className={`title`}>Personal info</h1>
      <h2 className={`subtitle`}>
        Please provide your name, email address, and phone number.
      </h2>
      <form ref={formRef} className={styles.form}>
        <div>
          <label className={`${styles.label} ${errors.name && styles.error}`}>
            <p>Name {errors.name && <span>{errors.name}</span>}</p>
            <input
              type="text"
              name="name"
              id="name"
              className={styles['input-text']}
              placeholder="e.g. Stephen King"
              defaultValue={data.name}
              autoComplete="on"
            />
          </label>
          <label className={`${styles.label} ${errors.email && styles.error}`}>
            <p>Email Address{errors.email && <span>{errors.email}</span>}</p>
            <input
              type="text"
              name="email"
              id="email"
              className={styles['input-text']}
              placeholder="e.g. stephenking@lorem.com"
              defaultValue={data.email}
              autoComplete="on"
            />
          </label>
          <label className={`${styles.label} ${errors.phone && styles.error}`}>
            <p>Phone Number {errors.phone && <span>{errors.phone}</span>}</p>
            <input
              type="text"
              name="phone"
              className={styles['input-text']}
              placeholder="e.g. +1 234 567 890"
              defaultValue={data.phone}
              autoComplete="on"
            />
          </label>
        </div>
        <div className="form__buttons">
          <NextStepButton onClick={onSubmit} />
        </div>
      </form>
    </>
  );
};

export default StepOne;
