import { Link } from "react-router-dom";
import styles from "../styles/LoginForm.module.css";

const LoginForm = () => {
  return (
    <>
      <form>
        <div className={styles["container"]}>
          <h1>Cześć, dobrze Cię widzieć</h1>
          <div className={styles["id"]}>
            <span>Indetyfikator</span>
            <input
              className="form-control"
              name="email"
              id="email"
              type="text"
              placeholder="Wprowadź adres e-mail"
            />
          </div>
          <div className={styles["password"]}>
            <span>Hasło</span>
            <input
              className="form-control"
              name="password"
              id="password"
              type="password"
              placeholder="Wprowadź hasło"
            />
          </div>
        </div>
        <div className="save-btn mt-2">
          <button
            type="submit"
            className={`btn btn-primary form_button--savebtn ${styles.registerButton}`}>
            Zaloguj się
          </button>
        </div>
        <br></br>
        <div className="redirection">
          <a className={styles["signIn"]}>Nie pamiętam hasła</a>
        </div>
        <br></br>
        <div className="redirection">
          <Link to="/registerform" className={styles["signIn"]}>
            Nie masz konta? Zarejestruj się
          </Link>
        </div>
      </form>
      
    </>
  );
};
export default LoginForm;
