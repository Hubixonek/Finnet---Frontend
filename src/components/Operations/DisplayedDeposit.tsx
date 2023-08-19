import styles from "../styles/Deposit.module.scss";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { ImCross } from "react-icons/im";
import { ThemeContext } from "../../contexts/ThemeContext";
import { DepositContext } from "../../contexts/DepositContext";
import Button from "react-bootstrap/esm/Button";
import "react-toastify/dist/ReactToastify.css";
import { DisplayContext } from "../../contexts/DisplayDepositContext";

const DisplayedDeposit = () => {
  const { theme } = useContext(ThemeContext);
  const {
    date,
    time,
    note,
    brutto,
    setOperation,
    setDate,
    setTime,
    setNote,
    setBrutto,
    sumDeposit,
    operation,
    setSumDeposit,
    handleSubmit,
    showToastMessage,
  } = useContext(DepositContext);

  const { displayDeposit, setDisplayDeposit } = useContext(DisplayContext);

  const hideDepositFormHandler = () => {
    setDisplayDeposit(!displayDeposit);
  };

  const operationHandler = (event: ChangeEvent<HTMLOptionElement>) => {
    const operation = event.target.value;
    setOperation(operation);
  };
  const dateHandler = (event: ChangeEvent<HTMLDataElement>) => {
    const date = event.target.value;
    setDate(date);
  };
  const timeHandler = (event: ChangeEvent<HTMLTimeElement>) => {
    const time = event.target.value;
    setTime(time);
  };
  const bruttoHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const brutto = event.target.value;
    setBrutto(brutto);
  };
  const noteHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const note = event.target.value;
    setNote(note);
  };
  const handleSave = () => {
    handleSubmit();
    showToastMessage();
  };
  console.log(operation);
  return (
    <form
      className={`${styles["container"]} ${
        theme ? styles["dark"] : styles["light"]
      }`}>
      <ImCross className={styles["cancel"]} onClick={hideDepositFormHandler} />
      <h1>Wpłata / wypłata i inne</h1>
      <div className={styles["selectGroup"]}>
        <label>Operacja:</label>
        <Form.Select onChange={operationHandler}>
          <option value="Wpłata">Wpłata</option>
          <option value="Wypłata">Wypłata</option>
        </Form.Select>
      </div>
      <div className={styles["selectGroup"]}>
        <label>Stan konta:</label>
        <Form.Control value={sumDeposit} onChange={event => setSumDeposit(event.target.value)}></Form.Control>
      </div>
      <div className={styles["datePicker"]}>
        <label>Data i czas operacji:</label>
        <Form.Control type="date" onChange={dateHandler} value={date} />
        <Form.Control type="time" onChange={timeHandler} value={time} />
      </div>
      <div className={styles["amountInput"]}>
        <label>Kwota brutto:</label>
        <Form.Control onChange={bruttoHandler} value={brutto}></Form.Control>
      </div>
      <div className={styles["noteInput"]}>
        <label>Notatka:</label>
        <Form.Control
          as="textarea"
          rows={5}
          onChange={noteHandler}
          value={note}
        />
      </div>
      <div className={styles["btnGroup"]}>
        <Button
          onClick={() => {
            handleSave();
          }}>
          Zapisz
        </Button>
      </div>
    </form>
  );
};

export default DisplayedDeposit;
