import { useContext } from "react";
import styles from "../styles/AccountSettings.module.scss";
import Form from "react-bootstrap/Form";
import AuthContext from "../../contexts/AuthContext";
import Button from "react-bootstrap/esm/Button";
const AccountSettingsPresenter = () => {
  const { user } = useContext(AuthContext);

  console.log(user);
  return (
    <div className={styles["container"]}>
      <h2>Ustawienia konta</h2>
      <div className={styles["itemGroup"]}>
        <div className={styles["inputGroup"]}>
          <h3>Adres Email</h3>
          {user ? (
            <p>
              Twój adres e-mail to <strong>{user.email}</strong>
            </p>
          ) : (
            <p>Jesteś zalogowany jako gość</p>
          )}
        </div>
        <div className={styles["inputGroup"]}>
          <br></br>
          <a>Zmień adres e-mail</a>
        </div>
      </div>
      <h3 className={styles["password"]}>Zresetuj swoje hasło</h3>
      <div className={styles["itemGroup"]}>
        <div className={styles["inputGroup"]}>
          <label>Nowe hasło</label>
          <Form.Control type="password"></Form.Control>
        </div>
        <div className={styles["inputGroup"]}>
          <label>Powtórz hasło</label>
          <Form.Control type="password" />
        </div>
      </div>
      <Button>Zapisz hasło</Button>
      <h3 className={styles["password"]}>Usuń konto</h3>
      <div className={styles["itemGroup"]}>
        <div className={styles["inputGroup"]}>
          <span>Czy chciałbyś usunąc konto?</span>
          <br></br>
          <span>
            Usunięcie twojego konta spowoduje utratę wszystkich zapisanych
            danych.
          </span>
          <br></br>
          <br></br>
          <span>Chce usunąć swoje konto</span>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsPresenter;
