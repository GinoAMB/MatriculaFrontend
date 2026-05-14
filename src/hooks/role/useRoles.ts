import { useEffect, useState } from "react";

import { obtenerRoles } from "@/api/service/role/role.service";

import type { Role } from "@/type/role/rol.type";

export const useRoles = () => {
    const [roles, setRoles] = useState<Role[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                setLoading(true);

                const data = await obtenerRoles();

                setRoles(data);
            } catch (err) {
                console.error(err);
                setError("Error al obtener los roles");
            } finally {
                setLoading(false);
            }
        };

        fetchRoles();
    }, []);

    return {
        roles,
        loading,
        error,
    };
};