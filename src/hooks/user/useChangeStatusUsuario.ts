import { useState } from "react";

import { cambiarEstadoUsuario } from "@/api/service/usuario/usuario.service";

export const useChangeStatusUsuario = () => {

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState<string | null>(null);

    const changeStatus = async (id: number) => {

        try {
            setLoading(true);
            setError(null);

            return await cambiarEstadoUsuario(id);

        } catch (err: any) {
            console.error(err);

            setError(
                err?.response?.data?.message ||
                "Error al cambiar el estado del usuario"
            );

            throw err;

        } finally {
            setLoading(false);
        }
    };

    return {
        changeStatus,
        loading,
        error,
    };
};