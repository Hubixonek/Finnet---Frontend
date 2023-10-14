import { useContext } from "react";
import styles from "../styles/DebtorList.module.scss";
import Form from "react-bootstrap/Form";
import DebtorTablePresenter from "./DebtorTablePresenter";
import Button from "react-bootstrap/Button";
const DebtorListPresenter = ({
  removeRow,
  reasonForLoan,
  handleDebtor,
  handleSubmit,
  row,
  theme,
  setRow,
  debtorList,
  setDebtorList,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles["container"]} ${
        theme ? styles["dark"] : styles["light"]
      }`}>
      <div className={styles["secondContainer"]}>
        <h1 className={theme ? styles["dark"] : styles["light"]}>
          Dodaj dłużnika do listy
        </h1>
        <div
          className={`${styles["itemGroup"]} ${
            theme ? styles["dark"] : styles["light"]
          }`}>
          <div className={styles["item"]}>
            <span>Imię dłużnika</span>
            <Form.Control
              type="text"
              placeholder="Imię dłużnika"
              name="name"
              onChange={handleDebtor}
            />
          </div>
          <div className={styles["item"]}>
            <span>Data pożyczki</span>
            <Form.Control
              type="date"
              onChange={handleDebtor}
              name="dateOfDebtor"
            />
          </div>
          <div className={styles["item"]}>
            <span>Termin spłaty</span>
            <Form.Control
              type="date"
              onChange={handleDebtor}
              name="repayment"
            />
          </div>
          <div className={styles["item"]}>
            <span>Kwota pożyczki w PLN</span>
            <div className={styles["wrapItems"]}>
              <Form.Control
                type="number"
                placeholder="Np. 500 PLN"
                onChange={handleDebtor}
                name="amount"
              />
            </div>
          </div>
          <div className={styles["item"]}>
            <br></br>
            <Form.Select onChange={handleDebtor} name="typeLoan">
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
            <Button
              variant="primary"
              className={styles["btnAdd"]}
              type="submit">
              Dodaj
            </Button>{" "}
          </div>
        </div>
      </div>
      <DebtorTablePresenter
        row={row}
        removeRow={removeRow}
        reasonForLoan={reasonForLoan}
        setRow={setRow}
        debtorList={debtorList}
        setDebtorList={setDebtorList}
      />
    </form>
  );
};
export default DebtorListPresenter;
