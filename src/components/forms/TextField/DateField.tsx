import styles from "../../styles/FundsForm.module.scss";
import PropTypes from "prop-types";
import { LocalStorage } from "../../../services/LocalStorage.service";
import axios from "axios";
import { useEffect, useState } from "react";
import RateForSelectedDay from "./RateForSelectedDay";
import { fetchRateFromDate } from '../../../api/fetchratefromdate.api'

const DateField = ({ formik, toCurrency, fromCurrency }) => {
  const handleDateOnBlur = () => {
    formik.handleBlur("date");
  };
  const [, setDate] = useState("");
  const [, setSelectedFromCurrencyRate] = useState<string>();
  const [, setSelectedTocurrencyRate] = useState<string>();
  const [rateForSelectedDate, setRateForSelectedDate] = useState<string>();
  const [error, setError] = useState(false);

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
      const { selectedFromCurrency, selectedToCurrency } = await fetchRateFromDate(
        fromCurrency,
        toCurrency,
        formik.values.date
      );

      if (fromCurrency === "PLN") {
        setSelectedFromCurrencyRate(1);
        setRateForSelectedDate(1);
        setRateForSelectedDate(selectedFromCurrency / selectedToCurrency);
      } else if (fromCurrency !== "PLN") {
        setRateForSelectedDate(selectedFromCurrency / selectedToCurrency);
      }

      if (toCurrency === "PLN") {
        setSelectedTocurrencyRate(1);
        setRateForSelectedDate(1);
        setRateForSelectedDate(
          (selectedFromCurrency / selectedToCurrency).toFixed(3)
        );
      } else if (toCurrency !== "PLN") {
        setRateForSelectedDate(
          (selectedFromCurrency / selectedToCurrency).toFixed(3)
        );
      }
      setError(false);
    } catch (error) {
      setError(true);
    }
  };
  const handleDateChange = (event) => {
    formik.handleChange(event);
    fetchRateFromDateHandler();
  };
  useEffect(() => {
    fetchRateFromDateHandler();
  }, [
    fromCurrency,
    toCurrency,
    rateForSelectedDate,
    formik.values.date,
    error,
  ]);

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
        onChange={handleDateChange}
        onBlur={handleDateOnBlur}
      />
      <RateForSelectedDay
        rateForSelectedDate={rateForSelectedDate}
        date={formik.values.date}
        toCurrency={toCurrency}
        fromCurrency={fromCurrency}
        error={error}
      />
    </div>
  );
};
DateField.propTypes = {
  formik: PropTypes.object.isRequired,
};

export default DateField;
