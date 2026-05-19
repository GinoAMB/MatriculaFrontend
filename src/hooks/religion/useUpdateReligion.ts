import { useState } from "react";
import { actualizarReligion } from "@/api/service/religion/religion.service";
import type { Religion, UpdateReligion } from "@/type/religion/religion.type";

export const useUpdateReligion = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const actualizarReligionData = async (
        religionData: UpdateReligion
    ): Promise<Religion | null> => {
        try {
            setLoading(true);
            setError(null);
            const religion = await actualizarReligion(religionData);
            return religion;
        } catch (err) {
            setError("Error al actualizar la religión");
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, actualizarReligionData };
}