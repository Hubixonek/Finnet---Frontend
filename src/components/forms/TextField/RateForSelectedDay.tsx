import { useEffect } from "react";
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
  const formattedDate = moment(date).format("DD.MM.YYYY");

  return (
    <div className={`input-group ${styles.inputStyle}`}>
      <br></br>
      <label className="input-group-text w-100 h-50">{`Kurs z ${formattedDate}`}</label>
      {error ? (
        <input
          className="form-control error"
          style={{ color: "red" }}
          value="Brak danych"
          readOnly
        />
      ) : (
        <input
          className={`form-control h-50 ${styles.inputRateDate}`}
          style={{ color: "royalblue", fontWeight: "bold" }}
          value={`${rateForSelectedDate} ${fromCurrency}/${toCurrency}`}
          readOnly
        />
      )}
    </div>
  );
};

export default RateForSelectedDay;
