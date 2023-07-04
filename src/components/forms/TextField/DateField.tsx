import styles from "../../styles/FundsForm.module.scss";
import PropTypes from "prop-types";
import { LocalStorage } from "../../../services/LocalStorage.service";
import axios from "axios";
import { useEffect, useState } from "react";
import RateForSelectedDay from "./RateForSelectedDay";

const DateField = ({ formik, toCurrency, fromCurrency }) => {
  const handleDateOnBlur = () => {
    formik.handleBlur("date");
  };
  const [, setDate] = useState("");
  const [selectedFromCurrencyRate, setSelectedFromCurrencyRate] = useState();
  const [selectedToCurrencyRate, setSelectedTocurrencyRate] = useState();
  const [rateForSelectedDate, setRateForSelectedDate] = useState();
  console.log(
    `Przeliczony kurs  ${toCurrency} z dnia dla ${formik.values.date} : ${rateForSelectedDate}`
  );
  useEffect(() => {
    const data = LocalStorage.get("date");
    if (data) {
      setDate(data);
      formik.setFieldValue("date", data);
    }
  }, []);

  useEffect(() => {
    fetchRateFromDateHandler();
  }, [fromCurrency, toCurrency, rateForSelectedDate]);

  useEffect(() => {
    LocalStorage.set("date", formik.values.date);
  }, [formik.values.date]);

  const fetchRateFromDateHandler = async () => {
    try {
      let ratesFrom;
      if (fromCurrency === "PLN") {
        ratesFrom = { mid: 1 };
      } else {
        const responseFromCurrency = await axios.get(
          `https://api.nbp.pl/api/exchangerates/rates/A/${fromCurrency}/${formik.values.date}/`
        );
        ratesFrom = responseFromCurrency.data.rates[0];
      }

      let ratesTo;
      if (toCurrency === "PLN") {
        ratesTo = { mid: 1 };
      } else {
        const responseToCurrency = await axios.get(
          `https://api.nbp.pl/api/exchangerates/rates/A/${toCurrency}/${formik.values.date}/`
        );
        ratesTo = responseToCurrency.data.rates[0];
      }

      const selectedFromCurrency = ratesFrom.mid;
      const selectedToCurrency = ratesTo.mid;

      console.log(
        `Kurs ${fromCurrency} z dnia ${formik.values.date}: ${selectedFromCurrency}`
      );
      console.log(
        `Kurs ${toCurrency} z dnia ${formik.values.date}: ${selectedToCurrency}`
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
    } catch (error) {
      console.log("Nie ma dostępnego kursu z tego dnia");
    }
  };
  const handleDateChange = (event) => {
    formik.handleChange(event);
    fetchRateFromDateHandler();
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
        onChange={handleDateChange}
        onBlur={handleDateOnBlur}
      />
      <RateForSelectedDay
        rateForSelectedDate={rateForSelectedDate}
        date={formik.values.date}
        toCurrency={toCurrency}
      />
    </div>
  );
};
DateField.propTypes = {
  formik: PropTypes.object.isRequired,
};

export default DateField;
