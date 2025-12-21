import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "@/auth/AuthContext";

export default function ProtectedLayout() {
  const { user } = useAuthContext();
  if (!user) return <Navigate to="/login" replace />;
  return <Outlet />;
}
