import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import styles from "../styles/PieChart.module.scss";
const PieChartPresenter = () => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const data = [
    { name: "Group A", value: 800, fill: COLORS[0] },
    { name: "Group B", value: 300, fill: COLORS[1] },
    { name: "Group C", value: 300, fill: COLORS[2] },
    { name: "Group D", value: 200, fill: COLORS[3] },
  ];
  return (
    <div className={styles["container"]}>
      <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="value" data={data} label />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartPresenter;
