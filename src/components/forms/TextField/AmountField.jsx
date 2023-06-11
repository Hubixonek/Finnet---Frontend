import styles from "../../styles/FundsForm.module.scss";
import PropTypes from "prop-types";

const AmountField = ({ formik }) => {
  const handleAmountOnBlur = () => {
    formik.handleBlur("amount");
  };
  return (
    <div className={`input-group ${styles.inputStyle}`}>
      <label htmlFor="amount"></label>
      <input
        className={`form-control ${
          formik.touched.amount && formik.errors.amount ? styles.errorInput : ""
        }`}
        name="amount"
        type="text"
        value={formik.values.amount}
        onChange={formik.handleChange}
        onBlur={handleAmountOnBlur}
        placeholder="Kwota"
      />
    </div>
  );
};
AmountField.propTypes = {
  formik: PropTypes.object.isRequired,
};
export default AmountField;
