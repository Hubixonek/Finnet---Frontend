import styles from "../../styles/FundsForm.module.scss";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { LocalStorage } from "../../../services/LocalStorage.service";
import React from "react";

const RateField = ({ formik, fromCurrency, toCurrency }) => {
  const handleRateOnBlur = () => {
    formik.handleBlur("rate");
  };
  const [, setRate] = useState("");

  useEffect(() => {
    const data = LocalStorage.get("rate");
    if (data) {
      setRate(data);
      formik.setFieldValue("rate", data);
    }
  }, []);

  useEffect(() => {
    LocalStorage.set("rate", formik.values.rate);
  }, [formik.values.rate]);

  return (
    <div className={`input-group ${styles.inputStyle}`}>
      <label htmlFor="rate"></label>
      <input
        className={`form-control ${
          formik.touched.rate && formik.errors.rate ? styles.errorInput : ""
        }`}
        name="rate"
        value={formik.values.rate}
        onChange={formik.handleChange}
        onBlur={handleRateOnBlur}
        type="number"
        placeholder="Kurs"
      />
      <span className="input-group-text w-50">
        {fromCurrency}
        {formik.values.fromCurrency && formik.values.toCurrency && "/"}
        {toCurrency}
      </span>
    </div>
  );
};
RateField.propTypes = {
  formik: PropTypes.object.isRequired,
};
export default RateField;
