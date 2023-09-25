import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const AreaChartPresenter = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {},
      title: {
        display: true,
        text: "Wartość rolling return",
      },
    },
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Twój portfel fundusze",
        data: [252, 27, 251, 62, 123, 215, 14],
        borderColor: "lime",
        backgroundColor: "rgba(0, 255, 0, 0.13)",
      },
    ],
  };
  return <Line options={options} data={data} />;
};
export default AreaChartPresenter;
