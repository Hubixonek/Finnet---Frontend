import { useContext, useState } from "react";
import styles from "../styles/DebtorList.module.scss";
import Form from "react-bootstrap/Form";
import DebtorTablePresenter from "./DebtorTablePresenter";
import Button from "react-bootstrap/Button";
import { ThemeContext } from "../../contexts/ThemeContext";
const DebtorListPresenter = () => {
  const [reasonForLoan, setReasonForLoan] = useState([
    { value: "Wybierz typ pożyczki", label: "Wybierz typ pożyczki" },
    { value: "Konsumpcja", label: "Konsumpcja" },
    { value: "Założenie inwestycji", label: "Założenie inwestycji" },
  ]);
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${styles["container"]} ${
        theme ? styles["dark"] : styles["light"]
      }`}>
      <div
        className={`${styles["secondContainer"]} ${
          theme ? styles["dark"] : styles["light"]
        }`}>
        <h1>Dodaj dłużnika do listy</h1>
        <div className={styles["itemGroup"]}>
          <div className={styles["item"]}>
            <span>Imię dłużnika</span>
            <Form.Control type="text" placeholder="Imię dłużnika" />
          </div>
          <div className={styles["item"]}>
            <span>Data pożyczki</span>
            <Form.Control type="date" />
          </div>
          <div className={styles["item"]}>
            <span>Termin spłaty</span>
            <Form.Control type="date" />
          </div>
          <div className={styles["item"]}>
            <span>Kwota pożyczki</span>
            <div className={styles["wrapItems"]}>
              <Form.Control type="number" placeholder="Np. 500 PLN" />
              <span className={styles["PLN"]}>PLN</span>
            </div>
          </div>
          <div className={styles["item"]}>
            <br></br>
            <Form.Select>
              {reasonForLoan.map((reason) => {
                return (
                  <option key={reason.value} value={reason.value}>
                    {reason.label}
                  </option>
                );
              })}
            </Form.Select>
          </div>
          <div className={styles["item"]}>
            <br></br>
            <Button variant="primary" className={styles["btnAdd"]}>
              Dodaj
            </Button>{" "}
          </div>
        </div>
      </div>
      <DebtorTablePresenter />
    </div>
  );
};
export default DebtorListPresenter;
