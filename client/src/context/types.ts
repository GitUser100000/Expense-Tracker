export type Currency = "AUD" | "USD" | "EUR";
export type Theme = "light" | "dark"

export type AppSettingState = {
  theme: Theme
  currency: Currency,
  loading: boolean,
  error: string | null
}

export type AppSettingsAction =
| { type: "SET_THEME"; payload: Theme; }
| { type: "SET_CURRENCY"; payload: Currency; }
| { type: "SET_LOADING"; payload: boolean; }
| { type: "SET_ERROR"; payload: string | null; }

export type AppContextValue = {
  state: AppSettingState,
  setTheme: (theme: Theme) => void 
  setCurrency: (currency: Currency) => void
  setLoading: (isLoading: boolean) => void
  setError: (hasError: string | null) => void
}

