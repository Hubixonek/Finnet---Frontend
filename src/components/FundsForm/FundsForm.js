import { useFormik } from "formik";
import { useState, useEffect } from "react";
import styles from "../styles/FundsForm.module.css";
import TableWithFundsDatas from "../Table/TableWithFundsDatas";
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
  const [selectedToCurrencyRate, setSelectedToCurrencyRate] = useState("");
  const [selectedFromCurrencyRate, setSelectedFromCurrencyRate] = useState("");

  //logowanie w konsoli kursu dla pierwszej waluty
  console.log(`Kurs ${fromCurrency} ${selectedFromCurrencyRate}`);
  console.log(selectedToCurrencyRate);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.nbp.pl/api/exchangerates/tables/C/${
          toCurrency && fromCurrency
        }`
      );
      const allCurrencies = response.data[0].rates.map((rate) => ({
        code: rate.code,
        name: rate.currency,
        rate: rate.ask,
      }));
      setCurrencies(allCurrencies);
    } catch (error) {
      console.error("Błąd przy pobieraniu danych", error);
    }
  };

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
        selectedToCurrencyRate: selectedToCurrencyRate,
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

    const selectedToCurrencyRate = currencies.find(
      (currency) => currency.code === selectedCurrency
    )?.rate;
    setSelectedFromCurrencyRate(selectedToCurrencyRate);

    if (selectedCurrency === toCurrency) {
      setToCurrency(fromCurrency);
      setSelectedToCurrencyRate(fromCurrency);
      formik.setFieldValue("toCurrency", fromCurrency);
    }

    if (toCurrency === "PLN") {
      const inverseRate = selectedToCurrencyRate;
      setSelectedToCurrencyRate(inverseRate);
    } else {
      const rate = (
        selectedToCurrencyRate / parseFloat(selectedFromCurrencyRate)
      ).toFixed(2);
      setSelectedToCurrencyRate(rate);
    }
  };

  const toCurrencyChangeHandler = (event) => {
    const selectedCurrency = event.target.value;
    setToCurrency(selectedCurrency);

    const selectedToCurrencyRate = currencies.find(
      (currency) => currency.code === selectedCurrency
    )?.rate;
    setSelectedToCurrencyRate(selectedToCurrencyRate);
    formik.setFieldValue("toCurrency", selectedCurrency);

    if (selectedCurrency === fromCurrency) {
      setFromCurrency(toCurrency);
      formik.setFieldValue("fromCurrency", toCurrency);
    }
    if (fromCurrency === "PLN") {
      const inverseRate = (1 / parseFloat(selectedToCurrencyRate)).toFixed(2);
      setSelectedToCurrencyRate(inverseRate);
    } else {
      const rate = (
        selectedFromCurrencyRate / parseFloat(selectedToCurrencyRate)
      ).toFixed(2);
      setSelectedToCurrencyRate(rate);
    }
  };

  return (
    <div>
      <form className={styles["formHeader"]} onSubmit={formik.handleSubmit}>
        <div className={styles["form_input--container"]}>
          <h1 className={styles["h1-style"]}>Finnet</h1>
          <div className="input-group">
            <label className="input-group-text w-50" htmlFor="date">
              Data operacji
            </label>
            <input
              className={`form-control ${
                formik.touched.date && formik.errors.date
                  ? styles.errorInput
                  : ""
              }`}
              name="date"
              type="date"
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}></input>
          </div>
          <div className={`input-group ${styles.inputStyle}`}>
            <label htmlFor="amount"></label>
            <input
              className={`form-control ${
                formik.touched.amount && formik.errors.amount
                  ? styles.errorInput
                  : ""
              }`}
              name="amount"
              type="text"
              value={formik.values.amount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Kwota"
            />
          </div>
          <div className={`input-group ${styles.inputStyle}`}>
            <label htmlFor="fromCurrency"></label>
            <select
              className={`form-control ${
                formik.touched.fromCurrency && formik.errors.fromCurrency
                  ? styles.errorInput
                  : ""
              }`}
              value={fromCurrency}
              onChange={fromCurrencyChangeHandler}
              onBlur={formik.handleBlur}
              name="fromCurrency">
              <option value="">Wybierz walutę</option>
              <option value="PLN">PLN - polski złoty</option>
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.code} - {currency.name}
                </option>
              ))}
            </select>
          </div>
          <div className={`input-group ${styles.inputStyle}`}>
            <label htmlFor="rate"></label>
            <input
              className={`form-control ${
                formik.touched.rate && formik.errors.rate
                  ? styles.errorInput
                  : ""
              }`}
              name="rate"
              value={formik.values.rate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              placeholder="Kurs"
            />
            <span className="input-group-text w-50">
              {fromCurrency} {toCurrency}
            </span>
          </div>
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
              <option value="">Wybierz walutę</option>
              <option value="PLN">PLN - polski złoty</option>
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.code} - {currency.name}
                </option>
              ))}
            </select>
          </div>
          <div className={`input-group ${styles.inputStyle}`}>
            <label className="input-group-text" htmlFor="result">
              Wynik
            </label>
            <input
              type="number"
              name="result"
              value={`${(formik.values.result = (
                formik.values.amount * formik.values.rate
              ).toFixed(2))}`}
              onChange={formik.handleChange}
              className="form-control"
              aria-describedby="basic-addon1"></input>
          </div>
          <div className={`input-group ${styles.inputStyle}`}>
            <label className="input-group-text w-50" htmlFor="currently">
              Kurs {toCurrency}
            </label>
            <input
              type="text"
              className="form-control"
              id="api-courses"
              value={selectedToCurrencyRate}
              readOnly={true}></input>
          </div>
          <div className="save-btn mt-2">
            <button
              type="submit"
              className={`btn btn-primary form_button--savebtn ${styles.formButton}`}>
              Zapisz
            </button>
          </div>
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
      { (funds.length > 0) 
      && <TableWithFundsDatas
        funds={funds}
        removeFundsData={handleRemoveFundsData}
        />
      }
    </div>
  );
};

export default FundsForm;
