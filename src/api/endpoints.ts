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
  DOCUMENT_TYPE: {
    LISTA: "/documento",
    CREAR: "/documento/register",
    UPDATE: "/documento/update",
  },
  RELIGION: {
    LISTA: "/religion",
    CREAR: "/religion/register",
    UPDATE: "/religion/update",
  },
  STATE: {
    LISTA: "/estadoMatricula",
  },
  PERIODO: {
    LISTA: "/periodo-escolar",
    CREAR: "/periodo-escolar/register",
    UPDATE: "/periodo-escolar/update",
  },
  TUITION: {
    LISTA: "/matriculas/lista",
    CREAR: "/matriculas",
    PRINT: "/matriculas/print",
    DETALLE: (id: number) => `/matriculas/${id}`,
  },
  ACADEMIC: {
    LISTA: "/academico/niveles",
    DETALLE: (id: number) => `/academico/niveles/${id}`,
  },
};