export type Country = {
  idPais: number;
  nombre: string;
};

// create pais
export type CreateCountry = {
  nombre: string;
};

// update pais
export type UpdateCountry = {
  idPais: number;
  nombre: string;
};