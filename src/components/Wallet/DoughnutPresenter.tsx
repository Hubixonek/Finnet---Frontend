import styles from "../styles/Doughnut.module.scss";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { DepositContext } from "../../contexts/DepositContext";
import { useContext } from "react";
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutPresenter = () => {
  const { sumDeposit } = useContext(DepositContext);

  const data = {
    labels: [
      "Gotówka",
      "Lokaty",
      "Obligację",
      "ETF",
      "Akcje spółek",
      "Surowce",
    ],
    datasets: [
      {
        label: "Udział walorów",
        data: [`${sumDeposit}`, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className={styles["container"]}>
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutPresenter;
