import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import ForgotPassword from "../pages/recovery-password/ForgotPassword";
import ResetPassword from "../pages/recovery-password/ResetPassword";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import User from "../pages/admin/user/User";
import Role from "../pages/admin/role/Role";
import Document from "../pages/admin/document/Document";
import Religion from "../pages/admin/religion/Religion";
import Country from "../pages/admin/country/Country";
import State from "../pages/admin/state/State";
import Tuition from "../pages/directivo/tuition/Tuition";
import SchoolTerm from "../pages/directivo/school-year/SchoolTerm";
import DashboardDirectivo from "../pages/directivo/dashboard/DashboardDirectivo";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route element={<MainLayout />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<User />} />
        <Route path="/admin/roles" element={<Role />} />
        <Route path="/admin/tipo-documento" element={<Document />} />
        <Route path="/admin/religiones" element={<Religion />} />
        <Route path="/admin/paises" element={<Country />} />
        <Route path="/admin/estado-matricula" element={<State />} />
        <Route path="/directivo/matricula" element={<Tuition />} />
        <Route path="/directivo/periodo-academico" element={<SchoolTerm />} />
        <Route path="/directivo/dashboardDirectivo" element={<DashboardDirectivo />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}