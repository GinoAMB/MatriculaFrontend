import { useState } from "react";
import axios from "axios";
import { updateRole } from "@/api/service/role/role.service";

import type { Role, UpdateRole } from "@/type/role/rol.type";

export const useUpdateRole = () => {

    const [loading, setLoading] = useState(false);

    const actualizarRol = async (
        roleData: UpdateRole
    ): Promise<Role | null> => {

        try {
            setLoading(true);

            const data = await updateRole(roleData);

            return data;

        } catch (err) {

            let errorMessage = "Ocurrió un error inesperado";

            if (axios.isAxiosError(err)) {

                errorMessage =
                    err.response?.data?.message ||
                    "Error al crear el periodo";
            }

            throw new Error(errorMessage);

        } finally {
            setLoading(false);
        }
    };

    return {
        actualizarRol,
        loading,
    };
};