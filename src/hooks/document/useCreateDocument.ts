import { useState } from "react";

import { crearTipoDocumento } from "@/api/service/document/document.service";

import type { DocumentType, CreateDocumentType } from "@/type/document/document.type";

export const useCreateDocument = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const crearDocumento = async (
        documentData: CreateDocumentType
    ): Promise<DocumentType | null> => {

        try {

            setLoading(true);
            setError(null);

            const data = await crearTipoDocumento(documentData);

            return data;
        } catch (err) {

            setError("Error al crear el tipo de documento");
            return null;
        } finally {
            setLoading(false);
        }
    };

    return {
        crearDocumento,
        loading,
        error,
    };
}