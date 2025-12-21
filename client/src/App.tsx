import { useAppContext } from "./context/AppContext";
import { useTheme } from "./hooks/useTheme";
import { useUserSettings } from "./hooks/useUserSettings";
import RouteProvider from "./routes/RouteProvider";

export default function App() {
  useUserSettings();
  const appSettings = useAppContext();
  const { theme } = appSettings.state;
  useTheme(theme);

  return <RouteProvider />;
}
