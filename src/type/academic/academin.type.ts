export type Seccion = {
  idSeccion: number;
  nombre: string;
};

export type Grado = {
  idGrado: number;
  nombre: string;
  secciones: Seccion[];
};

export type Nivel = {
  idNivel: number;
  nombre: string;
  grados: Grado[];
};