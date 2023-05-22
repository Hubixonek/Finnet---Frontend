import styles from "../styles/Navbar.module.css";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => (
  <div>
    <nav className={styles["navBar"]}>
      <ul className={styles["navLinks"]}>
        <li>
          <Link to="/">O nas</Link>
        </li>
        <li>
          <Link to="/fundsform">Funds</Link>
        </li>
        <li>
          <Link to="#">Bezpieczeństwo</Link>
        </li>
        <li>
          <Link to="#">Subskrypcje</Link>
        </li>
      </ul>
      <div className={styles["buttonGroup"]}>
        <div className={styles["signInButton"]}>
          <Link to="/loginform">Zaloguj</Link>
        </div>
        <div className={styles["registerNav"]}>
          <Link to="/registerform">Korzystaj z Finnet za darmo</Link>
        </div>
      </div>
    </nav>
    <Outlet />
  </div>
);

export default Navbar;
