import Button from "react-bootstrap/esm/Button";
import styles from "../styles/MyAccount.module.scss";
import Form from "react-bootstrap/Form";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";
const MyAccountPresenter = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles["container"]}>
      <h2>Moje konto</h2>
      <br></br>
      <span>Dane osobiste</span>

      <div className={theme ? styles["darkBorder"] : styles["lightBorder"]} />

      <div className={styles["itemGroup"]}>
        <div className={styles["inputGroup"]}>
          <label>Imię</label>
          <Form.Control placeholder="Wprowadź imię" />
        </div>
        <div className={styles["inputGroup"]}>
          <label>Nazwisko</label>
          <Form.Control placeholder="Wprowadź nazwisko" />
        </div>
        <div className={styles["inputGroup"]}>
          <p>
            Miło Cię widzieć w Finnet, to zaszczyt mieć Cię w swojej drużynie.
          </p>
        </div>
      </div>

      <div className={styles["inputGroup"]}>
        <label>Data urodzenia</label>
        <Form.Control type="date" />
      </div>
      <div className={styles["inputGroup"]}>
        <label>Numer telefonu</label>
        <Form.Control
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
        />
      </div>
      <Button>Zapisz</Button>
    </div>
  );
};

export default MyAccountPresenter;
