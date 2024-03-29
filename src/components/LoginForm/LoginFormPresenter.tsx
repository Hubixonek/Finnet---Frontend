import { Link } from "react-router-dom";
import styles from "../styles/LoginForm.module.scss";

type TLoginFormPresenter = {
  theme: boolean;
  formik: any;
};

const LoginFormPresenter = ({ theme, formik }: TLoginFormPresenter) => {
  return (
    <form
      className={`${styles["container"]} ${
        theme ? styles["dark"] : styles["light"]
      }`}
      onSubmit={formik.handleSubmit}>
      <div>
        <h1>Cześć, dobrze Cię widzieć</h1>
        <div className={styles.id}>
          <span>Indetyfikator</span>
          <input
            className={`form-control ${
              formik.touched.email && formik.errors.email
                ? styles.errorInput
                : ""
            }`}
            name="email"
            id="email"
            type="text"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Wprowadź adres e-mail"
          />
        </div>
        <div className={styles.password}>
          <span>Hasło</span>
          <input
            className="form-control"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="password"
            type="password"
            placeholder="Wprowadź hasło"
          />
          {formik.errors.email && (
            <div className={styles.errorMessage}>{formik.errors.email}</div>
          )}
        </div>
        <div className="save-btn mt-2">
          <button
            type="submit"
            className={`btn btn-primary form_button--savebtn ${styles.loginButton}`}>
            Zaloguj się
          </button>
        </div>
      </div>

      <br />
      <div className="redirection">
        <a className={styles.signIn}>Nie pamiętam hasła</a>
      </div>
      <br />
      <div className="redirection">
        <Link to="/registerform" className={styles.signIn}>
          Nie masz konta? Zarejestruj się
        </Link>
      </div>
    </form>
  );
};

export default LoginFormPresenter;
