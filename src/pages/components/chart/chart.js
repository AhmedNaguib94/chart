import { useEffect, useState } from "react";
import Chart from 'react-apexcharts'
import { getChartDataApi } from "../../../data/api/char.api";
import { formatChartData } from "../../../helper/helper-functions";

const ChartComponent = () => {
  const [chartData, setChartData] = useState({
    options: {
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    },
  });

  useEffect(() => {
    getChartDataApi().then(
      res => {
        setChartData(current => {
          return { ...current, series: [{ data: formatChartData(res.data) }] }
        })
      })
  }, [])

  return (
    <div id="chart">
      {chartData?.series?.length && <Chart options={chartData?.options} series={chartData?.series} type="candlestick" height={400} />}
    </div>
  );
};

export default ChartComponent;
