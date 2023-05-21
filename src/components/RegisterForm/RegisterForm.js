import { useState } from "react";
import styles from "../styles/RegisterForm.module.css";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = () => {
    console.log(email, password);
  };
  return (
    <>
      <div className={styles["container"]}>
        <h1>Dołącz do nas</h1>
        <div className={styles["email"]}>
          <span>E-mail</span>
          <input
            className="form-control "
            name="email"
            id="email"
            type="text"
            value={email}
            onChange={(e) => handleInputChange(e)}
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
            htmlFor="password"
            value={password}
            onChange={(e) => handleInputChange(e)}
            placeholder="Wprowadź hasło"
          />
        </div>
      </div>
      <div className={`form-check' ${styles.checkForm}`}>
        <input
          className={`form-check-input' ${styles.checkInput}`}
          id="flexCheckOne"
          type="checkbox"
          value=""></input>
        <label
          className={`form-check-label' ${styles.checkLabel}`}
          htmlFor="flexCheckOne">
          Oświadczam, że zapoznałem(-am) się z Regulaminem oraz Polityką
          Prywatności i chcę korzystać z Usługi Finnet.
        </label>
      </div>
      <div className={`form-check' ${styles.checkForm}`}>
        <input
          className={`form-check-input' ${styles.checkInput}`}
          type="checkbox"
          id="flexCheckTwo"
          value=""></input>
        <label
          className={`form-check-label' ${styles.checkLabel}`}
          htmlFor="flexCheckTwo">
          Wyrażam zgodę na otrzymywanie na podany adres poczty elektronicznej
          informacji handlowych od FINNET.COM SPÓŁKA Z OGRANICZONĄ
          ODPOWIEDZIALNOŚCIĄ z siedzibą w Poznaniu, ul. MaćkowoHubisiowej 113/3,
          KRS: 000023384, NIP: 642325692, REGON: 364234911000 - więcej
          informacji tutaj
        </label>
      </div>
      <div className={`form-check' ${styles.checkForm}`}>
        <input
          className={`form-check-input' ${styles.checkInput}`}
          id="flexCheckThree"
          type="checkbox"
          value=""></input>
        <label
          className={`form-check-label' ${styles.checkLabel}`}
          htmlFor="flexCheckThree">
          Wyrażam zgodę na przetwarzanie moich danych osobowych przez FINNET.COM
          SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ z siedzibą w Sopocie, ul.
          MaćkowoHubisiowej 113/3, KRS: 000023384, na zlecenie jej Partnera:
          Finnet sp. z o.o., z siedzibą w Poznaniu, ul. MaćkowoHubisiowej 113/3,
          wpisaną do Krajowego Rejestru Sądowego pod numerem KRS: 000023384,
          NIP: 642325692, w celu wysyłki na adres e-mail, spersonalizowanych
          informacji handlowych - więcej informacji tutaj.
        </label>
      </div>
      <div className="save-btn mt-2">
        <button
          type="submit"
          onClick={handleSubmit}
          className={`btn btn-primary form_button--savebtn ${styles.registerButton}`}>
          Zarejestruj się
        </button>
      </div>
      <br></br>
      <div className="redirection">
        <a className={styles["signIn"]}>Masz już konto? Zaloguj się</a>
      </div>
    </>
  );
};
export default RegisterForm;
