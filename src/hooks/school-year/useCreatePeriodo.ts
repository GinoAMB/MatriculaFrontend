import { useState } from "react";
import axios from "axios";

import { crearPeriodo } from "@/api/service/school-year/periodo.service";

import type {
    SchoolTerm,
    CreateSchoolTerm
} from "@/type/school-year/periodo.type";

export const useCreatePeriodo = () => {

    const [loading, setLoading] = useState(false);

    const crearNuevoPeriodo = async (
        periodoData: CreateSchoolTerm
    ): Promise<SchoolTerm> => {

        try {

            setLoading(true);

            const data = await crearPeriodo(periodoData);

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
        crearNuevoPeriodo,
        loading,
    };
};