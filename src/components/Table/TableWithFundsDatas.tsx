import React, { useContext } from "react";
import { useEffect, useState } from "react";
import styles from "../styles/Table.module.scss";
import SummaryDataTable from "./SummaryDataTable";
import PropTypes from "prop-types";
import { ThemeContext } from "../../contexts/ThemeContext";
import axios from "axios";

interface ITableWithFundsDatasProps {
  funds: Array<T>;
  removeFundsData: (value: Function) => void;
}
type TThemeContext = {
  theme: boolean;
};
const TableWithFundsDatas = ({
  funds,
  removeFundsData,
}: ITableWithFundsDatasProps) => {
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
    <div
      className={`${styles["main_table--container"]} ${
        theme ? styles["dark"] : styles["light"]
      }`}>
      <h1 className={styles["h1_table"]}>Zapisane dane</h1>
      <div className="table-responsive">
        <table
          className={`table table-striped table-light ${styles.table} ${
            theme ? "table-dark" : "table-light"
          }`}>
          <thead>
            <tr>
              <th scope="col">Data</th>
              <th scope="col">Kwota</th>
              <th scope="col">Kurs</th>
              <th scope="col">Wynik</th>
              <th scope="col">Kurs NBP</th>
              <th scope="col">Zysk/Strata</th>
              <th scope="col">Kurs po odświeżeniu</th>
              <th scope="scope">Zysk/Strata po odświeżeniu</th>
              <th scope="col">Usuń</th>
            </tr>
          </thead>
          <tbody>
            {funds.map((fund, index) => (
              <tr key={fund.id}>
                <td>
                  {fund.date
                    ? fund.date
                    : new Date().toISOString().substr(0, 10)}
                </td>
                <td>{fund.amount}</td>
                <td>{fund.rate}</td>
                <td>
                  {fund.result} {fund.toCurrency}
                </td>
                <td>{fund.apiRate}</td>
                <td
                  style={{
                    color:
                      parseFloat(profitOrLossInPln[index]) < 0 ? "red" : "lime",
                  }}>
                  {`${parseFloat(profitOrLossInPln[index]) > 0 ? "+" : ""}${
                    profitOrLossInPln[index]
                  } PLN`}
                </td>
                <td>{refreshRateApi[index]}</td>
                <td
                  style={{
                    color:
                      parseFloat(refreshedProfitLoss[index]) < 0
                        ? "red"
                        : "lime",
                  }}>
                  {refreshedProfitLoss[index] &&
                    `${parseFloat(refreshedProfitLoss[index]) > 0 ? "+" : ""}${
                      refreshedProfitLoss[index]
                    } PLN`}
                </td>{" "}
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFundsData(fund.id)}>
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <SummaryDataTable
        totalProfitOrLoss={totalProfitOrLoss}
        funds={funds}
        totalRefreshedProfitLoss={totalRefreshedProfitLoss}
      />
    </div>
  );
};

export default TableWithFundsDatas;
