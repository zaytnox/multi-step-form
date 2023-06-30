import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import styles from './StepsCard.module.css';
const steps = ['your info', 'select plan', 'add-ons', 'summary'];

const StepsCard = () => {
  const { step } = useContext(AppContext);
  return (
    <div className={styles.card}>
      <picture className={styles.bg}>
        <source
          media="(max-width: 1000px)"
          srcSet="/public/assets/images/bg-sidebar-mobile.svg"
        />
        <img
          src="/public/assets/images/bg-sidebar-desktop.svg"
          alt="bg steps card"
        />
      </picture>
      <ul>
        {steps.map((_step, index) => {
          const stepNumber = index + 1;
          return (
            <li
              className={`${styles.step} ${
                step === stepNumber ||
                (step === steps.length + 1 && stepNumber === steps.length)
                  ? styles.active
                  : ''
              }`}
              key={`step-${stepNumber}`}
            >
              <span className={styles['step--number']}>{stepNumber}</span>
              <div className={styles['step--text']}>
                <span>STEP {stepNumber}</span>
                <p>{_step}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StepsCard;
