import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import ForgotPassword from "../pages/ForgotPassword";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import User from "../pages/admin/user/User";
import Role from "../pages/admin/role/Role";
import Document from "../pages/admin/document/Document";
import Religion from "../pages/admin/religion/Religion";
import Country from "../pages/admin/country/Country";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route element={<MainLayout />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<User />} />
        <Route path="/admin/roles" element={<Role />} />
        <Route path="/admin/tipo-documento" element={<Document />} />
        <Route path="/admin/religiones" element={<Religion />} />
        <Route path="/admin/paises" element={<Country />} />s
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}