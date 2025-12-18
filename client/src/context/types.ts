export type User = {
  name: string
} | null

export type AppSettingState = {
  user: User,
  theme: "light" | "dark",
  loading: boolean,
  error: string | null
}

export type AppSettingsAction =
| { type: "LOGIN"; payload: User }
| { type: "LOGOUT"; }
| { type: "SET_THEME"; payload: "light" | "dark"; }
| { type: "SET_LOADING"; payload: boolean; }
| { type: "SET_ERROR"; payload: string | null; }

export type AppContextValue = {
  state: AppSettingState,
  loginUser: (user: User) => void
  logoutUser: () => void
  setTheme: (theme: "light" | "dark") => void 
  setLoading: (isLoading: boolean) => void
  setError: (hasError: string | null) => void
}