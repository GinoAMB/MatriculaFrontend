export type Usuario = {
  idUsuario: number;
  nombres: string;
  apellidos: string;
  correo: string;
  idRol: number;
  rol: string;
  estado: boolean;
};

export type UsuarioListaResponse = {
  content: Usuario[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
};

export type UsuarioFiltros = {
  page?: number;
  size?: number;
  search?: string;
  rol?: string;
  estado?: boolean;
};

// create user
export type UsuarioCreateRequest = {
  nombre: string;
  apellidos: string;
  correo: string;
  idRol: number;
  password: string;
};

// update user
export type UsuarioUpdateRequest = {
  nombre: string;
  apellidos: string;
  correo: string;
  idRol: number;
  password?: string;
  estado: boolean;
};