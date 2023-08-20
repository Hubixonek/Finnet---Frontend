import { useContext } from "react";
import { useEffect, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import axios from "axios";
import TableWithFundsDatasPresenter from "./TableWithFundsDatasPresenter";

interface ITableWithFundsDatasProps {
  funds: Array<T>;
  removeFundsData: (value: Function) => void;
}
type TThemeContext = {
  theme: boolean;
};

const TableWithFundsDatasContainer = ({ funds, removeFundsData }) => {
  const [profitOrLossInPln, setProfitOrLossInPln] = useState([]);
  const [totalProfitOrLoss, setTotalProfitOrLoss] = useState([]);
  const [refreshedProfitLoss, setRefreshedProfitLoss] = useState([]);
  const [refreshRateApi, setRefreshRateApi] = useState([]);
  const [totalRefreshedProfitLoss, setTotalRefreshedProfitLoss] = useState();
  const { theme } = useContext(ThemeContext) as TThemeContext;

  const fetchDatasFromLocalStorage = async () => {
    try {
      const fromCurrencies = funds.map((fund) => fund.fromCurrency);
      const toCurrencies = funds.map((fund) => fund.toCurrency);
      const amount = funds.map((fund) => fund.amount);
      const result = funds.map((fund) => fund.result);

      const response = await axios.get(
        `https://api.nbp.pl/api/exchangerates/tables/A/?format=json${
          fromCurrencies && toCurrencies
        }`
      );
      const currencies = response.data[0].rates.map((rate) => ({
        code: rate.code,
        name: rate.currency,
        rate: rate.mid,
      }));

      const fromRates = fromCurrencies.map((currency) =>
        currency === "PLN"
          ? 1
          : currencies.find((currencyItem) => currencyItem.code === currency)
              ?.rate
      );
      const toRates = toCurrencies.map((currency) =>
        currency === "PLN"
          ? 1
          : currencies.find((currencyItem) => currencyItem.code === currency)
              ?.rate
      );

      const refreshRate = fromRates.map((rate, index) =>
        parseFloat((rate / toRates[index]).toFixed(3))
      );
      setRefreshRateApi(refreshRate);

      const refreshedResultByRateFromApi = result.map((res, index) =>
        parseFloat((amount[index] * refreshRate[index] - res).toFixed(2))
      );
      const refreshedProfitLoss = refreshedResultByRateFromApi.map(
        (res, index) => parseFloat(res * toRates[index]).toFixed(2)
      );
      setRefreshedProfitLoss(refreshedProfitLoss);

      const sum = refreshedProfitLoss.reduce(
        (acc, val) => acc + parseFloat(val),
        0
      );
      setTotalRefreshedProfitLoss(sum.toFixed(2));
    } catch (error) {
      console.error(error);
    }
  };
  const profitAndLoss = () => {
    const updatedProfitOrLossInPln = funds.map((fund) => {
      return (fund.resultByRateFromApi * fund.selectedToRate).toFixed(2);
    });
    setProfitOrLossInPln(updatedProfitOrLossInPln);

    const sum = updatedProfitOrLossInPln.reduce(
      (acc, val) => acc + parseFloat(val),
      0
    );
    setTotalProfitOrLoss(sum.toFixed(2));
  };
  useEffect(() => {
    profitAndLoss();
  }, [funds]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchDatasFromLocalStorage();
    }, 5000);
    return () => clearInterval(interval);
  }, [refreshedProfitLoss]);
  return (
    <TableWithFundsDatasPresenter
      funds={funds}
      removeFundsData={removeFundsData}
      profitOrLossInPln={profitOrLossInPln}
      totalProfitOrLoss={totalProfitOrLoss}
      refreshedProfitLoss={refreshedProfitLoss}
      refreshRateApi={refreshRateApi}
      totalRefreshedProfitLoss={totalRefreshedProfitLoss}
      theme={theme}
    />
  );
};

export default TableWithFundsDatasContainer;
