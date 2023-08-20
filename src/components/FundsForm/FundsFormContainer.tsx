import { useState, useEffect, useContext } from "react";
import useFormikHook from "../../hooks/useFormik.hooks";
import FromAndToCurrencyChangeHandler from "../../utils/helpers/fromandtocurrencychangehandler.helpers";
import { LocalStorage } from "../../services/LocalStorage.service";
import { fetchData } from "../../api/nbp.api";
import { ThemeContext } from "../../contexts/ThemeContext";
import FundsFormPresenter from "./FundsFormPresenter";
type TThemeContext = {
  theme: boolean;
};
const FundsFormContainer = () => {
  const [fromCurrency, setFromCurrency] = useState<string>("");
  const [toCurrency, setToCurrency] = useState<string>("");
  const [funds, setFunds] = useState<any[]>([]);
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [selectedToRate, setSelectedToRate] = useState<number>();
  const [selectedFromRate, setSelectedFromRate] = useState<number>();
  const [rate, setRate] = useState<number>(0);
  const { theme } = useContext(ThemeContext) as TThemeContext;

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
    <FundsFormPresenter
      fromCurrency={fromCurrency}
      toCurrency={toCurrency}
      funds={funds}
      currencies={currencies}
      rate={rate}
      theme={theme}
      handleRemoveFundsData={handleRemoveFundsData}
      fromCurrencyChangeHandler={fromCurrencyChangeHandler}
      toCurrencyChangeHandler={toCurrencyChangeHandler}
      formik={formik}
    />
  );
};

export default FundsFormContainer;
