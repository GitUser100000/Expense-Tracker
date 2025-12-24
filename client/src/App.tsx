import { useAppContext } from "./context/appsettings/AppContext";
import { useTheme } from "./hooks/useTheme";
import { useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
import RouteProvider from "./routes/RouteProvider";
import { getUserSettings } from "./api/users";
import { Toaster } from "sonner";
import Footer from "./components/layout/Footer";

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

  useTheme(appSettings.theme);
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <RouteProvider />
      </main>
      <Toaster position="top-center" />
      <Footer />
    </div>
  );
}
