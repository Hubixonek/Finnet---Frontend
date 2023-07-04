import React from "react";
import styles from "../../styles/FundsForm.module.scss";
const RateForSelectedDay = () => {
  return (
    <div className={`input-group ${styles.inputStyle}`}>
      <input
        className={`form-control`}
        name="rate"
        type="number"
        placeholder="Kurs z wybranego dnia"
        readOnly
/>
    </div>
  );
};
export default RateForSelectedDay;
