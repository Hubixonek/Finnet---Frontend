import { useContext } from "react";
import styles from "../styles/Table.module.scss";
import { ThemeContext } from "../../contexts/ThemeContext";

const SummaryDataTable = ({ totalProfitOrLoss }) => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`${styles["summarydatas_table--tr"]} ${theme ? styles['dark'] : styles['light']}`}>
      <h3>Podsumowanie operacji</h3>
      <p
        className={styles["profitOrLoss"]}
        style={{
          color: parseFloat(totalProfitOrLoss) < 0 ? "red" : "green",
        }}>
        {`${
          parseFloat(totalProfitOrLoss) > 0 ? "Zysk : " : "Strata:"
        } ${totalProfitOrLoss} PLN`}
      </p>
    </div>
  );
};

export default SummaryDataTable;
