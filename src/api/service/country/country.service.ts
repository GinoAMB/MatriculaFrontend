import api from "@/api/axios";
import { API_ENDPOINTS } from "@/api/endpoints";
import type { Country, CreateCountry, UpdateCountry } from "@/type/country/country.type";

export const obtenerPaises = async (): Promise<Country[]> => {
  const { data } = await api.get<Country[]>(API_ENDPOINTS.COUNTRY.LISTA);
  return data;
};

export const createPais = async (countryData: CreateCountry): Promise<Country> => {
  const { data } = await api.post<Country>(API_ENDPOINTS.COUNTRY.CREAR, countryData);
  return data;
}

export const updatePais = async (countryData: UpdateCountry): Promise<Country> => {
  const { data } = await api.put<Country>(API_ENDPOINTS.COUNTRY.UPDATE, countryData);
  return data;
};
