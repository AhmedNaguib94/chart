export interface ChartData {
  x: string;
  y: number[];
}

export interface ChartDataResponse {
  Date: string;
  Open: number;
  High: number;
  Low: number;
  Close: number;
}

export interface ChartProps {
  fromDate: string | undefined;
  toDate: string | undefined;
}

export interface ChartConfig {
  options: {};
  series?: any[];
}
