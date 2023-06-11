import { useFormik } from "formik";
import { useState, useEffect } from "react";
import styles from "../styles/FundsForm.module.scss";
import DateField from "../forms/TextField/DateField";
import AmountField from "../forms/TextField/AmountField";
import SelectFromCurrency from "../forms/Select/SelectFromCurrency";
import SelectToCurrency from "../forms/Select/SelectToCurrency";
import RateField from "../forms/TextField/RateField";
import ResultField from "../forms/TextField/ResultField";
import RateOfApiField from "../forms/TextField/RateOfApiField";
import TableWithFundsDatas from "../Table/TableWithFundsDatas";
import Button from "../forms/Button/Button";
import axios from "axios";

const validate = (values) => {
  const errors = {};
  if (!values.date) {
    errors.date = "* Data jest wymagana!";
  }
  if (!values.amount) {
    errors.amount = "* Kwota jest wymagana!";
  }
  if (!values.fromCurrency) {
    errors.fromCurrency = "* Proszę wybrać posiadaną walutę!";
  }
  if (!values.rate) {
    errors.rate = "* Kurs jest wymagany!";
  }
  if (!values.toCurrency) {
    errors.toCurrency = "* Proszę wybrać wymienianą walutę!";
  }
  return errors;
};

const FundsForm = () => {
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [funds, setFunds] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [selectedToRate, setSelectedToRate] = useState("");
  const [selectedFromRate, setSelectedFromRate] = useState("");
  const [rate, setRate] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.nbp.pl/api/exchangerates/tables/A/${
          fromCurrency && toCurrency
        }`
      );
      const allCurrencies = response.data[0].rates.map((rate) => ({
        code: rate.code,
        name: rate.currency,
        rate: rate.mid,
      }));
      setCurrencies(allCurrencies);
    } catch (error) {
      console.error("Błąd przy pobieraniu danych", error);
    }
  };
  useEffect(() => {
    const data = localStorage.getItem("fundsData");
    if (data) {
      setFunds(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("fundsData", JSON.stringify(funds));
  }, [funds]);

  const formik = useFormik({
    initialValues: {
      date: "",
      amount: "",
      rate: "",
      fromCurrency: "",
      result: "",
      toCurrency: "",
    },
    validate,
    onSubmit: (values) => {
      const fundsObject = {
        id: Math.random().toString(),
        date: formik.values.date,
        amount: formik.values.amount,
        rate: formik.values.rate,
        fromCurrency: fromCurrency,
        result: formik.values.result,
        toCurrency: toCurrency,
        apiRate: rate,
        selectedFromRate: selectedFromRate,
        selectedToRate: selectedToRate,
        resultByRateFromApi:
          formik.values.result - (formik.values.amount * rate).toFixed(2),
      };
      setFunds([...funds, fundsObject]);
      console.log(JSON.stringify(values, null));
    },
  });

  const handleRemoveFundsData = (id) => {
    setFunds(funds.filter((funds) => funds.id !== id));
  };
  const fromCurrencyChangeHandler = (event) => {
    const selectedCurrency = event.target.value;
    setFromCurrency(selectedCurrency);

    const selectedRate = currencies.find(
      (currency) => currency.code === selectedCurrency
    )?.rate;
    setSelectedFromRate(selectedRate);
    formik.setFieldValue("fromCurrency", selectedCurrency);

    if (selectedCurrency === "PLN") {
      setSelectedFromRate(1);
      setRate(1);
      formik.setFieldValue("fromCurrency", selectedCurrency);
      setRate(selectedFromRate / selectedToRate);
    } else if (fromCurrency !== "PLN") {
      setRate((selectedRate / selectedToRate).toFixed(2));
    }

    if (selectedCurrency === toCurrency) {
      setToCurrency(fromCurrency);
      setSelectedToRate(selectedFromRate);
      formik.setFieldValue("toCurrency", fromCurrency);
    }
  };

  const toCurrencyChangeHandler = (event) => {
    const selectedCurrency = event.target.value;
    setToCurrency(selectedCurrency);

    const selectedRate = currencies.find(
      (currency) => currency.code === selectedCurrency
    )?.rate;
    setSelectedToRate(selectedRate);
    formik.setFieldValue("toCurrency", selectedCurrency);

    if (selectedCurrency === "PLN") {
      setSelectedToRate(1);
      setRate(1);
      formik.setFieldValue("toCurrency", selectedCurrency);
      setRate(selectedFromRate / selectedToRate);
    } else if (toCurrency !== "PLN") {
      setRate((selectedFromRate / selectedRate).toFixed(2));
    }

    if (selectedCurrency === fromCurrency) {
      setFromCurrency(toCurrency);
      setSelectedFromRate(selectedToRate);
      formik.setFieldValue("fromCurrency", toCurrency);
    }
  };

  useEffect(() => {
    if (fromCurrency !== "PLN" && toCurrency !== "PLN") {
      const rate = (selectedFromRate / selectedToRate).toFixed(2);
      setRate(rate);
    } else if (fromCurrency === "PLN") {
      const rate = (1 / selectedToRate).toFixed(2);
      setRate(rate);
    } else if (toCurrency === "PLN") {
      const rate = (selectedFromRate / 1).toFixed(2);
      setRate(rate);
    }
  }, [selectedFromRate, selectedToRate, fromCurrency, toCurrency]);

  return (
    <div>
      <form className={styles["formHeader"]} onSubmit={formik.handleSubmit}>
        <div className={styles["form_input--container"]}>
          <h1 className={styles["h1-style"]}>Przelicz kursy</h1>
          <DateField formik={formik}></DateField>
          <AmountField formik={formik}></AmountField>
          <SelectFromCurrency
            formik={formik}
            fromCurrency={fromCurrency}
            currencies={currencies}
            fromCurrencyChangeHandler={
              fromCurrencyChangeHandler
            }></SelectFromCurrency>
          <RateField
            formik={formik}
            toCurrency={toCurrency}
            fromCurrency={fromCurrency}></RateField>
          <SelectToCurrency
            formik={formik}
            fromCurrency={fromCurrency}
            currencies={currencies}
            toCurrency={toCurrency}
            toCurrencyChangeHandler={
              toCurrencyChangeHandler
            }></SelectToCurrency>
          <ResultField formik={formik}></ResultField>
          <RateOfApiField toCurrency={toCurrency} rate={rate}></RateOfApiField>
          <Button></Button>
          {formik.touched.date && formik.errors.date ? (
            <div className={styles["errorMessage"]}>{formik.errors.date}</div>
          ) : null}
          {formik.touched.amount && formik.errors.amount ? (
            <div className={styles["errorMessage"]}>{formik.errors.amount}</div>
          ) : null}
          {formik.touched.fromCurrency && formik.errors.fromCurrency ? (
            <div className={styles["errorMessage"]}>
              {formik.errors.fromCurrency}
            </div>
          ) : null}
          {formik.touched.rate && formik.errors.rate ? (
            <div className={styles["errorMessage"]}>{formik.errors.rate}</div>
          ) : null}
          {formik.touched.toCurrency && formik.errors.toCurrency ? (
            <div className={styles["errorMessage"]}>
              {formik.errors.toCurrency}
            </div>
          ) : null}
        </div>
      </form>
      {funds.length > 0 && (
        <TableWithFundsDatas
          funds={funds}
          removeFundsData={handleRemoveFundsData}
        />
      )}
    </div>
  );
};

export default FundsForm;
