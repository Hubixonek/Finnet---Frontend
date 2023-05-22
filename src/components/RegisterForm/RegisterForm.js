import styles from "../styles/RegisterForm.module.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      checkboxPrivacyPolicy: "",
    },
    validate: () => {
      const errors = {};
      console.log(errors);
      if (!formik.values.email) {
        errors.email = "Pole ma niepoprawny format";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formik.values.email)
      ) {
        errors.email = "Nieprawidłowy adres e-mail";
      }
      if (!formik.values.password) {
        errors.password = "Pole ma niepoprawny format";
      } else if (formik.values.password.length < 8) {
        errors.password = "Musi mieć co najmniej 8 znaków!";
      }
      if (!formik.values.checkboxPrivacyPolicy) {
        errors.checkboxPrivacyPolicy =
          "Musisz potwierdzić Regulamin i Politykę prywatności";
      }
      return errors;
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles["container"]}>
          <h1>Dołącz do nas</h1>
          <div className={styles["email"]}>
            <span>E-mail</span>
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
            {formik.touched.email && formik.errors.email ? (
              <div className={styles["errorMessage"]}>
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <div className={styles["password"]}>
            <span>Hasło</span>
            <input
              className={`form-control ${
                formik.touched.password && formik.errors.password
                  ? styles.errorInput
                  : ""
              }`}
              name="password"
              id="password"
              type="password"
              htmlFor="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Wprowadź hasło"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className={styles["errorMessage"]}>
                {formik.errors.password}
              </div>
            ) : null}
          </div>
        </div>
        <div className={`form-check' ${styles.checkForm}`}>
          <input
            className={`form-check-input' ${styles.checkInput}`}
            id="flexCheckOne"
            type="checkbox"
            name="checkboxPrivacyPolicy"
            value={formik.values.checkboxPrivacyPolicy}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            htmlFor="flexCheckOne"
          ></input>
          <label
            className={`form-check-label' ${styles.checkLabel}`}
            htmlFor="flexCheckOne"
          >
            Oświadczam, że zapoznałem(-am) się z Regulaminem oraz Polityką
            Prywatności i chcę korzystać z Usługi Finnet.
            {formik.touched.checkboxPrivacyPolicy &&
            formik.errors.checkboxPrivacyPolicy ? (
              <div className={styles["errorMessage"]}>
                {formik.errors.checkboxPrivacyPolicy}
              </div>
            ) : null}
          </label>
        </div>
        <div className={`form-check' ${styles.checkForm}`}>
          <input
            className={`form-check-input' ${styles.checkInput}`}
            type="checkbox"
            id="flexCheckTwo"
            value=""
          ></input>
          <label
            className={`form-check-label' ${styles.checkLabel}`}
            htmlFor="flexCheckTwo"
          >
            Wyrażam zgodę na otrzymywanie na podany adres poczty elektronicznej
            informacji handlowych od FINNET.COM SPÓŁKA Z OGRANICZONĄ
            ODPOWIEDZIALNOŚCIĄ z siedzibą w Poznaniu, ul. MaćkowoHubisiowej
            113/3, KRS: 000023384, NIP: 642325692, REGON: 364234911000 - więcej
            informacji tutaj
          </label>
        </div>
        <div className={`form-check' ${styles.checkForm}`}>
          <input
            className={`form-check-input' ${styles.checkInput}`}
            id="flexCheckThree"
            type="checkbox"
            value=""
          ></input>
          <label
            className={`form-check-label' ${styles.checkLabel}`}
            htmlFor="flexCheckThree"
          >
            Wyrażam zgodę na przetwarzanie moich danych osobowych przez
            FINNET.COM SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ z siedzibą w
            Sopocie, ul. MaćkowoHubisiowej 113/3, KRS: 000023384, na zlecenie
            jej Partnera: Finnet sp. z o.o., z siedzibą w Poznaniu, ul.
            MaćkowoHubisiowej 113/3, wpisaną do Krajowego Rejestru Sądowego pod
            numerem KRS: 000023384, NIP: 642325692, w celu wysyłki na adres
            e-mail, spersonalizowanych informacji handlowych - więcej informacji
            tutaj.
          </label>
        </div>
        <div className="save-btn mt-2">
          <button
            type="submit"
            className={`btn btn-primary form_button--savebtn ${styles.registerButton}`}
          >
            Zarejestruj się
          </button>
        </div>
        <br></br>
        <div className="redirection">
          <Link to="/loginform" className={styles["signIn"]}>
            Masz już konto? Zaloguj się
          </Link>
        </div>
      </form>
    </>
  );
};
export default RegisterForm;
