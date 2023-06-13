import styles from "../../styles/FundsForm.module.scss";
import PropTypes from "prop-types";

const RateField = ({ formik, fromCurrency, toCurrency }) => {
  const handleRateOnBlur = () => {
    formik.handleBlur("rate");
  };
  
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
