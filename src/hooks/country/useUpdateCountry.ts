import { useState } from "react";
import axios from "axios";
import { updatePais } from "@/api/service/country/country.service";

import type { Country, UpdateCountry } from "@/type/country/country.type";

export const useUpdateCountry = () => {
    const [loading, setLoading] = useState(false);

    const actualizarPais = async (
        countryData: UpdateCountry
    ): Promise<Country | null> => {
        try {
            setLoading(true);
            const country = await updatePais(countryData);
            return country;
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

    return { loading, actualizarPais };
};