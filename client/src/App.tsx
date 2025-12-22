import { useAppContext } from "./context/appsettings/AppContext";
import { useTheme } from "./hooks/useTheme";
import { useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
import RouteProvider from "./routes/RouteProvider";
import { getUserSettings } from "./api/users";

export default function App() {
  const { data, loading, error } = useFetch(getUserSettings);
  const { appSettings, setTheme, setCurrency, setLoading, setError } =
    useAppContext();

  useEffect(() => {
    if (loading) {
      setLoading(true);
      setError(false);
      return;
    }
    if (error) {
      setError(error);
      setLoading(false);
      return;
    }
    if (!data) return;

    const { theme } = data;
    setTheme(theme);
    const { currency } = data;
    setCurrency(currency);
    setLoading(false);
    setError(false);
  }, [data, loading, error]);

  useTheme(appSettings.theme);
  return <RouteProvider />;
}
