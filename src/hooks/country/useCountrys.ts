import { useEffect, useState, useCallback } from "react";

import { obtenerPaises } from "@/api/service/country/country.service";
import type { Country } from "@/type/country/country.type";

export const useCountrys = () => {
    const [countrys, setCountrys] = useState<Country[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null); 

    const cargarCountrys = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const data = await obtenerPaises();

            setCountrys(data);
        } catch (err) {
            console.error(err);
            setError("Error al obtener los países");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        cargarCountrys();
    }, [cargarCountrys]);

    return {
        countrys,
        loading,
        error,
        recargar: cargarCountrys,
    };
};