import styles from "../styles/Deposit.module.scss";
import Form from "react-bootstrap/Form";
import { useContext, ChangeEvent, FormEvent } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { DepositContext } from "../../contexts/DepositContext";
import Button from "react-bootstrap/esm/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { PatternFormat } from "react-number-format";

const Deposit = () => {
  const { theme } = useContext(ThemeContext);
  const {
    operation,
    setOperation,
    date,
    setDate,
    time,
    setTime,
    note,
    setNote,
    brutto,
    setBrutto,
    depositDatas,
    setDepositDatas,
  } = useContext(DepositContext);

  const operationHandler = (event: ChangeEvent) => {
    event.preventDefault();
    const operation = event.target.value;
    setOperation(operation);
  };
  const dateHandler = (event: ChangeEvent) => {
    event.preventDefault();
    const date = event.target.value;
    setDate(date);
  };
  const timeHandler = (event: ChangeEvent) => {
    event.preventDefault();
    const time = event.target.value;
    setTime(time);
  };
  const bruttoHandler = (event: ChangeEvent) => {
    event.preventDefault();
    const brutto = event.target.value;
    setBrutto(brutto);
  };
  const noteHandler = (event: ChangeEvent) => {
    event.preventDefault();
    const note = event.target.value;
    setNote(note);
  };
  const handleSubmit = (event: FormEvent) => {
    const newDepositDatas = {
      operation: operation,
      date: date,
      time: time,
      brutto: brutto,
      note: note,
    };
    setDepositDatas((prevDepositDatas) => [
      ...prevDepositDatas,
      newDepositDatas,
    ]);
  };
  console.log(depositDatas);

  return (
    <form
      className={`${styles["container"]} ${
        theme ? styles["dark"] : styles["light"]
      }`}>
      <h1>Wpłata / wypłata i inne</h1>
      <div className={styles["selectGroup"]}>
        <label>Operacja:</label>
        <Form.Select onChange={operationHandler}>
          <option>Wpłata</option>
          <option>Wypłata</option>
        </Form.Select>
      </div>
      <div className={styles["datePicker"]}>
        <label>Data/czas:</label>
        <Form.Control type="date" onChange={dateHandler} />
        <Form.Control type="time" onChange={timeHandler} />
      </div>
      <div className={styles["amountInput"]}>
        <label>Kwota brutto:</label>
        <PatternFormat
          onChange={bruttoHandler}
          className={styles["inputGroup"]}
          format="## ### ### ###"></PatternFormat>
      </div>
      <div className={styles["noteInput"]}>
        <label>Notatka:</label>
        <Form.Control as="textarea" rows={5} onChange={noteHandler} />
      </div>
      <div className={styles["btnGroup"]}>
        <Button onClick={handleSubmit}>Zapisz</Button>
      </div>
    </form>
  );
};

export default Deposit;
