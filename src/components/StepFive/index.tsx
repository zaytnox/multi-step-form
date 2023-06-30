import styles from './StepFive.module.css';

const StepFive = () => {
  return (
    <div className={styles.card}>
      <img
        src="/public/assets/images/icon-thank-you.svg"
        alt="Thank you image"
        className={styles.image}
      />
      <h1 className={`title`}>Thank you!</h1>
      <h2 className={`subtitle`}>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgamimg.com.
      </h2>
    </div>
  );
};

export default StepFive;
