import { useContext } from 'react';
import styles from './Plan.module.css';
import { AppContext } from '../../contexts/AppContext';
const Plan = ({
  plan,
  isYearly,
}: {
  plan: { id: string; type: string; price: number };
  isYearly: boolean;
}) => {
  const { data } = useContext(AppContext);
  return (
    <>
      <input
        className={styles['input-radio']}
        type="radio"
        name="plan"
        id={plan.id}
        value={plan.id}
        defaultChecked={data.plan.type === plan.type}
      />
      <label htmlFor={plan.id} className={styles.label}>
        <img src={`/assets/images/icon-${plan.type}.svg`} alt="" />
        <div>
          <span>{plan.type}</span>
          {isYearly ? (
            <>
              <p>${plan.price * 10}/yr</p>
              <p>2 months free</p>
            </>
          ) : (
            <p>${plan.price}/mo</p>
          )}
        </div>
      </label>
    </>
  );
};

export default Plan;
