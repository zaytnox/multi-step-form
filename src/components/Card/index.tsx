import styles from './Card.module.css';

const Card = ({ children }: { children: React.ReactElement[] }) => {
  return (
    <section className={styles.card}>
      {children[0]}
      <article className={styles['card__content']}>{children[1]}</article>
    </section>
  );
};

export default Card;
