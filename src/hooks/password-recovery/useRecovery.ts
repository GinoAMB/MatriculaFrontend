import { useState } from "react";
import { solicitarRecuperacion } from "@/api/service/password-recovery/recuperacion.service";

export const useRecovery = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const recoverPassword = async (correo: string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    setMessage(null);

    try {
      const res = await solicitarRecuperacion(correo);

      setMessage(res.mensaje);

      if (res.exito) {
        setSuccess(true);
      } else {
        setError(res.mensaje || "No se pudo procesar la solicitud");
      }

      return res;
    } catch (err) {
      setError("Error al solicitar recuperación de contraseña");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { recoverPassword, loading, error, success, message };
};