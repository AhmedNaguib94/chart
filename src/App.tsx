import { useState } from "react";
import "./App.css";
import ChartComponent from "./pages/components/chart/chart";
import DatePickerComponent from "./pages/components/datePicker/date-picker";
import type { Dayjs } from "dayjs";

const App = (): JSX.Element => {
  const [fromDate, setFromDate] = useState<string>();
  const [toDate, setToDate] = useState<string>();

  const onRangeChange = (
    dates: null | (Dayjs | null)[],
    dateStrings: string[]
  ): void => {
    setFromDate(dateStrings[0]);
    setToDate(dateStrings[1]);
  };

  return (
    <div className="app">
      <DatePickerComponent onChange={onRangeChange} />
      <ChartComponent fromDate={fromDate} toDate={toDate} />
    </div>
  );
};

export default App;
