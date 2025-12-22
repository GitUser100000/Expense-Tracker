import { useReducer, type ReactNode } from "react";
import {
  type AppSettingsAction,
  type AppSettingState,
  type Currency,
  type Theme,
  type DateCadence,
  type Cadence,
} from "../types";
import { AppContext } from "./AppContext";
import { addWeeks, addMonths, addYears } from "date-fns";

const initialAppSettings: AppSettingState = {
  theme: "light",
  currency: "AUD",
  dateRange: {
    cadence: "MONTHLY",
    startDate: new Date(),
    endDate: addMonths(Date.now(), 1),
  },
  loading: false,
  error: null,
};

function getEndDate(cadence: DateCadence, startDate: Date): Date | undefined {
  if (cadence === "DAILY") return undefined;
  if (cadence === "WEEKLY") return addWeeks(startDate, 1);
  if (cadence === "MONTHLY") return addMonths(startDate, 1);
  if (cadence === "YEARLY") return addYears(startDate, 1);
}

// need to add date range
function appSettingsReducer(state: AppSettingState, action: AppSettingsAction) {
  switch (action.type) {
    case "SET_THEME": {
      return {
        ...state,
        theme: action.payload,
      };
    }
    case "SET_CURRENCY": {
      return {
        ...state,
        currency: action.payload,
      };
    }
    case "SET_DATE_RANGE": {
      const { cadence, startDate } = action.payload;
      const endDate = getEndDate(cadence, startDate);
      return {
        ...state,
        dateRange: {
          cadence,
          startDate,
          endDate,
        },
      };
    }
    case "SET_LOADING": {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case "SET_ERROR": {
      return {
        ...state,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export default function AppProvider({ children }: { children: ReactNode }) {
  const [appSettings, dispatchAppSettings] = useReducer(
    appSettingsReducer,
    initialAppSettings
  );

  const setTheme = (theme: Theme) => {
    dispatchAppSettings({ type: "SET_THEME", payload: theme });
  };

  const setCurrency = (currency: Currency) => {
    dispatchAppSettings({ type: "SET_CURRENCY", payload: currency });
  };

  const setDateRange = (cadence: DateCadence, startDate: Date) => {
    dispatchAppSettings({
      type: "SET_DATE_RANGE",
      payload: {
        cadence,
        startDate,
      },
    });
  };

  const setLoading = (isLoading: boolean) => {
    dispatchAppSettings({ type: "SET_LOADING", payload: isLoading });
  };

  const setError = (error: string | null) => {
    dispatchAppSettings({ type: "SET_ERROR", payload: error });
  };

  const value = {
    appSettings,
    setTheme,
    setCurrency,
    setDateRange,
    setLoading,
    setError,
  };

  return (
    <AppContext.Provider value={value}>
      {/* refactor this in a seperate component later */}
      {children}
    </AppContext.Provider>
  );
}
