import { useState } from "react";

import { updatePais } from "@/api/service/country/country.service";

import type { Country, UpdateCountry } from "@/type/country/country.type";

export const useUpdateCountry = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const actualizarPais = async (
        countryData: UpdateCountry
    ): Promise<Country | null> => {
        try {
            setLoading(true);
            setError(null);
            const country = await updatePais(countryData);
            return country;
        } catch (err) {
            setError("Error al actualizar el país");
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, actualizarPais };
};