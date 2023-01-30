import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getChartDataApi } from "../../../data/api/char.api";
import { ChartConfig, ChartProps } from "../../../data/models/chartData.types";
import { formatChartData } from "../../../helper/helper-functions";

const ChartComponent = ({ fromDate, toDate }: ChartProps) => {
  const [chartData, setChartData] = useState<ChartConfig>({
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
    getChartData(fromDate, toDate);
  }, [fromDate, toDate]);

  const getChartData = (fromDate: string | undefined, toDate: string | undefined) => {
    getChartDataApi().then((res) => {
      setChartData((current: ChartConfig): ChartConfig => {
        return {
          ...current,
          series: [{ data: formatChartData(res.data, fromDate, toDate) }],
        };
      });
    });
  };

  return (
    <div id="chart">
      {chartData?.series?.length && (
        <Chart
          options={chartData?.options}
          series={chartData?.series}
          type="candlestick"
          height={400}
        />
      )}
    </div>
  );
};

export default ChartComponent;
