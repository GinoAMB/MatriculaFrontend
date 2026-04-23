import { HiAcademicCap, HiEnvelope } from "react-icons/hi2";
import ColegioFondo from "../../assets/ie-88320-san-bartolo.jpg"
import { MdSecurity, MdOutlineSupportAgent } from "react-icons/md";
import { PiLeaf } from "react-icons/pi";
import { useState } from "react";
import { useRecovery } from "@/hooks/password-recovery/useRecovery";

export default function ForgotPassword() {
    const [correo, setCorreo] = useState("");
    const { recoverPassword, loading, error, success, message } = useRecovery();
    const [formError, setFormError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!correo.trim()) {
            setFormError("El correo es obligatorio");
            return;
        }

        setFormError(null);
        await recoverPassword(correo);
    };

    return (
        <div className="min-h-screen flex bg-neutral">

            {/* LADO IZQUIERDO */}
            <div className="hidden md:flex md:w-3/5 relative">
                {/* Imagen de fondo */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${ColegioFondo})` }}
                ></div>

                {/* Capa de color encima */}
                <div className="absolute inset-0 bg-primary-transparent6"></div>

                {/* Contenido */}
                <div className="relative z-10 flex items-center justify-center px-10 w-full">
                    <div className="max-w-md flex flex-col gap-4 text-neutral">
                        <HiAcademicCap className="text-neutral" size={45} />
                        <h1 className="text-3xl font-bold">
                            Sistema de Matrícula - San Bartolo
                        </h1>
                        <p>
                            Plataforma de Matrícula Virtual. Recupera el acceso a
                            tu panel de matrícula de forma segura y sencilla.
                        </p>
                        <div className="flex justify-between gap-4">

                            {/* CARD IZQUIERDA */}
                            <div className="backdrop-blur-md bg-white/20 text-white p-4 rounded-lg w-1/2">
                                <div className="flex justify-star gap-3">
                                    <MdSecurity className="text-white" size={20} />
                                    <p className="font-semibold">
                                        Seguridad
                                    </p>
                                </div>
                                <p className="text-sm text-white/60">
                                    Protocolo de encriptación de grado institucional.
                                </p>
                            </div>

                            {/* CARD DERECHA */}
                            <div className="backdrop-blur-md bg-white/20 text-white p-4 rounded-lg w-1/2">
                                <div className="flex justify-star gap-3">
                                    <MdOutlineSupportAgent className="text-white" size={20} />
                                    <p className="font-semibold">
                                        Soporte
                                    </p>
                                </div>
                                <p className="text-sm text-white/60">
                                    Asistencia técnica disponible para facultad.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* LADO DERECHO */}
            <div className="w-full md:w-2/5 flex items-center justify-center px-4">

                <div className="w-full max-w-md flex flex-col gap-5">

                    {/* Título */}
                    <h2 className="text-xl font-bold">
                        ¿Olvidaste tu contraseña?
                    </h2>

                    {/* Descripción */}
                    <p className="text-sm text-gray-500">
                        No te preocupes. Ingresa tu correo electrónico y te enviaremos las
                        instrucciones para acceder nuevamente al Sistema de Matrícula.
                    </p>

                    {/* Formulario */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-semibold text-gray-700">
                                Correo electrónico
                            </label>

                            <div className="relative">
                                {/* Icono izquierda */}
                                <HiEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

                                {/* Input con padding extra para los iconos */}
                                <input
                                    type="email"
                                    placeholder="example@email.com"
                                    value={correo}
                                    onChange={(e) => setCorreo(e.target.value)}
                                    className="border border-gray-300 rounded-md px-10 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                                />

                                {/* Icono derecha */}
                                <PiLeaf className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 text-lg" />
                            </div>
                            {formError && (
                                <p className="text-red-500 text-xs">{formError}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="btn-primary text-sm"
                        >
                            {loading ? "Enviando..." : "Enviar enlace de recuperación"}
                        </button>
                        {error && (
                            <p className="text-red-500 text-sm">{error}</p>
                        )}

                        {success && (
                            <p className="text-green-600 text-sm">{message}</p>
                        )}
                    </form>

                    <div className="flex justify-center border-t border-gray-200 py-3">
                        <p className="text-sm text-gray-500 text-center">
                            <a href="/" className="text-primary hover:underline">
                                Volver al inicio
                            </a>
                        </p>
                    </div>


                    {/* Footer */}
                    <div className="pt-4 text-xs text-gray-400 text-center">
                        SISTEMA DE MATRÍCULA
                    </div>

                </div>
            </div>
        </div>
    );
}