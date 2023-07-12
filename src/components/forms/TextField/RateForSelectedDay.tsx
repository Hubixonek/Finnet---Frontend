import { useEffect, useState } from "react";
import styles from "../../styles/FundsForm.module.scss";
import moment from "moment";

type rateForSelectedDayProps = {
  date: string;
  rateForSelectedDate: number;
  toCurrency: string;
  fromCurrency: string;
  error: boolean;
};

const RateForSelectedDay = ({
  date,
  rateForSelectedDate,
  toCurrency,
  fromCurrency,
  error,
}: rateForSelectedDayProps) => {
  const formattedDate = moment(date || new Date().toISOString().substr(0, 10)).format("DD.MM.YYYY");





  return (
    <div className={`input-group ${styles["inputStyle"]}`}>
      <br></br>
      <label className="input-group">{formattedDate}</label>
      {error ? (
        <input
          className="form-control error"
          style={{ color: "red" }}
          value="Brak danych"
          readOnly
        />
      ) : (
        <input
          className={`form-control`}
          style={{ color: "royalblue", fontWeight: "bold" }}
          value={`${rateForSelectedDate} ${fromCurrency}/${toCurrency}`}
          readOnly
        />
      )}
    </div>
  );
};

export default RateForSelectedDay;
