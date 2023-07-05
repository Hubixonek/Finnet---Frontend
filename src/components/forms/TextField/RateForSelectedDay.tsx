import React from "react";
import styles from "../../styles/FundsForm.module.scss";

const RateForSelectedDay = ({
  date,
  rateForSelectedDate,
  toCurrency,
  error,
}) => {
  return (
    <div className={`input-group ${styles.inputStyle}`}>
      <label className="input-group-text w-100">{`Kurs z ${date} dla ${toCurrency}`}</label>
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
          style={{ color: "rgb(6, 179, 6)" }}
          value={rateForSelectedDate}
          readOnly
        />
      )}
    </div>
  );
};

export default RateForSelectedDay;
