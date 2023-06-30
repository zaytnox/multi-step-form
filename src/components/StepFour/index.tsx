import { useContext } from 'react';
import { AppContext, Data } from '../../contexts/AppContext';
import GoBackButton from '../GoBackButton';
import NextStepButton from '../NextStepButton';
import styles from './StepFour.module.css';

const getTotal = (data: Data) => {
  const totalAddOns = data['add-ons'].reduce(
    (prev, current) => prev + current.price,
    0
  );
  const total = data.plan.price + totalAddOns;
  if (data.payment === 'yearly') return total * 10;
  return total;
};

const StepFour = () => {
  const { data, setStep } = useContext(AppContext);
  const total = getTotal(data);
  const isYearly = data.payment === 'yearly';

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(5);
  };
  return (
    <>
      <h1 className={`title`}>Finishing up</h1>
      <h2 className={`subtitle`}>
        Double-check everything looks OK before confirming
      </h2>
      <form className={`form ${styles.form}`}>
        <div>
          <ul>
            <li className={styles.plan}>
              <div>
                <p>
                  {data.plan.type} ({data.payment})
                </p>
                <button onClick={() => setStep(2)}>Change</button>
              </div>
              <span>
                ${isYearly ? data.plan.price * 10 : data.plan.price}/
                {isYearly ? 'yr' : 'mo'}
              </span>
            </li>
            {data['add-ons'].map((addOn, i) => (
              <li className={styles.addOn} key={`add-on-${i}`}>
                <p>
                  {addOn.title}
                  <span>
                    +${isYearly ? addOn.price * 10 : addOn.price}/
                    {isYearly ? 'yr' : 'mo'}
                  </span>
                </p>
              </li>
            ))}
          </ul>
          <p className={styles.total}>
            Total (per {isYearly ? 'year' : 'month'})
            <span>
              +${total}/{isYearly ? 'yr' : 'mo'}
            </span>
          </p>
        </div>
        <div className="form__buttons">
          <GoBackButton />
          <NextStepButton onClick={onSubmit} type="confirm" />
        </div>
      </form>
    </>
  );
};

export default StepFour;
