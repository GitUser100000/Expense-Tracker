import { addDays, addWeeks, addMonths, addYears } from "date-fns";
import { type DateCadence } from "@/context/types";

export function getEndDate(cadence: DateCadence, startDate: Date): Date | undefined {
  if (cadence === "DAILY") return addDays(startDate, 1);
  if (cadence === "WEEKLY") return addWeeks(startDate, 1);
  if (cadence === "MONTHLY") return addMonths(startDate, 1);
  if (cadence === "YEARLY") return addYears(startDate, 1);
  return undefined;
}

export function getPreviousDate(cadence: DateCadence, startDate: Date): Date {
  if (cadence === "DAILY") return startDate;
  if (cadence === "WEEKLY") return addDays(addWeeks(startDate, -1), -1);
  if (cadence === "MONTHLY") return addDays(addMonths(startDate, -1), -1);
  if (cadence === "YEARLY") return addDays(addYears(startDate, -1), -1);
  throw new Error("Invalid cadence");
}