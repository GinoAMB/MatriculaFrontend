import { useState } from "react";
import { validarTokenRecuperacion } from "@/api/service/password-recovery/recuperacion.service";

export const useValidation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const validateToken = async (token: string) => {
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const res = await validarTokenRecuperacion(token);

      setMessage(res.mensaje);

      if (!res.exito) {
        setError(res.mensaje || "Token inválido");
        return false;
      }

      return true;
    } catch {
      setError("Error al validar el token de recuperación");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { validateToken, loading, error, message };
};