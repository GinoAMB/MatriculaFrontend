import { useState } from "react";
import axios from "axios";

import { actualizarPeriodo } from "@/api/service/school-year/periodo.service";

import type {
    SchoolTerm,
    UpdateSchoolTerm
} from "@/type/school-year/periodo.type";

export const useUpdatePeriodo = () => {

    const [loading, setLoading] = useState(false);


    const actualizarPeriodoData = async (
        periodoData: UpdateSchoolTerm
    ): Promise<SchoolTerm> => {

        try {

            setLoading(true);

            const periodo = await actualizarPeriodo(periodoData);

            return periodo;

        } catch (err) {

            let errorMessage = "Ocurrió un error inesperado";

            if (axios.isAxiosError(err)) {

                errorMessage =
                    err.response?.data?.message ||
                    "Error al actualizar el periodo";
            }


            throw new Error(errorMessage);

        } finally {

            setLoading(false);

        }
    };

    return {
        loading,
        actualizarPeriodoData
    };
};