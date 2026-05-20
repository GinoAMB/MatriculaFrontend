//Lista periodo
export interface SchoolTerm {
    idPeriodo: number; 
    anio: number;
    fechaInicio: string;
    fechaFin: string;       
}

//create periodo
export interface CreateSchoolTerm {
    anio: number;
    fechaInicio: string;
    fechaFin: string;       
}

//update periodo
export interface UpdateSchoolTerm {
    idPeriodo: number;
    anio: number;
    fechaInicio: string;
    fechaFin: string;       
}