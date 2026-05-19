import { useState } from "react";

import { actualizarTipoDocumento } from "@/api/service/document/document.service";

import type { DocumentType, UpdateDocumentType } from "@/type/document/document.type";

export const useUpdateDocument = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const actualizarDocumento = async (
        documentData: UpdateDocumentType
    ): Promise<DocumentType | null> => {    
        try {
            setLoading(true);
            setError(null);
            const document = await actualizarTipoDocumento(documentData);
            return document;
        } catch (err) {
            setError("Error al actualizar el tipo de documento");
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, actualizarDocumento };
}