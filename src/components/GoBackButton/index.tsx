import { useContext } from 'react';
import styles from './GoBack.module.css';
import { AppContext } from '../../contexts/AppContext';
const GoBackButton = () => {
  const { setStep } = useContext(AppContext);

  return (
    <button
      type="button"
      className={`button ${styles.button}`}
      onClick={() => setStep((prevState) => prevState - 1)}
    >
      Go Back
    </button>
  );
};

export default GoBackButton;
