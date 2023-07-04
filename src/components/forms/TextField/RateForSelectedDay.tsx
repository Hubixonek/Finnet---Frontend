import React from "react";
import styles from "../../styles/FundsForm.module.scss";
const RateForSelectedDay = ({ date, rateForSelectedDate, toCurrency }) => {
  console.log(rateForSelectedDate);
  return (
    <div className={`input-group ${styles.inputStyle}`}>
      <label className="input-group-text w-100">{`Kurs z ${date} dla ${toCurrency}`}</label>
      <input className="form-control" value={rateForSelectedDate} />
    </div>
  );
};
export default RateForSelectedDay;
