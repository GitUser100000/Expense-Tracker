import { useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { useAppContext } from './context/AppContext';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const appSettings = useAppContext();
  const { theme } = appSettings.state; 
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])
  return (
    <BrowserRouter>
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  )
}

export default App
