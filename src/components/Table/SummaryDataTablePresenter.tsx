import styles from "../styles/Table.module.scss";

const SummaryDataTablePresenter = ({
  totalProfitOrLoss,
  totalRefreshedProfitLoss,
}) => {
  console.log(totalRefreshedProfitLoss);
  return (
    <>
      <div className={styles["summarydatas_table--tr"]}>
        <h3>Podsumowanie operacji</h3>
        <p
          className={styles["profitOrLoss"]}
          style={{
            color: parseFloat(totalProfitOrLoss) < 0 ? "red" : "lime",
          }}>
          {`${
            parseFloat(totalProfitOrLoss) > 0 ? "Zysk : " : "Strata:"
          } ${totalProfitOrLoss} PLN`}
        </p>
        <p
          className={styles["profitOrLoss"]}
          style={{
            color: parseFloat(totalRefreshedProfitLoss) > 0 ? "lime" : "red",
          }}>
          {totalRefreshedProfitLoss &&
            `${
              parseFloat(totalRefreshedProfitLoss) > 0
                ? "Zysk na dzisiaj : "
                : "Strata na dzisiaj: "
            }${totalRefreshedProfitLoss} PLN`}
        </p>
      </div>
    </>
  );
};

export default SummaryDataTablePresenter;
