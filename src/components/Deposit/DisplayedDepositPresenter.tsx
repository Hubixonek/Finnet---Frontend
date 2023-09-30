import styles from "../styles/Deposit.module.scss";
import Form from "react-bootstrap/Form";
import { ImCross } from "react-icons/im";
import Button from "react-bootstrap/esm/Button";
import "react-toastify/dist/ReactToastify.css";
import { TMoney } from "../../types/money";
import { ChangeEvent } from "react";

type TDepositPresenterProps = {
  setSumDeposit: (value: TMoney) => void;
  operationHandler: ChangeEvent<HTMLOptionElement>;
  dateHandler: ChangeEvent<HTMLDataElement>;
  timeHandler: ChangeEvent<HTMLTimeElement>;
  bruttoHandler: ChangeEvent<HTMLInputElement>;
  noteHandler: ChangeEvent<HTMLTextAreaElement>;
  handleSave: Function;
  operation: string;
  date: string;
  time: string;
  note: string;
  brutto: TMoney;
  sumDeposit: TMoney;
  theme: boolean;
  hideDepositFormHandler: Function;
};
const DisplayedDepositPresenter = ({
  operationHandler,
  dateHandler,
  timeHandler,
  bruttoHandler,
  noteHandler,
  handleSave,
  hideDepositFormHandler,
  setSumDeposit,
  operation,
  date,
  time,
  note,
  brutto,
  sumDeposit,
  theme,
}: TDepositPresenterProps) => {
  return (
    <form
      className={`${styles["container"]} ${
        theme ? styles["dark"] : styles["light"]
      }`}>
      <ImCross className={styles["cancel"]} onClick={hideDepositFormHandler} />
      <h1>Wpłata / wypłata i inne</h1>
      <div className={styles["selectGroup"]}>
        <label>Operacja:</label>
        <Form.Select onChange={operationHandler} value={operation}>
          <option value="Wpłata">Wpłata</option>
          <option value="Wypłata">Wypłata</option>
        </Form.Select>
      </div>
      <div className={styles["selectGroup"]}>
        <label>Stan konta:</label>
        <Form.Control
          value={sumDeposit}
          onChange={(event) => setSumDeposit(event.target.value)}
          readOnly></Form.Control>
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

export default DisplayedDepositPresenter;
