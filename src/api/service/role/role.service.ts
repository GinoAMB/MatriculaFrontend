import api from "@/api/axios";
import { API_ENDPOINTS } from "@/api/endpoints";
import type { Role } from "@/type/role/rol.type";

export const obtenerRoles = async (): Promise<Role[]> => {
  const { data } = await api.get<Role[]>(API_ENDPOINTS.ROLE.LISTA);
  return data;
}