import { useContext, useRef, useState } from 'react';
import NextStepButton from '../NextStepButton';
import styles from './StepTwo.module.css';
import GoBackButton from '../GoBackButton';
import { AppContext } from '../../contexts/AppContext';
import Plan from '../Plan';

enum ErrorType {
  Empty = 'Select a plan to continue.',
}

const plans = [
  {
    id: '1',
    type: 'arcade',
    price: 9,
  },
  {
    id: '2',
    type: 'advanced',
    price: 12,
  },
  {
    id: '3',
    type: 'pro',
    price: 15,
  },
];

const StepTwo = () => {
  const { setStep, data, setData } = useContext(AppContext);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isYearly, setIsYearly] = useState(data.payment === 'yearly');
  const [error, setError] = useState('');
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    const data = Object.fromEntries(new FormData(formRef.current));
    if (!data.plan) return setError(ErrorType.Empty);
    if (!data.payment) data.payment = 'monthly';
    const plan = plans.find((plan) => data.plan === plan.id) || {};
    const newData = { plan, payment: data.payment.toString() };
    setError('');
    setData((prevData) => ({ ...prevData, ...newData }));
    setStep(3);
  };
  return (
    <>
      <h1 className="title">Select your plan</h1>
      <h2 className="subtitle">
        You have the option of monthly or yearly billing.
      </h2>
      <form className={styles.form} ref={formRef}>
        <div>
          <div className={styles.plans}>
            {plans.map((plan) => (
              <Plan plan={plan} isYearly={isYearly} key={`plan-${plan.id}`} />
            ))}
          </div>

          <div className={styles.payment}>
            <label htmlFor="payment" className={styles.monthly}>
              Monthly
            </label>
            <input
              className={styles['input-checkbox']}
              type="checkbox"
              name="payment"
              id="payment"
              value="yearly"
              onChange={(e) => setIsYearly(e.target.checked)}
              defaultChecked={data.payment === 'yearly'}
            />
            <label htmlFor="payment">Yearly</label>
          </div>
          {error && <p className={styles.error}>{error}</p>}
        </div>
        <div className="form__buttons">
          <GoBackButton />
          <NextStepButton onClick={onSubmit} />
        </div>
      </form>
    </>
  );
};

export default StepTwo;
