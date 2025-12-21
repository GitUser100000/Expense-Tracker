import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import MetricsPage from "../pages/Metrics";
import ExpensesPage from "../pages/Expenses";
import WatchlistPage from "../pages/Watchlist";
import SettingsPage from "../pages/Settings";
import ProtectedLayout from "./ProtectedLayout";

export default function RouteProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* protected */}
        <Route element={<ProtectedLayout />}>
          <Route path="/metrics" element={<MetricsPage />} />
          <Route path="/expenses" element={<ExpensesPage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
