import { useReducer, useEffect, type ReactNode, useRef } from "react"
import { type User, type AppSettingsAction, type AppSettingState } from "./types"
import { AppContext } from "./AppContext";

const initialAppSettings: AppSettingState = {
  user: null,
  theme: "light",
  loading: false,
  error: null
}

function appSettingsReducer(state: AppSettingState, action: AppSettingsAction) {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        user: action.payload
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        user: null
      };
    }
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
  const modal = useRef<HTMLDialogElement | null>(null); 

  const loginUser = (user: User) => {
    dispatchAppSettings({ type: "LOGIN", payload: user });
  }

  const logoutUser = () => {
    dispatchAppSettings({ type: "LOGOUT" });
  }

  const setTheme = (theme: "light" | "dark") => {
    dispatchAppSettings({ type: "SET_THEME", payload: theme });
  }

  const setLoading = (isLoading: boolean) => {
    dispatchAppSettings({ type: "SET_LOADING", payload: isLoading });
  }

  const setError = (error: string | null) => {
    dispatchAppSettings({ type: "SET_ERROR", payload: error });
  }

  useEffect(() => {
    if (!modal.current) return; 
    if (appSettings.loading) {
      modal.current.showModal(); 
    } else {
      modal.current.close(); 
    }
  }, [appSettings.loading]);

  // refactor error component later
  const output = appSettings.error ? <p>{appSettings.error}</p> : children; 

  const value = {
    state: appSettings,
    loginUser,
    logoutUser,
    setTheme,
    setLoading,
    setError
  }

  return (
    <AppContext.Provider value={value}>
      {/* refactor this in a seperate component later */}
      <dialog ref={modal}>Loading...</dialog>
      { output }
    </AppContext.Provider>
  )
}