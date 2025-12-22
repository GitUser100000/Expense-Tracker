import { useAuthContext } from "@/auth/AuthContext";
import { Navigate } from "react-router-dom";

export default function AuthRedirect() {
  const { loading, user } = useAuthContext();

  // change to spinner
  if (loading) return null;

  if (user) return <Navigate to="metrics" />;

  return <Navigate to="/login" />;
}
