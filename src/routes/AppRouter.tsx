import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import ForgotPassword from "../pages/ForgotPassword";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import User from "../pages/admin/Uset";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route element={<MainLayout />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<User />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}