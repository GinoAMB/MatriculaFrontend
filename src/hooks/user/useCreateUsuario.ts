import { useState } from "react";
import axios from "axios";

import { crearUsuario } from "@/api/service/usuario/usuario.service";

import type {
    UsuarioCreateRequest,
} from "@/type/user/user.type";

export const useCreateUsuario = () => {
    const [loading, setLoading] = useState(false);

    const createUser = async (
        usuario: UsuarioCreateRequest
    ) => {
        try {
            setLoading(true);

            return await crearUsuario(usuario);

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
        createUser,
        loading,
    };
};