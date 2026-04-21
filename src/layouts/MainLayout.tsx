import { Outlet } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import { FiUser, FiMenu, FiChevronDown } from "react-icons/fi";
import { clearAuth } from "@/utils/token";
import { useNavigate } from "react-router-dom";


export default function MainLayout() {
  const [open, setOpen] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setUserMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="h-screen flex overflow-hidden">
      {/* SIDEBAR */}
      <Navbar open={open} setOpen={setOpen} />

      {/* OVERLAY (solo móvil) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* CONTENIDO */}
      <div className="flex-1 flex flex-col">

        {/* HEADER */}
        <header className="h-16 bg-primary-transparent2 shadow-sm flex items-center justify-between px-4 md:px-6">

          {/* BOTÓN MENÚ (solo móvil) */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-2xl text-primary"
          >
            <FiMenu />
          </button>

          <div ref={menuRef} className="relative ml-auto">
            <div
              onClick={() => setUserMenu(!userMenu)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="text-right leading-tight hidden sm:block">
                <p className="text-sm font-semibold text-black">
                  Juan Pérez
                </p>
                <p className="text-xs text-gray-500">
                  Administrador
                </p>
              </div>

              <div className="bg-white rounded-full p-2 shadow-sm">
                <FiUser className="text-2xl md:text-3xl text-primary" />
              </div>

              {/* FLECHA */}
              <FiChevronDown
                className={`text-xl text-primary transition-transform duration-300 ${userMenu ? "rotate-180" : "rotate-0"
                  }`}
              />
            </div>

            {/* DROPDOWN */}
            {userMenu && (
              <div className="absolute right-0 mt-2 w-44 bg-white shadow-md rounded-md z-50">
                <button
                  onClick={() => setUserMenu(false)}
                  className="w-full text-left px-4 py-2 text-primary hover:bg-gray-100 cursor-pointer"
                >
                  Perfil
                </button>

                <button
                  onClick={() => {
                    clearAuth();
                    setUserMenu(false);
                    navigate("/");
                  }}
                  className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-50 cursor-pointer"
                >
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>
        </header>

        {/* CONTENIDO */}
        <main className="flex-1 p-4 md:p-6 bg-gray-50 overflow-y-auto cont-scroll">
          <Outlet />
        </main>
      </div>
    </div>
  );
}