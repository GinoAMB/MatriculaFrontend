import { useState } from "react";
import axios from "axios";
import { crearReligion } from "@/api/service/religion/religion.service";
import type { Religion, CreateReligion } from "@/type/religion/religion.type";

export const useCreateReligion = () => {

    const [loading, setLoading] = useState(false);

    const crearNuevaReligion = async (
        religionData: CreateReligion
    ): Promise<Religion | null> => {

        try {

            setLoading(true);

            const data = await crearReligion(religionData);

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
        crearNuevaReligion,
        loading,
    };
}