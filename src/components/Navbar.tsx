import { HiAcademicCap } from "react-icons/hi2";
import { FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export default function Navbar({ open, setOpen }: any) {
  return (
    <aside
      className={`
        fixed md:static top-0 left-0 z-50
        h-full md:h-auto
        w-64 bg-white md:bg-[rgba(74,111,165,0.2)]
        shadow-md p-2 flex flex-col gap-6
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
      `}
    >
      {/* BOTÓN CERRAR (solo móvil) */}
      <div className="flex justify-end md:hidden p-2">
        <button onClick={() => setOpen(false)}>
          <FiX className="text-2xl text-primary" />
        </button>
      </div>

      {/* HEADER */}
      <div className="flex items-center gap-4 p-4">
        <div className="bg-primary p-3 rounded-lg shadow-sm">
          <HiAcademicCap className="text-white text-3xl" />
        </div>

        <div className="flex flex-col leading-tight">
          <span className="text-primary font-bold text-xl">
            IE 33280
          </span>
          <span className="text-primary text-base">
            Administración
          </span>
        </div>
      </div>

      {/* MENÚ */}
      <nav className="flex flex-col gap-3 text-gray-800 md:text-primary font-semibold">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md transition ${
              isActive
                ? "bg-gray-100 md:bg-white text-primary shadow"
                : "hover:bg-gray-100 md:hover:bg-white"
            }`
          }
        >
          Panel de Control
        </NavLink>

        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md transition ${
              isActive
                ? "bg-gray-100 md:bg-white text-primary shadow"
                : "hover:bg-gray-100 md:hover:bg-white"
            }`
          }
        >
          Gestión de Usuarios
        </NavLink>
      </nav>
    </aside>
  );
}