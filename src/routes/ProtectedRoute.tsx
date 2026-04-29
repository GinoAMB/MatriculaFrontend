import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated, hasRole } from "@/utils/auth";

interface Props {
  allowedRoles?: string[];
}

export default function ProtectedRoute({ allowedRoles }: Props) {
  if (!isAuthenticated()) {
    return <Navigate to="/" replace />;
  }

  if (allowedRoles && !hasRole(allowedRoles)) {
    return <Navigate to="/not-authorized" replace />;
  }

  return <Outlet />;
}