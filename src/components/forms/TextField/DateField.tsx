import styles from "../../styles/FundsForm.module.scss";
import PropTypes from "prop-types";
import { LocalStorage } from "../../../services/LocalStorage.service";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
const DateField = ({ formik, toCurrency, fromCurrency }) => {
  const handleDateOnBlur = () => {
    formik.handleBlur("date");
  };
  const [, setDate] = useState("");
  const [rateForSelectedDate, setRateForSelectedDate] = useState("");
  console.log(rateForSelectedDate);

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

  const fetchRateFromDateHandler = async () => {
    try {
      const response = await axios.get(
        `http://api.nbp.pl/api/exchangerates/rates/A/${
          fromCurrency && toCurrency
        }/${formik.values.date}/`
      );
      const rateForSelectedDate = response.data.rates[0].mid;
      setRateForSelectedDate(rateForSelectedDate);
    } catch (error) {
      console.log("Nie ma dostępnego kursu z tego dnia");
    }
  };

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
        onSelect={fetchRateFromDateHandler}
        onBlur={handleDateOnBlur}
      />
    </div>
  );
};
DateField.propTypes = {
  formik: PropTypes.object.isRequired,
};

export default DateField;
