import { useState } from "react";
import axios from "axios";

import { createTuition } from "@/api/service/tuition/tuition.service";

import type {
    Tuition,
    RegistrarMatriculaRequest,
} from "@/type/tuition/tuition.type";

export const useCreateTuition = () => {

    const [loading, setLoading] = useState(false);

    const crearMatricula = async (
        tuitionData: RegistrarMatriculaRequest
    ): Promise<Tuition | null> => {

        try {

            setLoading(true);

            const data = await createTuition(tuitionData);

            return data;

        } catch (err) {

            let errorMessage = "Ocurrió un error inesperado";

            if (axios.isAxiosError(err)) {

                errorMessage =
                    err.response?.data?.message ||
                    "Error al registrar la matrícula";
            }

            throw new Error(errorMessage);

        } finally {

            setLoading(false);

        }
    };

    return {
        crearMatricula,
        loading,
    };
};