import styles from "../styles/Table.module.scss";

const SummaryDataTable = ({ totalProfitOrLoss }) => {
  return (
    <div className={styles["summarydatas_table--tr"]}>
      <h3>Podsumowanie operacji</h3>
      <p
        className={styles["profitOrLoss"]}
        style={{
          color: parseFloat(totalProfitOrLoss) < 0 ? "red" : "lime",
        }}>
        {`${
          parseFloat(totalProfitOrLoss) > 0 ? "Zysk :" : "Strata:"
        } ${totalProfitOrLoss} PLN`}
      </p>
    </div>
  );
};

export default SummaryDataTable;
