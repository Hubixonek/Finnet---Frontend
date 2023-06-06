import { useEffect, useState } from "react";
import styles from "../styles/Table.module.scss";
import SummaryDataTable from "./SummaryDataTable";
import PropTypes from "prop-types";

const TableWithFundsDatas = ({ funds, removeFundsData }) => {
  const [profitOrLossInPln, setProfitOrLossInPln] = useState("");

  const profitAndLoss = () => {
    const profitLossArray = funds.map((fund) => {
      return (fund.profitAndLoss * fund.selectedToRate).toFixed(2);
    });
    setProfitOrLossInPln(profitLossArray);
  };

  useEffect(() => {
    profitAndLoss();
  }, [funds]);

  return (
    <div>
      <div>
        <main className={styles["main_table--container"]}>
          <h1 className={styles["h1_table"]}>Zapisane dane</h1>
          <div className="table-responsive">
            <table className={`table table-striped table-dark ${styles.table}`}>
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
                    <td>{fund.date}</td>
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
                            : "lime"
                      }}>
                      {`${profitOrLossInPln[index]} PLN`}
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
            <SummaryDataTable></SummaryDataTable>
          </div>
        </main>
      </div>
    </div>
  );
};
TableWithFundsDatas.propTypes = {
  funds: PropTypes.array.isRequired,
  removeFundsData: PropTypes.func.isRequired,
};
export default TableWithFundsDatas;
