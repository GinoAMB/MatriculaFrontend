import { useEffect, useState, useCallback } from "react";
import { obtenerPeriodos } from "@/api/service/school-year/periodo.service"; 
import type { SchoolTerm } from "@/type/school-year/periodo.type";

export const usePeriodo = () => {
    const [periodos, setPeriodos] = useState<SchoolTerm[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const cargarPeriodos = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const periodos = await obtenerPeriodos();
            setPeriodos(periodos);
        } catch (err) {
            setError("Error al cargar los periodos");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        cargarPeriodos();
    }, [cargarPeriodos]);

    return { periodos, loading, error, cargarPeriodos: cargarPeriodos };
};