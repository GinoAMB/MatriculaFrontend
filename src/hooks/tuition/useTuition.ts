import { useEffect, useState, useCallback } from "react";
import { obtenerTuitions } from "@/api/service/tuition/tuition.service";
import type { Tuition, TuitionFiltros } from "@/type/tuition/tuition.type";

export const useTuitions = (filtros: TuitionFiltros) => {
    const [tuitions, setTuitions] = useState<Tuition[]>([]);
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [totalElements, setTotalElements] = useState(0);
    const [error, setError] = useState<string | null>(null);

    const cargarTuitions = useCallback(async () => {

        try {

            setLoading(true);
            setError(null);
            const response = await obtenerTuitions(filtros);
            setTuitions(response.content);
            setTotalPages(response.totalPages);
            setTotalElements(response.totalElements);
        } catch (err) {
            setError("Error al obtener las matrículas");
        } finally {
            setLoading(false);
        }
    }, [filtros.page, filtros.size, filtros.search, filtros.nivel, filtros.grado, filtros.seccion]);

    useEffect(() => {
        cargarTuitions();
    }, [cargarTuitions]);

    return {
        tuitions,
        loading,
        totalPages,
        totalElements,
        recargar: cargarTuitions,
        error,
    };
}