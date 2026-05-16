import api from "@/api/axios";
import { API_ENDPOINTS } from "@/api/endpoints";
import type { Role, UpdateRole, CreateRole } from "@/type/role/rol.type";

export const obtenerRoles = async (): Promise<Role[]> => {
  const { data } = await api.get<Role[]>(API_ENDPOINTS.ROLE.LISTA);
  return data;
}

export const updateRole = async (roleData: UpdateRole): Promise<Role> => {
  const { data } = await api.put<Role>(API_ENDPOINTS.ROLE.UPDATE, roleData);
  return data;
};

export const createRole = async (roleData: CreateRole): Promise<Role> => {
  const { data } = await api.post<Role>(API_ENDPOINTS.ROLE.CREATE, roleData);
  return data;
};