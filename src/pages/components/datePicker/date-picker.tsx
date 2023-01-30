import { DatePicker } from "antd";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import { DatePrickerProps } from "../../../data/models/date-picker.types";
import "./date-picker.css";

const { RangePicker } = DatePicker;

const DatePickerComponent = ({ onChange }: DatePrickerProps): JSX.Element => {
  const rangePresets: {
    label: string;
    value: [Dayjs, Dayjs];
  }[] = [
    { label: "Day", value: [dayjs().add(-1, "d"), dayjs()] },
    { label: "Week", value: [dayjs().add(-7, "d"), dayjs()] },
    { label: "Month", value: [dayjs().add(-30, "d"), dayjs()] },
  ];

  return (
    <div className="date-picker">
      <label>Select Date</label>
      <RangePicker
        presets={rangePresets}
        format="YYYY/MM/DD"
        onChange={onChange}
      />
    </div>
  );
};

export default DatePickerComponent;
