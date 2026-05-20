import api from "@/api/axios";
import { API_ENDPOINTS } from "@/api/endpoints";
import type { SchoolTerm, CreateSchoolTerm, UpdateSchoolTerm } from "@/type/school-year/periodo.type";

export const obtenerPeriodos = async (): Promise<SchoolTerm[]> => {
  const { data } = await api.get<SchoolTerm[]>(API_ENDPOINTS.PERIODO.LISTA);
  return data;
}

export const crearPeriodo = async (periodo: CreateSchoolTerm): Promise<SchoolTerm> => {
  const { data } = await api.post<SchoolTerm>(API_ENDPOINTS.PERIODO.CREAR, periodo);
  return data;
}

export const actualizarPeriodo = async (periodo: UpdateSchoolTerm): Promise<SchoolTerm> => {
  const { data } = await api.put<SchoolTerm>(API_ENDPOINTS.PERIODO.UPDATE, periodo);
  return data;
}