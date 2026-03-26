import { HiAcademicCap } from "react-icons/hi2";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary-transparent2 gap-3 p-4 sm:p-6">
      
      <div className="bg-white p-3 rounded-lg shadow-base">
        <HiAcademicCap className="text-primary text-2xl sm:text-3xl" />
      </div>

      <div className="bg-gray-300 px-3 py-2 rounded-lg shadow-base">
        <p className="text-xs sm:text-sm font-semibold text-gray-700 text-center">
          IE 33280 San Bartolo
        </p>
      </div>

      {/* 404 grande pero adaptable */}
      <p className="text-[70px] sm:text-[100px] md:text-[120px] font-bold text-primary leading-none">
        404
      </p>

      <div className="bg-white p-5 sm:p-8 rounded-xl shadow-lg flex flex-col items-center max-w-md w-full gap-4">
        
        <p className="text-lg sm:text-xl font-bold text-gray-800 text-center">
          ¡Ups! Página no encontrada
        </p>

        <p className="text-xs sm:text-sm text-gray-600 text-center">
          Parece que el recurso que buscas ha sido movido o ya no existe.
        </p>

        {/* botones responsivos */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          <button
            className="btn-primary text-xs w-full sm:w-auto"
            onClick={() => (window.location.href = "/")}
          >
            Volver al Inicio
          </button>

          <button className="btn-secondary text-xs w-full sm:w-auto">
            Soporte técnico
          </button>
        </div>
      </div>

      <p className="text-gray-500 text-xs sm:text-sm text-center">
        Sistema de Gestión Académica © 2026 
      </p>
    </div>
  );
}