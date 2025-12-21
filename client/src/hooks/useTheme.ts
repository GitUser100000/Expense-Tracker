import { useEffect } from "react";
import { type Theme } from "@/context/types";

export function useTheme(theme: Theme) {
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark"); 
  }, [theme])
}