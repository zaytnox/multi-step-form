import styles from './NextStep.module.css';
const NextStepButton = ({
  onClick,
  type = '',
}: {
  onClick: (e: React.FormEvent) => void;
  type?: string;
}) => {
  return (
    <input
      className={`button ${styles.button} ${!!type && styles.confirm}`}
      type="submit"
      value={!type ? 'Next Step' : 'Confirm'}
      onClick={onClick}
    />
  );
};

export default NextStepButton;
