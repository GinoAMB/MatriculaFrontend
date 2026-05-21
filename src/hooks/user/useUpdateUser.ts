import { useState } from "react";
import { actualizarUsuario } from "@/api/service/usuario/usuario.service";
import type { UsuarioUpdateRequest } from "@/type/user/user.type";
import axios from "axios";

export const useUpdateUser = () => {

  const [loading, setLoading] = useState(false);

  const updateUser = async (
    id: number,
    usuario: UsuarioUpdateRequest
  ) => {

    try {
      setLoading(true);

      // Si password viene vacío, no se envía
      const payload: UsuarioUpdateRequest = {
        nombre: usuario.nombre,
        apellidos: usuario.apellidos,
        correo: usuario.correo,
        idRol: usuario.idRol,
        estado: usuario.estado,
        ...(usuario.password?.trim() ? { password: usuario.password } : {}),
      };

      const response = await actualizarUsuario(id, payload);

      return response;

    } catch (err) {

      let errorMessage = "Ocurrió un error inesperado";

      if (axios.isAxiosError(err)) {

        errorMessage =
          err.response?.data?.message ||
          "Error al actualizar el usuario";
      }


      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return {
    updateUser,
    loading
  };
};