import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import ForgotPassword from "../pages/recovery-password/ForgotPassword";
import ResetPassword from "../pages/recovery-password/ResetPassword";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/dashboard-admin/Dashboard";
import User from "../pages/user/User";
import Role from "../pages/role/Role";
import Document from "../pages/document/Document";
import Religion from "../pages/religion/Religion";
import Country from "../pages/country/Country";
import Tuition from "../pages/tuition/Tuition";
import SchoolTerm from "../pages/school-year/SchoolTerm";
import DashboardDirectivo from "../pages/dashboard/DashboardDirectivo";

import ProtectedRoute from "./ProtectedRoute";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route element={<ProtectedRoute allowedRoles={["ADMIN"]} />}>
        <Route element={<MainLayout />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<User />} />
          <Route path="/admin/roles" element={<Role />} />
          <Route path="/admin/tipo-documento" element={<Document />} />
          <Route path="/admin/religiones" element={<Religion />} />
          <Route path="/admin/paises" element={<Country />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute allowedRoles={["DIRECTIVO"]} />}>
        <Route element={<MainLayout />}>
          <Route path="/directivo/matricula" element={<Tuition />} />
          <Route path="/directivo/periodo-academico" element={<SchoolTerm />} />
          <Route path="/directivo/dashboardDirectivo" element={<DashboardDirectivo />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}