// list document type
export type DocumentType = {
    idTipo: number;
    nombre: string;
}

// create document type
export type CreateDocumentType = {
    nombre: string;
}

// update document type
export type UpdateDocumentType = {
    idTipo: number;
    nombre: string;
}