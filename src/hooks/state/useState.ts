import { useEffect, useState, useCallback } from "react";
import { obtenerEstados } from "@/api/service/state/state.service";
import type { State } from "@/type/state/state.type";

export const useStateMatricula = () => {
    const [states, setStates] = useState<State[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const cargarStates = useCallback(async () => {
        try {
            setLoading(true);
            setError(null); 

            const data = await obtenerEstados();

            setStates(data);
        } catch (err) {
            setError("Error al obtener los estados");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        cargarStates();
    }, [cargarStates]);

    return {
        states,
        loading,
        error,
    };
};