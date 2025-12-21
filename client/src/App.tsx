import { useAppContext } from "./context/AppContext";
import { useTheme } from "./hooks/useTheme";
import RouteProvider from "./routes/RouteProvider";

export default function App() {
  const appSettings = useAppContext();
  const { theme } = appSettings.state;
  useTheme(theme);

  return <RouteProvider />;
}
