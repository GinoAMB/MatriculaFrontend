import { useState } from "react";
import axios from "axios";
import { createRole } from "@/api/service/role/role.service";

import type { Role, CreateRole } from "@/type/role/rol.type";

export const useCreateRole = () => {

    const [loading, setLoading] = useState(false);

    const crearRol = async (
        roleData: CreateRole
    ): Promise<Role | null> => {

        try {

            setLoading(true);

            const data = await createRole(roleData);

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
        crearRol,
        loading,
    };
};