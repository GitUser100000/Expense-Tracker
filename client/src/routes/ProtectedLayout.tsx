import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "@/auth/AuthContext";
import DataProvider from "@/context/data/DataProvider";

export default function ProtectedLayout() {
  const { user } = useAuthContext();
  if (!user) return <Navigate to="/login" replace />;
  return (
    <DataProvider>
      <Outlet />;
    </DataProvider>
  );
}
