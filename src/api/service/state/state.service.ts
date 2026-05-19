import api from "@/api/axios";
import { API_ENDPOINTS } from "@/api/endpoints";
import type { State} from "@/type/state/state.type";

export const obtenerEstados = async (): Promise<State[]> => {
  const { data } = await api.get<State[]>(API_ENDPOINTS.STATE.LISTA);
  return data;
};