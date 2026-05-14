import api from "@/api/axios";
import { API_ENDPOINTS } from "@/api/endpoints";
import type {
  Usuario,
  UsuarioListaResponse,
  UsuarioFiltros,
  UsuarioCreateRequest,
  UsuarioUpdateRequest,
} from "@/type/user/user.type";

export const obtenerUsuarios = async (filtros: UsuarioFiltros) => {
  const { data } = await api.get<UsuarioListaResponse>(API_ENDPOINTS.AUTH.LISTA, {params: filtros});
  return data;
};

export const crearUsuario = async (usuario: UsuarioCreateRequest): Promise<Usuario> => {
  const { data } = await api.post(API_ENDPOINTS.AUTH.CREAR, usuario);
  return data;
}

export const cambiarEstadoUsuario = async (id: number): Promise<void> => {
  const { data } = await api.patch(API_ENDPOINTS.AUTH.STATUS(id));
  return data;
}

export const actualizarUsuario = async (id: number, usuario: UsuarioUpdateRequest): Promise<Usuario> => {
  const { data } = await api.put(API_ENDPOINTS.AUTH.ACTUALIZAR(id), usuario );
  return data;
};