import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { FiUser, FiMenu } from "react-icons/fi";

export default function MainLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex">
      
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

          {/* USUARIO */}
          <div className="flex items-center gap-3 ml-auto">
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
          </div>
        </header>

        {/* CONTENIDO */}
        <main className="flex-1 p-4 md:p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}