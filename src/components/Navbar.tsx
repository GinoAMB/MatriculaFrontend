import { HiAcademicCap } from "react-icons/hi2";
import {
  FiX,
  FiHome,
  FiSettings,
  FiFileText,
  FiGlobe
} from "react-icons/fi"; 
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaHouseMedicalCircleExclamation } from "react-icons/fa6";
import { FaListCheck, FaUserPlus } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";
import { FaUserCog } from "react-icons/fa";
import { LuUserRoundCog } from "react-icons/lu";


export default function Navbar({ open, setOpen }: any) {
  const [openConfig, setOpenConfig] = useState(false);
  const [openUsers, setOpenUsers] = useState(false);
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
            `flex items-center gap-2 px-3 py-2 rounded-md transition ${isActive
              ? "bg-gray-100 md:bg-white text-primary shadow"
              : "hover:bg-gray-100 md:hover:bg-white"
            }`
          }
        >
          <FiHome />
          Panel de Control
        </NavLink>

        <div>
          <button
            onClick={() => setOpenUsers(!openUsers)}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-md transition hover:bg-gray-100 md:hover:bg-white cursor-pointer"
          >
            <FaUserCog />

            <span>Gestión de Usuarios</span>

            <FiChevronDown
              className={`ml-auto transition-transform duration-300 ${openUsers ? "rotate-180" : "rotate-0"
                }`}
            />
          </button>

          {/* SUBMENÚ */}
          {openUsers && (
            <div className="ml-4 mt-1 flex flex-col gap-2 text-sm">

              <NavLink
                to="/admin/users"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-md transition ${isActive
                    ? "bg-gray-100 md:bg-white text-primary shadow"
                    : "hover:bg-gray-100 md:hover:bg-white"
                  }`
                }
              >
                <FaUserPlus />
                Usuarios
              </NavLink>

              <NavLink
                to="/admin/roles"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-md transition ${isActive
                    ? "bg-gray-100 md:bg-white text-primary shadow"
                    : "hover:bg-gray-100 md:hover:bg-white"
                  }`
                }
              >
                <LuUserRoundCog />
                Roles
              </NavLink>

            </div>
          )}
        </div>

        {/* CONFIGURACIÓN */}
        <div>
          <button
            onClick={() => setOpenConfig(!openConfig)}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-md transition hover:bg-gray-100 md:hover:bg-white cursor-pointer"
          >
            <FiSettings />

            <span>Configuración</span>

            {/* FLECHA */}
            <FiChevronDown
              className={`ml-auto transition-transform duration-300 ${openConfig ? "rotate-180" : "rotate-0"
                }`}
            />
          </button>

          {/* SUBMENÚ */}
          {openConfig && (
            <div className="ml-4 mt-1 flex flex-col gap-2 text-sm">
              <NavLink to="/admin/tipo-documento" className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-md transition ${isActive
                  ? "bg-gray-100 md:bg-white text-primary shadow"
                  : "hover:bg-gray-100 md:hover:bg-white"
                }`
              }>
                <FiFileText />
                Tipos de Documento
              </NavLink>

              <NavLink
                to="/admin/religiones"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-md transition ${isActive
                    ? "bg-gray-100 md:bg-white text-primary shadow"
                    : "hover:bg-gray-100 md:hover:bg-white"
                  }`
                }
              >
                <FaHouseMedicalCircleExclamation />
                Religiones
              </NavLink>

              <NavLink to="/admin/paises" className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-md transition ${isActive
                  ? "bg-gray-100 md:bg-white text-primary shadow"
                  : "hover:bg-gray-100 md:hover:bg-white"
                }`
              }>
                <FiGlobe />
                Países
              </NavLink>

              <NavLink
                to="/admin/estado-matricula"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-md transition ${isActive
                    ? "bg-gray-100 md:bg-white text-primary shadow"
                    : "hover:bg-gray-100 md:hover:bg-white"
                  }`
                }
              >
                <FaListCheck />
                Estados de Matrícula
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
}