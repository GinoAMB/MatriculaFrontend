import { useEffect, useState, useCallback } from "react";
import { obtenerReligiones } from "@/api/service/religion/religion.service";
import type { Religion } from "@/type/religion/religion.type";

export const useReligion = () => {
    const [religions, setReligions] = useState<Religion[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const cargarReligions = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const data = await obtenerReligiones();

            setReligions(data);
        } catch (err) {
            setError("Error al obtener las religiones");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        cargarReligions();
    }, [cargarReligions]);

    return {
        religions,
        loading,
        error,
        recargar: cargarReligions,
    };

};