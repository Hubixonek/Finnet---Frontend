import { useEffect, useState } from "react";
import styles from "../styles/Table.module.scss";
import SummaryDataTable from "./SummaryDataTable";
import PropTypes from "prop-types";

const TableWithFundsDatas = ({ funds, removeFundsData }) => {
  const [profitOrLossInPln, setProfitOrLossInPln] = useState([]);
  const [totalProfitOrLoss, setTotalProfitOrLoss] = useState([]);

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

  return (
    <div>
      <div className={styles["main_table--container"]}>
        <h1 className={styles["h1_table"]}>Zapisane dane</h1>
        <div className="table-responsive">
          <table className={`table table-striped table-light ${styles.table}`}>
            <thead>
              <tr>
                <th scope="col">Data</th>
                <th scope="col">Kwota</th>
                <th scope="col">Kurs</th>
                <th scope="col">Wynik</th>
                <th scope="col">Kurs NBP</th>
                <th scope="col">Zysk/Strata</th>
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
                        parseFloat(profitOrLossInPln[index]) < 0
                          ? "red"
                          : "green",
                    }}>
                    {`${parseFloat(profitOrLossInPln[index]) > 0 ? "+" : ""}${
                      profitOrLossInPln[index]
                    } PLN`}
                  </td>
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
      </div>
      <SummaryDataTable
        totalProfitOrLoss={totalProfitOrLoss}></SummaryDataTable>
    </div>
  );
};
TableWithFundsDatas.propTypes = {
  funds: PropTypes.array.isRequired,
  removeFundsData: PropTypes.func.isRequired,
};
export default TableWithFundsDatas;
