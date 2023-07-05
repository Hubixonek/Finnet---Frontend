import styles from "../../styles/FundsForm.module.scss";
import moment from "moment";
const RateForSelectedDay = ({
  date,
  rateForSelectedDate,
  toCurrency,
  fromCurrency,
  error,
}) => {
  const formattedDate = moment(date).format("DD.MM.YYYY");

  return (
    <div className={`input-group ${styles.inputStyle}`}>
      <label
        style={{ fontWeight: "bold" }}
        className="input-group-text w-100">{`Kurs z ${formattedDate}`}</label>
      {error ? (
        <input
          className="form-control error"
          style={{ color: "red" }}
          value="Brak danych"
          readOnly
        />
      ) : (
        <input
          className="form-control"
          style={{ color: "royalblue", fontWeight: "bold" }}
          value={`${rateForSelectedDate} ${fromCurrency}/${toCurrency}`}
          readOnly
        />
      )}
    </div>
  );
};

export default RateForSelectedDay;
