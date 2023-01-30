import moment from "moment";
import { ChartData, ChartDataResponse } from "../data/models/chartData.types";

export const formatChartData = (
  data: ChartDataResponse[],
  fromDate: string = "",
  toDate: string = ""
): ChartData[] => {
  if (fromDate && toDate) {
    return mapDatetoChartFormat(
      data?.filter((item: ChartDataResponse) => {
        if (moment(item.Date).isBetween(fromDate, toDate)) {
          return item;
        }
      })
    );
  } else {
    return mapDatetoChartFormat(data);
  }
};

const mapDatetoChartFormat = (data: ChartDataResponse[]): ChartData[] => {
  return data?.map((item: ChartDataResponse) => {
    return {
      x: item.Date,
      y: [item.Open, item.High, item.Low, item.Close],
    };
  });
};
