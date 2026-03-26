import { useState } from "react";
import { HiAcademicCap, HiEnvelope, HiLockClosed } from "react-icons/hi2";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { PiLeaf } from "react-icons/pi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("login_error");
      return;
    }

    console.log({ email, password });

    setError("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100 px-4">
      {/* Card central */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl h-auto md:h-[90vh] flex flex-col md:flex-row overflow-hidden">

        {/* Lado izquierdo */}
        <div className="w-full md:w-1/2 bg-primary-transparent2 px-6 md:px-16 py-6 md:py-10 flex flex-col justify-start space-y-3 text-center md:text-left">

          <div className="flex items-center justify-center md:justify-start space-x-4 py-3 md:py-5">
            <div className="bg-primary w-10 h-10 flex items-center justify-center rounded-md">
              <HiAcademicCap className="text-neutral text-lg" />
            </div>
            <p className="text-base md:text-lg font-semibold text-primary">
              IE 33280 San Bartolo
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
              Sistema de Matrícula
            </h2>
            <h2 className="text-2xl md:text-3xl text-primary font-bold mb-2 md:mb-4">
              IE 33280 San Bartolo.
            </h2>
          </div>

          <p className="text-sm md:text-base text-black/50">
            Accede a la plataforma oficial para realizar el proceso de matrícula escolar, actualización de datos del estudiante y gestión de documentos de ingreso.
          </p>
        </div>

        {/* Lado derecho */}
        <div className="w-full md:w-1/2 px-6 md:px-16 py-6 md:py-10 flex flex-col justify-center gap-6 max-h-screen overflow-y-auto">

          <div className="text-center md:text-left">
            <h1 className="text-xl md:text-2xl font-bold">Iniciar sesión</h1>
            <p className="text-sm md:text-base text-black/50">
              Plataforma de Matrícula. Por favor ingrese sus credenciales para continuar.
            </p>
          </div>

          {error === "login_error" && (
            <div className="p-3 flex items-start gap-3 bg-red-600/10 border-l-4 border-red-900">
              <AiOutlineExclamationCircle className="text-red-900 text-xl" />
              <div>
                <p className="font-semibold text-red-900 text-sm md:text-base">
                  El correo o contraseña son incorrectos
                </p>
                <p className="text-xs md:text-sm text-red-900/80">
                  Por favor verifica tus datos e inténtalo de nuevo
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div className="flex flex-col">
              <p className="font-semibold text-black/70 text-sm md:text-base">
                Email
              </p>

              <div className="relative">
                {/* Icono izquierda */}
                <HiEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

                {/* Input */}
                <input
                  type="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 pl-10 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm md:text-base"
                />

                {/* Icono derecha (hojita) */}
                <PiLeaf className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 text-lg" />
              </div>
            </div>

            <div className="flex flex-col">
              <p className="font-semibold text-black/70 text-sm md:text-base">
                Contraseña
              </p>

              <div className="relative">
                {/* Icono izquierda */}
                <HiLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

                {/* Input */}
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 pl-10 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm md:text-base"
                />

                {/* Icono derecha (toggle) */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible className="text-lg" />
                  ) : (
                    <AiOutlineEye className="text-lg" />
                  )}
                </button>
              </div>
            </div>

            <Link
              to="/forgot-password"
              className="text-sm text-primary cursor-pointer hover:underline text-right"
            >
              ¿Olvidaste tu contraseña?
            </Link>
            <button type="submit" className="btn-primary w-full">
              Iniciar sesión
            </button>
          </form>

          <p className="text-sm text-center text-black/60">
            ¿Problemas para acceder?{" "}
            <span className="text-primary font-medium cursor-pointer hover:underline">
              Contacta a Soporte de IT
            </span>
          </p>

          <div className="border-t border-gray-300 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 text-xs md:text-sm text-black/60 pt-4 text-center md:text-left">

            <p>© 2026 SAN BARTOLO</p>

            <div className="flex gap-4">
              <span className="cursor-pointer hover:underline">PRIVACIDAD</span>
              <span className="cursor-pointer hover:underline">TÉRMINOS</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}