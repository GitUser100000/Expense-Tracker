import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MetricsPage from "../pages/MetricsPage";
import ExpensesPage from "../pages/ExpensesPage";
import WatchlistPage from "../pages/WatchlistPage";
import SettingsPage from "../pages/SettingsPage";
import ProtectedLayout from "./ProtectedLayout";
import AuthRedirect from "@/components/AuthRedirect";
import NotFoundPage from "@/pages/NotFoundPage";

export default function RouteProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthRedirect />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* protected */}
        <Route element={<ProtectedLayout />}>
          <Route path="/metrics" element={<MetricsPage />}>
            {/* <Route path="/date-range" element={<DatePicker />} */}
          </Route>
          <Route path="/expenses" element={<ExpensesPage />}>
            {/* <Route path="date-range" element={<DatePicker />} */}
            {/* <Route path="add" element={<DatePicker />} */}
            {/* <Route path=":id/edit" element={<DatePicker />} */}
          </Route>
          <Route path="/watchlist" element={<WatchlistPage />}>
            {/* <Route path="/date-range" element={<DatePicker />} */}
          </Route>
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
