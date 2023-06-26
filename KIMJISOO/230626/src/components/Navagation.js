import { Link } from "react-router-dom";
import styles from "styles/Navagation.module.css";

const Navagation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li className={styles.navList}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li className={styles.navList}>
          <Link to="/about" className={styles.navLink}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navagation;
