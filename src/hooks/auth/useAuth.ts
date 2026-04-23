import { useState } from "react";
import { login } from "@/api/service/auth/auth.service";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loginUser = async (correo: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const data = await login(correo, password);
      return data;
    } catch (err) {
      setError("Credenciales incorrectas");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { loginUser, loading, error };
};