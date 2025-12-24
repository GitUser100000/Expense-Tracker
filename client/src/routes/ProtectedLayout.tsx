import { Navigate } from "react-router-dom";
import { useAuthContext } from "@/auth/AuthContext";
import DataProvider from "@/context/data/DataProvider";
import Layout from "@/layout/Layout";

export default function ProtectedLayout() {
  const { user, loading } = useAuthContext();
  if (loading) return null;
  if (!user) return <Navigate to="/login" replace />;
  return (
    <DataProvider>
      <Layout />
    </DataProvider>
  );
}
