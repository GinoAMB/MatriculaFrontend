import { useState } from "react";

import { createRole } from "@/api/service/role/role.service";

import type { Role, CreateRole } from "@/type/role/rol.type";

export const useCreateRole = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const crearRol = async (
        roleData: CreateRole
    ): Promise<Role | null> => {

        try {

            setLoading(true);
            setError(null);

            const data = await createRole(roleData);

            return data;

        } catch (err) {

            console.error(err);

            setError("Error al crear el rol");

            return null;

        } finally {

            setLoading(false);

        }
    };

    return {
        crearRol,
        loading,
        error,
    };
};