import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AreaChartPresenter = () => {
  const data = [
    {
      date: "2023-09-01",
      value: 1500,
    },
    {
      date: "2023-09-02",
      value: 11500,
    },
    {
      date: "2023-09-03",
      value: 700,
    },
    {
      date: "2023-09-04",
      value: 15700,
    },
    {
      date: "2023-09-05",
      value: 11500,
    },
    {
      date: "2023-09-06",
      value: 5500,
    },
    {
      date: "2023-09-07",
      value: 25200,
    },
    
  ];

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#8884d8" fill="lime" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
export default AreaChartPresenter;
