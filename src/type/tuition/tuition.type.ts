export type Tuition = {
    idMatricula: number;
    idAlumno: number;
    nombre: string;
    apellidos: string;
    tipoDocumento: string;
    numeroDocumento: string;
    nivel: string;
    grado: string;
    seccion: string;
};

export type TuitionListaResponse = {
    content: Tuition[];
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
    first: boolean;
    last: boolean;  
};

export type TuitionFiltros = {
    page?: number;
    size?: number;
    search?: string;
    nivel?: string;
    grado?: string;
    seccion?: string;
};

// Detalle de matrícula
export type MatriculaDetalle = {
  idMatricula: number;
  fechaMatricula: string;
  periodo: string;
  estado: string;

  idAlumno: number;
  nombre: string;
  apellidos: string;

  idTipoDocumento: number | null;
  tipoDocumento: string | null;
  numeroDocumento: string;

  nivel: string;
  grado: string;
  seccion: string;

  direccion: string;

  vieneDeOtraInstitucion: boolean;
  nombreInstitucionProcedencia: string;

  tieneDiscapacidad: boolean;
  descripcionDiscapacidad: string;

  idReligion: number | null;
  religion: string | null;

  fechaNacimiento: string;

  idPais: number | null;
  pais: string | null;

  familiares: {
    idRelacion: number;
    idFamiliar: number;

    nombre: string;
    apellidos: string;

    idTipoDocumento: number | null;
    tipoDocumento: string | null;

    numeroDocumento: string;

    direccion: string;
    celular: string;

    idTipoRelacion: number;
    tipoRelacion: string;

    esApoderado: boolean;
    esFallecido: boolean;
  }[];
};

//Lista imprimir alumnos matriculados
export type Alumno = {
  nombre: string;
  apellidos: string;
  tipoDocumento: string;
  numeroDocumento: string;
  nivel: string;
  grado: string;
  seccion: string;
  direccion: string;
  vieneDeOtraInstitucion: boolean;
  nombreInstitucionProcedencia: string;
  tieneDiscapacidad: boolean;
  descripcionDiscapacidad: string;
  religion: string;
  fechaNacimiento: string;
  pais: string | null;
};

export type AlumnoPrintResponse = Alumno[];


// Registrar matricula
export type RegistrarMatriculaRequest = {
    alumno: AlumnoRequest;
    padre: FamiliarRequest;
    madre: FamiliarRequest;
    apoderadoExterno: FamiliarRequest;
    idSeccion: number;
    idPeriodo: number;
    idEstado: number;
    fechaMatricula: string;
};

export type AlumnoRequest = {
    nombre: string;
    apellidos: string;
    idTipoDocumento: number;
    numeroDocumento: string;
    direccion: string;
    vieneDeOtraInstitucion: boolean;
    nombreInstitucionProcedencia: string;
    tieneDiscapacidad: boolean;
    descripcionDiscapacidad: string;
    fechaNacimiento: string;
    idReligion: number;
    idPais: number;
};

export type FamiliarRequest = {
    datos: PersonaRequest;
    idTipoRelacion: number;
    esApoderado: boolean;
    esFallecido: boolean;
};

export type PersonaRequest = {
    nombre: string;
    apellidos: string;
    idTipoDocumento: number;
    numeroDocumento: string;
    direccion: string;
    celular: string;
};