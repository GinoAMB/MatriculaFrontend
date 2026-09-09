import { useEffect, useState, useCallback } from "react";
import { listarNiveles } from "@/api/service/academic/academic.service";
import type { Nivel } from "@/type/academic/academin.type";

export const useAcademic = () => {

    const [niveles, setNiveles] = useState<Nivel[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const cargarNiveles = useCallback(async () => {

        try {
            setLoading(true);
            setError(null);
            const data = await listarNiveles();
            setNiveles(data);
        } catch (err) {
            setError("Error al obtener los niveles académicos");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        cargarNiveles();
    }, [cargarNiveles]);

    return {
        niveles,
        loading,
        error,
        recargar: cargarNiveles,
    };
}