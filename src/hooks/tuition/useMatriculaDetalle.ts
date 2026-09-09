import { useEffect, useState } from "react";

import { obtenerDetalleMatricula } from "@/api/service/tuition/tuition.service";

import type { MatriculaDetalle } from "@/type/tuition/tuition.type";

export const useMatriculaDetalle = (idMatricula?: number) => {

    const [matricula, setMatricula] = useState<MatriculaDetalle | null>(null);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        if (!idMatricula) return;

        const fetchMatricula = async () => {

            try {

                setLoading(true);
                setError(null);

                const data = await obtenerDetalleMatricula(idMatricula);

                setMatricula(data);

            } catch (err) {

                setError("Error al obtener detalle de matrícula");

            } finally {

                setLoading(false);
            }
        };

        fetchMatricula();

    }, [idMatricula]);

    return {
        matricula,
        loading,
        error,
    };
};