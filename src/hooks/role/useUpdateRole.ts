import { useState } from "react";

import { updateRole } from "@/api/service/role/role.service";

import type { Role, UpdateRole } from "@/type/role/rol.type";

export const useUpdateRole = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const actualizarRol = async (
        roleData: UpdateRole
    ): Promise<Role | null> => {

        try {
            setLoading(true);
            setError(null);

            const data = await updateRole(roleData);

            return data;

        } catch (err) {

            console.error(err);
            setError("Error al actualizar el rol");

            return null;

        } finally {
            setLoading(false);
        }
    };

    return {
        actualizarRol,
        loading,
        error,
    };
};