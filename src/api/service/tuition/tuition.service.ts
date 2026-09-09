import api from "@/api/axios";
import { API_ENDPOINTS } from "@/api/endpoints";
import type {
    TuitionListaResponse,
    TuitionFiltros,
    MatriculaDetalle,
    AlumnoPrintResponse,
    RegistrarMatriculaRequest,
    Tuition
} from "@/type/tuition/tuition.type";

export const obtenerTuitions = async (filtros: TuitionFiltros) => {
    const { data } = await api.get<TuitionListaResponse>(API_ENDPOINTS.TUITION.LISTA, { params: filtros });
    return data;
};

export const obtenerDetalleMatricula = async (idMatricula: number) => {
    const { data } = await api.get<MatriculaDetalle>(API_ENDPOINTS.TUITION.DETALLE(idMatricula));
    return data;
};

export const obtenerAlumnosParaImpresion = async (filtros: {
    nivel?: string;
    grado?: string;
    seccion?: string;
}) => {
    const { data } = await api.get<AlumnoPrintResponse>(
        API_ENDPOINTS.TUITION.PRINT,
        { params: filtros }
    );

    return data;
};

export const createTuition = async (tuitionData: RegistrarMatriculaRequest) => {
    const { data } = await api.post<Tuition>(API_ENDPOINTS.TUITION.CREAR, tuitionData);
    return data;
};