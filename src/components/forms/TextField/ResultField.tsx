import styles from "../../styles/FundsForm.module.scss";
import PropTypes from "prop-types";
import React from "react";

const ResultField = ({ formik }) => {
  return (
    <div className={`input-group ${styles.inputStyle}`}>
      <label className="input-group-text" htmlFor="result">
        Wynik
      </label>
      <input
        type="number"
        name="result"
        value={`${(formik.values.result = (
          formik.values.amount * formik.values.rate
        ).toFixed(2))}`}
        onChange={formik.handleChange}
        className="form-control"
        aria-describedby="basic-addon1"></input>
    </div>
  );
};
ResultField.propTypes = {
  formik: PropTypes.object.isRequired,
};
export default ResultField;
