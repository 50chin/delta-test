import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import s from "./Charts.module.scss";

export const Charts = ({ title }) => {
  const options = {
    title: {
      text: title,
    },
    xAxis: {
      type: "datetime",
    },
    series: [
      {
        name: "сегодня",
        data: [
          [Date.UTC(2024, 11, 1), 1000],
          [Date.UTC(2024, 11, 2), 900],
          [Date.UTC(2024, 11, 3), 400],
          [Date.UTC(2024, 11, 4), 500],
          [Date.UTC(2024, 11, 5), 500],
        ],
      },
      {
        name: "вчера",
        data: [
          [Date.UTC(2024, 11, 1), 800],
          [Date.UTC(2024, 11, 2), 600],
          [Date.UTC(2024, 11, 3), 100],
          [Date.UTC(2024, 11, 4), 300],
        ],
      },
    ],
  };
  return (
    <div className={s.charts}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Charts;
