import { useState } from "react";
import axios from "axios";
import { actualizarReligion } from "@/api/service/religion/religion.service";
import type { Religion, UpdateReligion } from "@/type/religion/religion.type";

export const useUpdateReligion = () => {
    const [loading, setLoading] = useState(false);

    const actualizarReligionData = async (
        religionData: UpdateReligion
    ): Promise<Religion | null> => {
        try {
            setLoading(true);
            const religion = await actualizarReligion(religionData);
            return religion;
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

    return { loading, actualizarReligionData };
}