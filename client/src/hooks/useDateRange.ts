import { useAppContext } from "@/context/appsettings/AppContext";
import type { DateCadence } from "@/context/types";
import { useEffect, useRef } from "react";

export function useDateRange() {
  const { appSettings, setDateRange } = useAppContext();
  const { dateRange } = appSettings; 
  const hasHydrated = useRef(false);

  useEffect(() => {
    if (hasHydrated.current) return;
    hasHydrated.current = true;
    const cadence = localStorage.getItem("cadence");
    const startDate = localStorage.getItem("startDate");
    if (!cadence || !startDate) return;
    setDateRange(cadence as DateCadence, new Date(startDate))
  }, [])

  useEffect(() => {
    localStorage.setItem("cadence", dateRange.cadence);
    localStorage.setItem("startDate", dateRange.startDate.toISOString());
  }, [dateRange.startDate, dateRange.cadence])
}