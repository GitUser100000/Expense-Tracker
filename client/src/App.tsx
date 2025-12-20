import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { useAppContext } from './context/AppContext';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import MetricsPage from './pages/Metrics';
import ExpensesPage from './pages/Expenses';
import WatchlistPage from './pages/Watchlist';
import SettingsPage from './pages/Settings';

export default function App() {
  const appSettings = useAppContext();
  const { theme } = appSettings.state; 
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/metrics" element={<MetricsPage />}/>
        <Route path="/expenses" element={<ExpensesPage />}/>
        <Route path="/watchlist" element={<WatchlistPage />}/>
        <Route path="/settings" element={<SettingsPage />}/>
      </Routes>
    </BrowserRouter>
  )
}
