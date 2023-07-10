import styles from "../../styles/FundsForm.module.scss";

type rateOfApiFieldProps = {
  toCurrency: string;
  rate: number;
};

const RateOfApiField = ({ toCurrency, rate } : rateOfApiFieldProps) => {
  return (
    <div className={`input-group ${styles.inputStyle}`}>
      <label className="input-group-text w-70" htmlFor="currently">
        Kurs z dziś {`${toCurrency}`}
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
