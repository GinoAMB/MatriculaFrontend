export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    LISTA: "/auth/lista",
    CREAR: "/auth/register",
    STATUS: (id: number) => `/auth/${id}/status`,
    ACTUALIZAR: (id: number) => `/auth/${id}`,
  },
  RECUPERACION: {
    SOLICITUD: "/recuperacion/solicitar",
    VALIDACION: "/recuperacion/validar-token",
    CAMBIO: "/recuperacion/cambiar-password",
  },
  ROLE: {
    LISTA: "/rol",
    UPDATE: "/rol/update",
    CREATE: "/rol/register",
  },
  COUNTRY: {
    LISTA: "/pais",
    CREAR: "/pais/register",
    UPDATE: "/pais/update",
  },
};