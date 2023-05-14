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
        <li>
          <Link to="/registerform">
            Zarejestruj się by uzyskać dostęp do Finneta
          </Link>
        </li>
      </ul>

      <div className={styles["signInButtonContainer"]}>
        <button
          type="submit"
          className={`btn btn-primary ${styles.signInButton}`}
        >
          Zaloguj się
        </button>
      </div>
    </nav>
	<Outlet />

  </div>
);

export default Navbar;
