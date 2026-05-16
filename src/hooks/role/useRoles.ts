import { useEffect, useState, useCallback } from "react";

import { obtenerRoles } from "@/api/service/role/role.service";

import type { Role } from "@/type/role/rol.type";

export const useRoles = () => {

    const [roles, setRoles] = useState<Role[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const cargarRoles = useCallback(async () => {

        try {
            setLoading(true);
            setError(null);

            const data = await obtenerRoles();

            setRoles(data);

        } catch (err) {

            console.error(err);
            setError("Error al obtener los roles");

        } finally {
            setLoading(false);
        }

    }, []);

    useEffect(() => {
        cargarRoles();
    }, [cargarRoles]);

    return {
        roles,
        loading,
        error,
        recargar: cargarRoles,
    };
};