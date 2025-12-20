import { useReducer, type ReactNode } from "react"
import { type AppSettingsAction, type AppSettingState } from "./types"
import { AppContext } from "./AppContext";

const initialAppSettings: AppSettingState = {
  theme: "light",
  loading: false,
  error: null
}

function appSettingsReducer(state: AppSettingState, action: AppSettingsAction) {
  switch (action.type) {
    case "SET_THEME": {
      return {
        ...state,
        theme: action.payload
      }
    }
    case "SET_LOADING": {
      return {
        ...state,
        loading: action.payload
      }
    }
    case "SET_ERROR": {
      return {
        ...state,
        error: action.payload
      }
    }
    default: {
      return state;
    }
  }
}

export default function AppProvider({ children }: { children: ReactNode}) {
  const [ appSettings, dispatchAppSettings] = useReducer(appSettingsReducer, initialAppSettings);

  const setTheme = (theme: "light" | "dark") => {
    dispatchAppSettings({ type: "SET_THEME", payload: theme });
  }

  const setLoading = (isLoading: boolean) => {
    dispatchAppSettings({ type: "SET_LOADING", payload: isLoading });
  }

  const setError = (error: string | null) => {
    dispatchAppSettings({ type: "SET_ERROR", payload: error });
  }
  
  const value = {
    state: appSettings,
    setTheme,
    setLoading,
    setError
  }

  return (
    <AppContext.Provider value={value}>
      {/* refactor this in a seperate component later */}
      { children }
    </AppContext.Provider>
  )
}