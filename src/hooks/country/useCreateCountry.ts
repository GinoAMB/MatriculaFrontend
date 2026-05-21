import { useState } from "react";
import axios from "axios";
import { createPais } from "@/api/service/country/country.service";

import type { Country, CreateCountry } from "@/type/country/country.type";

export const useCreateCountry = () => {

    const [loading, setLoading] = useState(false);

    const crearPais = async (
        countryData: CreateCountry
    ): Promise<Country | null> => { 

        try {

            setLoading(true);

            const data = await createPais(countryData);

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
        crearPais,
        loading,
    };
}