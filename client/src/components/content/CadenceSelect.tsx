import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppContext } from "@/context/appsettings/AppContext";
import type { DateCadence } from "@/context/types";

export function CadenceSelect() {
  const { appSettings: {dateRange}, setCadence } = useAppContext();
  function handleSelect(value: DateCadence) {
    setCadence(value);
  }
  return (
    <Select onValueChange={handleSelect} value={`${dateRange.cadence}`}>
      <SelectTrigger className="`w-45">
        <SelectValue placeholder="Select a time window"/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Time Window</SelectLabel>
          <SelectItem value="DAILY">Day</SelectItem>
          <SelectItem value="WEEKLY">Week</SelectItem>
          <SelectItem value="MONTHLY">Month</SelectItem>
          <SelectItem value="YEARLY">Year</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
