import { useRef, useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import styles from './StepThree.module.css';
import NextStepButton from '../NextStepButton';
import GoBackButton from '../GoBackButton';
import AddOnCheckbox from '../AddOnCheckbox';

const addOns = [
  {
    id: '1',
    title: 'Online service',
    description: 'Access to multiplayer games',
    price: 1,
  },
  {
    id: '2',
    title: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    price: 2,
  },
  {
    id: '3',
    title: 'Customizable Profile',
    description: 'Custom theme on your profile',
    price: 2,
  },
];

const StepThree = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { data, setData, setStep } = useContext(AppContext);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    const data = Object.fromEntries(new FormData(formRef.current));
    const addOnsId = Object.keys(data);
    const listAddOns = addOns.filter((addOn) => addOnsId.includes(addOn.id));
    setData((prevData) => ({ ...prevData, 'add-ons': listAddOns }));
    setStep(4);
  };
  return (
    <>
      <h1 className="title">Pick add-ons</h1>
      <h2 className="subtitle">Add-ons help enhance your gaming experience.</h2>
      <form className={`form ${styles.form}`} ref={formRef}>
        <div className={styles.addons}>
          {addOns.map((addOn) => (
            <AddOnCheckbox
              addOn={addOn}
              key={`add-ons-${addOn.id}`}
              isYearly={data.payment === 'yearly'}
            />
          ))}
        </div>
        <div className="form__buttons">
          <GoBackButton />
          <NextStepButton onClick={onSubmit} />
        </div>
      </form>
    </>
  );
};

export default StepThree;
