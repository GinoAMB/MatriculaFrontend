import api from "@/api/axios";
import { API_ENDPOINTS } from "@/api/endpoints";
import type { DocumentType, CreateDocumentType, UpdateDocumentType } from "@/type/document/document.type";

export const obtenerTiposDocumentos = async (): Promise<DocumentType[]> => {
  const { data } = await api.get<DocumentType[]>(API_ENDPOINTS.DOCUMENT_TYPE.LISTA);
  return data;
};

export const crearTipoDocumento = async (documentType: CreateDocumentType): Promise<DocumentType> => {
  const { data } = await api.post<DocumentType>(API_ENDPOINTS.DOCUMENT_TYPE.CREAR, documentType);
  return data;
};

export const actualizarTipoDocumento = async (documentType: UpdateDocumentType): Promise<DocumentType> => {
  const { data } = await api.put<DocumentType>(API_ENDPOINTS.DOCUMENT_TYPE.UPDATE, documentType);
  return data;
};
