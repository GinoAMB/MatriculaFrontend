import { useState } from "react";
import { crearReligion } from "@/api/service/religion/religion.service";
import type { Religion, CreateReligion } from "@/type/religion/religion.type";

export const useCreateReligion = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const crearNuevaReligion = async (
        religionData: CreateReligion
    ): Promise<Religion | null> => {

        try {

            setLoading(true);
            setError(null);

            const data = await crearReligion(religionData);

            return data;
        } catch (err) {

            setError("Error al crear la religión");
            return null;
        } finally {
            setLoading(false);
        }
    };

    return {
        crearNuevaReligion,
        loading,
        error,
    };
}