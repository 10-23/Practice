import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">Movie23</Link>
    </header>
  );
};

export default Header;
