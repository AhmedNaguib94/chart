import { useState } from "react";
import "./App.css";
import ChartComponent from "./pages/components/chart/chart";
import DatePickerComponent from "./pages/components/datePicker/data-picker";
import type { Dayjs } from "dayjs";

const App = (): JSX.Element => {
  const [fromDate, setFromDate] = useState<string>();
  const [toDate, setToDate] = useState<string>();

  const onRangeChange = (
    dates: null | (Dayjs | null)[],
    dateStrings: string[]
  ): void => {
    if (dates) {
      setFromDate(dateStrings[0]);
      setToDate(dateStrings[1]);
    }
  };

  return (
    <div className="App">
      <DatePickerComponent onChange={onRangeChange} />
      <ChartComponent fromDate={fromDate} toDate={toDate} />
    </div>
  );
}

export default App;
