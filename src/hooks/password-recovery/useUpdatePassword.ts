import { useState } from "react";
import { actualizarPassword } from "@/api/service/password-recovery/recuperacion.service";

export const useUpdatePassword = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const updatePassword = async (token: string, nuevoPassword: string) => {
    setLoading(true);
    setError(null);
    setMessage(null);
    setSuccess(false);

    try {
      const res = await actualizarPassword(token, nuevoPassword);

      setMessage(res.mensaje);

      if (!res.exito) {
        setError(res.mensaje || "No se pudo actualizar la contraseña");
        return false;
      }

      setSuccess(true);
      return true;
    } catch {
      setError("Error al actualizar la contraseña");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    updatePassword,
    loading,
    error,
    message,
    success,
  };
};