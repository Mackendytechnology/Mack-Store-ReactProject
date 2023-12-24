import Logo from "../../assets/logo.jpg";
import styles from "./style.module.css";
export const Header = () => {
  return (
    <div className={styles.flexbox}>
      <header>
        <img src={Logo} alt="Logo Mack-Store" />
      </header>
    </div>
  );
};
