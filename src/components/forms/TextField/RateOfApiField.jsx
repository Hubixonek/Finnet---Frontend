import styles from "../../styles/FundsForm.module.scss";
const RateOfApiField = ({ toCurrency, rate }) => {
  return (
    <div className={`input-group ${styles.inputStyle}`}>
      <label className="input-group-text w-70" htmlFor="currently">
        Kurs NBP {`${toCurrency}`}
      </label>
      <input
        type="number"
        className="form-control"
        id="api-courses"
        value={isNaN(rate) ? "" : rate}
        readOnly={true}></input>
    </div>
  );
};

export default RateOfApiField;
