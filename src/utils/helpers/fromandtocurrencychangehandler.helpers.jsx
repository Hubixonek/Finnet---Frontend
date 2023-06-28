

const FromAndToCurrencyChangeHandler = ({
  fromCurrency,
  toCurrency,
  setFromCurrency,
  setToCurrency,
  selectedFromRate,
  selectedToRate,
  setSelectedFromRate,
  setSelectedToRate,
  setRate,
  formik,
  currencies,
}) => {
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


  return {
    fromCurrencyChangeHandler,
    toCurrencyChangeHandler,
  };
};

export default FromAndToCurrencyChangeHandler;
