import styles from "../../styles/FundsForm.module.scss";
import PropTypes from "prop-types";
import React from "react";

const SelectToCurrency = ({
  toCurrency,
  formik,
  toCurrencyChangeHandler,
  currencies,
}) => {
  return (
    <div className={`input-group ${styles.inputStyle}`}>
      <label htmlFor="toCurrency"></label>
      <select
        className={`form-control ${
          formik.touched.toCurrency && formik.errors.toCurrency
            ? styles.errorInput
            : ""
        }`}
        value={toCurrency}
        onChange={toCurrencyChangeHandler}
        onBlur={formik.handleBlur}
        name="toCurrency">
        <option value="" disabled>
          Wybierz walutę
        </option>
        <option value="PLN">PLN - polski złoty</option>
        {currencies.map((currency) => (
          <option key={currency.code} value={currency.code}>
            {currency.code} - {currency.name}
          </option>
        ))}
      </select>
    </div>
  );
};
SelectToCurrency.propTypes = {
  formik: PropTypes.object.isRequired,
};
export default SelectToCurrency;
