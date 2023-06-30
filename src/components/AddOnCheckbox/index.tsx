import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import styles from './AddOn.module.css';
const AddOnCheckbox = ({
  addOn,
  isYearly,
}: {
  addOn: { id: string; title: string; description: string; price: number };
  isYearly: boolean;
}) => {
  const { data } = useContext(AppContext);
  return (
    <label htmlFor={addOn.id} className={styles.label}>
      <div>
        <div className={styles.checkbox}>
          <img src="/assets/images/icon-checkmark.svg" alt="" />
        </div>
        <input
          type="checkbox"
          name={addOn.id}
          id={addOn.id}
          defaultChecked={data['add-ons'].some((a) => a.id === addOn.id)}
        />
        <div>
          <span>{addOn.title}</span>
          <p>{addOn.description}</p>
        </div>
      </div>
      {isYearly ? (
        <span>+${addOn.price * 10}/yr</span>
      ) : (
        <span>+${addOn.price}/mo</span>
      )}
    </label>
  );
};

export default AddOnCheckbox;
