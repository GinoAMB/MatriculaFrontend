import api from "@/api/axios";
import { API_ENDPOINTS } from "@/api/endpoints";
import type { Religion, CreateReligion, UpdateReligion } from "@/type/religion/religion.type";

export const obtenerReligiones = async (): Promise<Religion[]> => {
  const { data } = await api.get<Religion[]>(API_ENDPOINTS.RELIGION.LISTA);
  return data;
};

export const crearReligion = async (religion: CreateReligion): Promise<Religion> => {
  const { data } = await api.post<Religion>(API_ENDPOINTS.RELIGION.CREAR, religion);
  return data;
};

export const actualizarReligion = async (religion: UpdateReligion): Promise<Religion> => {
  const { data } = await api.put<Religion>(API_ENDPOINTS.RELIGION.UPDATE, religion);
  return data;
};