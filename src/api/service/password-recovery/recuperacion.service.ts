import api from "../../axios";
import { API_ENDPOINTS } from "@/api/endpoints";

interface RecuperacionResponse {
    mensaje: string;
    exito: boolean;
}

export const solicitarRecuperacion = async (correo: string) => {
  const { data } = await api.post<RecuperacionResponse>(API_ENDPOINTS.RECUPERACION.SOLICITUD, { correo });
  return data;
};

export const validarTokenRecuperacion = async (token: string) => {
  const { data } = await api.post<RecuperacionResponse>(API_ENDPOINTS.RECUPERACION.VALIDACION, { token });
  return data;
};

export const actualizarPassword = async (token: string, nuevoPassword: string) => {
  const { data } = await api.post<RecuperacionResponse>(API_ENDPOINTS.RECUPERACION.CAMBIO, { token, nuevoPassword });
  return data;
}