import type { Dayjs } from "dayjs";

export interface DatePrickerProps {
  onChange: (dates: null | (Dayjs | null)[], dateStrings: string[]) => void;
}
