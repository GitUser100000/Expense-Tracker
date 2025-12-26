import { useAppContext } from "@/context/appsettings/AppContext";
import type { DateCadence } from "@/context/types";
import { useEffect } from "react";

export function useDateRange() {
  const { appSettings, setDateRange } = useAppContext();
  const { dateRange } = appSettings; 
  useEffect(() => {
    const cadence = localStorage.getItem("cadence");
    const startDate = localStorage.getItem("startDate");
    if (cadence && startDate) {
      // setCadence(cadence as DateCadence); pointless
      setDateRange(cadence as DateCadence, new Date(startDate))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cadence", dateRange.cadence);
    localStorage.setItem("startDate", dateRange.startDate.toISOString());
  }, [dateRange.startDate, dateRange.cadence])
}