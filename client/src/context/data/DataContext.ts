import { createContext, useContext } from "react";
import { type DataContextValue } from "../types";

export const DataContext = createContext<DataContextValue | null>(null);

export function useDataContext() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error("Data Context can only be used inside of provider");
  return ctx; 
}