import api from "@/api/axios";
import { API_ENDPOINTS } from "@/api/endpoints";
import type { Nivel } from "@/type/academic/academin.type";

export const listarNiveles = async () => {
    const { data } = await api.get<Nivel[]>(API_ENDPOINTS.ACADEMIC.LISTA);
    return data;
};