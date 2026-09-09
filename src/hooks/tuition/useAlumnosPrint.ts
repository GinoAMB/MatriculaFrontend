import { useEffect, useState, useCallback } from "react";
import { obtenerAlumnosParaImpresion } from "@/api/service/tuition/tuition.service";
import type { AlumnoPrintResponse } from "@/type/tuition/tuition.type";

type FiltrosPrint = {
    nivel?: string;
    grado?: string;
    seccion?: string;
};

export const useAlumnosPrint = (filtros: FiltrosPrint) => {

const [alumnos, setAlumnos] = useState<AlumnoPrintResponse>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const cargarAlumnosPrint = useCallback(async () => {

        try {
            setLoading(true);
            setError(null);

            const response = await obtenerAlumnosParaImpresion(filtros);

            setAlumnos(response);

        } catch (err) {
            setError("Error al obtener alumnos para impresión");
        } finally {
            setLoading(false);
        }

    }, [filtros.nivel, filtros.grado, filtros.seccion]);

    useEffect(() => {
        cargarAlumnosPrint();
    }, [cargarAlumnosPrint]);

    return {
        alumnos,
        loading,
        error,
        recargar: cargarAlumnosPrint,
    };
};