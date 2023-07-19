import { LocalStorage } from "../../../services/LocalStorage.service";
import styles from "../../styles/FundsForm.module.scss";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
const AmountField = ({ formik }) => {
  const handleAmountOnBlur = () => {
    formik.handleBlur("amount");
  };
  
  const [, setAmount] = useState("");

  useEffect(() => {
    const data = LocalStorage.get("amount");
    if (data) {
      setAmount(data);
      formik.setFieldValue("amount", data);
    }
  }, []);

  useEffect(() => {
    LocalStorage.set("amount", formik.values.amount);
  }, [formik.values.amount]);

  return (
    <div className={`input-group ${styles.inputStyle}`}>
      <label className="input-group-text w-50" htmlFor="amount">
        Twoja kwota
      </label>
      <input
        className={`form-control ${
          formik.touched.amount && formik.errors.amount ? styles.errorInput : ""
        }`}
        min={1}
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
