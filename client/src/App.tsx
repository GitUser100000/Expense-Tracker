import { useAppContext } from "./context/appsettings/AppContext";
import { useTheme } from "./hooks/useTheme";
import { useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
import RouteProvider from "./routes/RouteProvider";
import { getUserSettings } from "./api/users";
import { Toaster } from "sonner";

export default function App() {
  const { data, loading, error } = useFetch(getUserSettings);
  const { appSettings, setTheme, setCurrency, setLoading, setError } =
    useAppContext();

  useEffect(() => {
    if (loading) {
      setLoading(true);
      setError(null);
      return;
    }
    if (error) {
      if (error instanceof Error) setError(error.message);
      else setError("Something is cooked");
      setLoading(false);
      return;
    }
    if (!data) return;

    const { theme } = data;
    setTheme(theme);
    const { currency } = data;
    setCurrency(currency);
    setLoading(false);
    setError(null);
  }, [data, loading, error]);

  //   useEffect(() => {
  //   supabase.auth.getSession().then(({ data }) => {
  //     console.log(data.session); // should NOT be null after refresh
  //   });
  // }, []);

  useTheme(appSettings.theme);
  return (
    <>
      <RouteProvider />
      <Toaster position="top-center" />
    </>
  );
}
