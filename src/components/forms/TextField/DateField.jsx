import styles from "../../styles/FundsForm.module.scss";
import PropTypes from "prop-types";
import { LocalStorage } from "../../../services/LocalStorage.service";
import { useEffect, useState } from "react";
const DateField = ({ formik }) => {
  const handleDateOnBlur = () => {
    formik.handleBlur("date");
  };
  const [, setDate] = useState("");

  useEffect(() => {
    const data = LocalStorage.get("date");
    if (data) {
      setDate(data);
      formik.setFieldValue("date", data);
    }
  }, []);

  useEffect(() => {
    LocalStorage.set("date", formik.values.date);
  }, [formik.values.date]);
  return (
    <div className="input-group">
      <label className="input-group-text w-50" htmlFor="date">
        Data operacji
      </label>
      <input
        className={`form-control ${
          formik.touched.date && formik.errors.date ? styles.errorInput : ""
        }`}
        name="date"
        type="date"
        value={
          formik.values.date
            ? formik.values.date
            : new Date().toISOString().substr(0, 10)
        }
        onChange={formik.handleChange}
        onBlur={handleDateOnBlur}
      />
    </div>
  );
};
DateField.propTypes = {
  formik: PropTypes.object.isRequired,
};

export default DateField;
