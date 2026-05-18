import { useState } from "react";

import { createPais } from "@/api/service/country/country.service";

import type { Country, CreateCountry } from "@/type/country/country.type";

export const useCreateCountry = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const crearPais = async (
        countryData: CreateCountry
    ): Promise<Country | null> => { 

        try {

            setLoading(true);
            setError(null);

            const data = await createPais(countryData);

            return data;

        } catch (err) {

            setError("Error al crear el país");
            return null;
        } finally {
            setLoading(false);
        }
    };

    return {
        crearPais,
        loading,
        error,
    };
}