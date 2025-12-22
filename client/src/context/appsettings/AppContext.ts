import { createContext, useContext } from "react";
import { type AppContextValue } from "../types";

export const AppContext = createContext<AppContextValue | null>(null);

export function useAppContext() {
  const ctx = useContext(AppContext); 
  if (!ctx) {
    throw new Error("useAppContext must be used within AppProvider");
  } return ctx;
}