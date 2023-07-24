import { useState, useEffect, useContext } from "react";
import styles from "../styles/FundsForm.module.scss";
import DateField from "../forms/TextField/DateField";
import AmountField from "../forms/TextField/AmountField";
import SelectFromCurrency from "../forms/Select/SelectFromCurrency";
import SelectToCurrency from "../forms/Select/SelectToCurrency";
import RateField from "../forms/TextField/RateField";
import ResultField from "../forms/TextField/ResultField";
import RateOfApiField from "../forms/TextField/RateOfApiField";
import FormikErrorValidation from "../forms/Errors/FormikErrorValidation";
import TableWithFundsDatas from "../Table/TableWithFundsDatas";
import Button from "../forms/Button/Button";
import useFormikHook from "../../hooks/useFormik.hooks";
import FromAndToCurrencyChangeHandler from "../../utils/helpers/fromandtocurrencychangehandler.helpers";
import { LocalStorage } from "../../services/LocalStorage.service";
import { fetchData } from "../../api/nbp.api";
import { ThemeContext } from "../../contexts/ThemeContext";

const FundsForm = () => {
  const [fromCurrency, setFromCurrency] = useState<string>("");
  const [toCurrency, setToCurrency] = useState<string>("");
  const [funds, setFunds] = useState<any[]>([]);
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [selectedToRate, setSelectedToRate] = useState<number>();
  const [selectedFromRate, setSelectedFromRate] = useState<number>();
  const [rate, setRate] = useState<number>(0);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const data = LocalStorage.get("fundsData");
    if (data && data.length > 0) {
      setFunds(data);
    }
  }, []);
  useEffect(() => {
    if (funds && funds.length > 0) {
      LocalStorage.set("fundsData", funds);
    }
  }, [funds]);

  useEffect(() => {
    fetchData(fromCurrency, toCurrency, setCurrencies);
  }, [fromCurrency, toCurrency]);

  const formik = useFormikHook({
    toCurrency,
    fromCurrency,
    rate,
    selectedFromRate,
    selectedToRate,
    setFunds,
    funds,
  });

  const handleRemoveFundsData = (id: string) => {
    setFunds(funds.filter((funds) => funds.id !== id));
  };
  const { fromCurrencyChangeHandler, toCurrencyChangeHandler } =
    FromAndToCurrencyChangeHandler({
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
    });
  useEffect(() => {
    if (fromCurrency !== "PLN" && toCurrency !== "PLN") {
      const rate = parseFloat((selectedFromRate / selectedToRate).toFixed(3));
      setRate(rate);
    } else if (fromCurrency === "PLN") {
      const rate = parseFloat((1 / selectedToRate).toFixed(3));
      setRate(rate);
    } else if (toCurrency === "PLN") {
      const rate = parseFloat((selectedFromRate / 1).toFixed(3));
      setRate(rate);
    }
  }, [selectedFromRate, selectedToRate, fromCurrency, toCurrency]);

  return (
    <>
      <form
        className={`${styles["formHeader"]} ${
          theme ? styles["dark"] : styles["light"]
        }`}
        onSubmit={formik.handleSubmit}>
        <div className={styles["form_input--container"]}>
          <h1 className={styles["h1-style"]}>Przelicz kursy</h1>
          <DateField
            formik={formik}
            toCurrency={toCurrency}
            fromCurrency={fromCurrency}
          />
          <AmountField formik={formik} />
          <SelectFromCurrency
            formik={formik}
            fromCurrency={fromCurrency}
            currencies={currencies}
            fromCurrencyChangeHandler={fromCurrencyChangeHandler}
          />
          <RateField
            formik={formik}
            toCurrency={toCurrency}
            fromCurrency={fromCurrency}
          />
          <SelectToCurrency
            formik={formik}
            currencies={currencies}
            toCurrency={toCurrency}
            toCurrencyChangeHandler={toCurrencyChangeHandler}
          />
          <ResultField formik={formik} />
          <RateOfApiField toCurrency={toCurrency} rate={rate} />
          <Button />
          <FormikErrorValidation formik={formik} />
        </div>
      </form>
      <TableWithFundsDatas
        currencies={currencies}
        funds={funds}
        removeFundsData={handleRemoveFundsData}
      />
    </>
  );
};

export default FundsForm;
