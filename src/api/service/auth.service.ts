import api from "../axios";
import { setToken } from "@/utils/token";
import { API_ENDPOINTS } from "@/api/endpoints";

interface LoginResponse {
  id: number;
  name: string;
  role: string;
  token: string;
}

export const login = async (correo: string, password: string) => {
  const { data } = await api.post<LoginResponse>(
    API_ENDPOINTS.AUTH.LOGIN,
    { correo, password }
  );

  if (data.token) {
    setToken(data.token);

    localStorage.setItem(
      "user",
      JSON.stringify({
        id: data.id,
        name: data.name,
        role: data.role,
      })
    );
  }

  return data;
};