import { useContext, useReducer, useEffect, type ReactNode } from "react"

type User = {
  name: string
} | null

type AppSettingState = {
  user: User,
  theme: "light" | "dark",
  loading: boolean,
  error: boolean
}

type AppSettingsAction =
 | { type: "LOGIN"; payload: User }
 | { type: "LOGOUT";}
 | { type: "SET_THEME"; payload: "light" | "dark"}
 | { type: "SET_LOADING"; payload: boolean}
 | { type: "SET_ERROR"; payload: boolean}

const initialAppSettings: AppSettingState = {
  user: null,
  theme: "light",
  loading: false,
  error: false
}

function appSettingsReducer(state: AppSettingState, action: AppSettingsAction) {
  switch (action.type) {
    case "LOGIN": {
      return state;
    }
    case "LOGOUT": {
      return state;
    }
    case "SET_THEME": {
      return state;
    }
    case "SET_LOADING": {
      return state;
    }
    case "SET_ERROR": {
      return state;
    }
    default: {
      return state;
    }
  }
}

export default function AppProvider({ children }: { children: ReactNode}) {
  const [ appSettings, dispatchAppSettings] = useReducer(appSettingsReducer, initialAppSettings);
  return (
    <>
      { children }
    </>
  )
}