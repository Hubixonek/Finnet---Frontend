import styles from "../../styles/FundsForm.module.scss";

const RateOfApiField = ({ toCurrency, rate }) => {
  return (
    <div className={`input-group ${styles.inputStyle}`}>
      <label className="input-group-text w-50" htmlFor="currently">
        Kurs {toCurrency}
      </label>
      <input
        type="text"
        className="form-control"
        id="api-courses"
        value={isNaN(rate) ? "Przeliczony" : rate}
        readOnly={true}></input>
    </div>
  );
};

export default RateOfApiField;
