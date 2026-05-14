import { useState } from "react";

import { crearUsuario } from "@/api/service/usuario/usuario.service";

import type {
    UsuarioCreateRequest,
} from "@/type/user/user.type";

export const useCreateUsuario = () => {
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState<string | null>(null);

    const createUser = async (
        usuario: UsuarioCreateRequest
    ) => {
        try {
            setLoading(true);
            setError(null);

            return await crearUsuario(usuario);

        } catch (err: any) {
            console.error(err);

            setError(
                err?.response?.data?.message ||
                "Error al crear usuario"
            );

            throw err;

        } finally {
            setLoading(false);
        }
    };

    return {
        createUser,
        loading,
        error,
    };
};