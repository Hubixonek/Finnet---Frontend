import styles from "../styles/MyAccount.module.scss";
import Form from "react-bootstrap/Form";
const MyAccountPresenter = () => {
  return (
    <div className={styles["container"]}>
      <h2>Moje konto</h2>
      <div className={styles["itemGroup"]}>
        <div className={styles["inputGroup"]}>
          <label>Imię</label>
          <Form.Control placeholder="Wprowadź imię" />
        </div>
        <div className={styles["inputGroup"]}>
          <label>Nazwisko</label>
          <Form.Control placeholder="Wprowadź nazwisko" />
        </div>
      </div>
      <div className={styles["inputGroup"]}>
        <label>Lokalizacja</label>
        <Form.Control placeholder="Wprowadź lokalizację" />
      </div>
    </div>
  );
};

export default MyAccountPresenter;
