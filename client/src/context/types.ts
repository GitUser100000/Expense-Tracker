export type Currency = "AUD" | "USD" | "EUR";

export type AppSettingState = {
  theme: "light" | "dark",
  currency: Currency,
  loading: boolean,
  error: string | null
}

export type AppSettingsAction =
| { type: "SET_THEME"; payload: "light" | "dark"; }
| { type: "SET_CURRENCY"; payload: Currency; }
| { type: "SET_LOADING"; payload: boolean; }
| { type: "SET_ERROR"; payload: string | null; }

export type AppContextValue = {
  state: AppSettingState,
  setTheme: (theme: "light" | "dark") => void 
  setCurrency: (currency: Currency) => void
  setLoading: (isLoading: boolean) => void
  setError: (hasError: string | null) => void
}
