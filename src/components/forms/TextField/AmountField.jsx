import styles from "../../styles/FundsForm.module.scss";
import PropTypes from "prop-types";

const AmountField = ({ formik }) => {
  const handleAmountOnBlur = () => {
    formik.handleBlur("amount");
  };
  return (
    <div className={`input-group ${styles.inputStyle}`}>
      <label className="input-group-text w-50" htmlFor="amount">
        Twoja kwota
      </label>
      <input
        className={`form-control ${
          formik.touched.amount && formik.errors.amount ? styles.errorInput : ""
        }`}
        name="amount"
        type="number"
        value={formik.values.amount}
        onChange={formik.handleChange}
        onBlur={handleAmountOnBlur}
        placeholder="Wpisz kwotę!"
      />
    </div>
  );
};
AmountField.propTypes = {
  formik: PropTypes.object.isRequired,
};
export default AmountField;
