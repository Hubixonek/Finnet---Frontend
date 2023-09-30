import { useState, useContext } from "react";
import styles from "../styles/LokataPresenter.module.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ThemeContext } from "../../contexts/ThemeContext";
import { TThemeContext } from "../../types/themecontext";
const CreateLokataPresenter = () => {
  const [capitalization, setCapitalization] = useState([
    { value: "1 dzień", label: "1 dzień" },
    { value: "7 dni", label: "7 dni" },
    { value: "1 miesiąc", label: "1 miesiąc" },
    { value: "3 miesiące", label: "3 miesiące" },
    { value: "4 miesiące", label: "4 miesiące" },
    { value: "6 miesięcy", label: "6 miesięcy" },
    { value: "9 miesięcy", label: "9 miesięcy" },
    { value: "12 miesięcy", label: "12 miesięcy" },
    { value: "24 miesięce", label: "24 miesięce" },
    { value: "36 miesięce", label: "36 miesięce" },
    { value: "brak kapitalizacji", label: "brak kapitalizacji" },
  ]);
  const [dayOrMonth, setDayOrMonth] = useState([
    { value: "dni", label: "dni" },
    { value: "miesięcy", label: "miesięcy" },
  ]);
  const [cashAccount, setCashAccount] = useState([
    { value: "Wybierz konto", label: "Wybierz konto" },
    { value: "mBank", label: "mBank" },
    { value: "Gotówka", label: "Gotówka" },
  ]);
  const { theme } = useContext(ThemeContext) as TThemeContext;

  console.log(capitalization);
  return (
    <div className={`${styles["container"]} ${theme ? styles["dark"] : ""}`}>
      <h1>Dodaj lokatę</h1>
      <div className={styles["itemGroup"]}>
        <label>Kapitalizacja:</label>
        <Form.Select>
          {capitalization.map((item) => {
            return (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </Form.Select>
      </div>
      <div className={styles["itemGroup"]}>
        <label>Okres:</label>
        <Form.Control />
        <Form.Select>
          {dayOrMonth.map((item) => {
            return (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </Form.Select>
      </div>
      <div className={styles["itemGroup"]}>
        <label>Konto gotówkowe:</label>
        <Form.Select>
          {cashAccount.map((item) => {
            return (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </Form.Select>
      </div>
      <div className={styles["itemGroup"]}>
        <label>Data założenia:</label>
        <Form.Control type="date" />
      </div>
      <div className={styles["itemGroup"]}>
        <label>Kwota wkładu:</label>
        <Form.Control type="number" placeholder="PLN" />
      </div>
      <div className={styles["itemGroup"]}>
        <label>Oprocentowanie:</label>
        <Form.Control type="number" placeholder="% w skali roku" />
      </div>
      <div className={styles["itemGroup"]}>
        <label>Nazwa:</label>
        <Form.Control type="text" placeholder="Nazwa lokaty" />
      </div>
      <div className={styles["itemGroup"]}>
        <label>Dodaj wpłatę:</label>
        <Form.Check className={styles["checkbox"]} />
      </div>
      <div className={styles["itemGroup"]}>
        <label>Zamknij lokatę automatycznie:</label>
        <Form.Check className={styles["checkbox"]} />
      </div>
      <div className={styles["itemGroup"]}>
        <label>Dodaj przypomnienie o zamknięciu:</label>
        <Form.Check className={styles["checkbox"]} />
      </div>
      <div className={styles["itemGroup"]}>
        <label>Dodaj przypomnienie o zamknięciu:</label>
        <Form.Control as="textarea" rows={3} />
      </div>
      <div className={styles["itemGroup"]}>
        <Button>Dodaj</Button>
      </div>
    </div>
  );
};

export default CreateLokataPresenter;
