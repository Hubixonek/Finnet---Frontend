import styles from "../styles/Table.module.scss";
import SummaryDataTable from "./SummaryDataTablePresenter";

type TTableWithFundsDatasPresenter = {
  funds: [];
  removeFundsData: Function;
  profitOrLossInPln: string;
  totalProfitOrLoss: string;
  refreshedProfitLoss: string;
  refreshRateApi: string;
  totalRefreshedProfitLoss: string;
  theme: boolean;
};

const TableWithFundsDatasPresenter = ({
  funds,
  removeFundsData,
  profitOrLossInPln,
  totalProfitOrLoss,
  refreshedProfitLoss,
  refreshRateApi,
  totalRefreshedProfitLoss,
  theme,
}: TTableWithFundsDatasPresenter) => {
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
            {funds.map((fund: any, index: number) => (
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
        totalRefreshedProfitLoss={totalRefreshedProfitLoss}
      />
    </div>
  );
};

export default TableWithFundsDatasPresenter;
