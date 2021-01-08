import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>
        QUERES VENDER TU PROPIEDAD EN MENOS DE
        <span className={styles.span}> 4 MESES</span>
      </h2>
    </div>
  );
};

export default Header;
