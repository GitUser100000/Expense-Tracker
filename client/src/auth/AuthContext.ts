import { createContext, useContext } from "react"
import type { AuthContextType } from "./types";


export const AuthContext = createContext<AuthContextType | null>(null); 

export function useAuthContext() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("Auth Context must be used within the Auth Provider")
  } return ctx; 
}