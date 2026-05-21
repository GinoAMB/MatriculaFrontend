import { useState } from "react";
import axios from "axios";
import { actualizarTipoDocumento } from "@/api/service/document/document.service";

import type { DocumentType, UpdateDocumentType } from "@/type/document/document.type";

export const useUpdateDocument = () => {
    const [loading, setLoading] = useState(false);

    const actualizarDocumento = async (
        documentData: UpdateDocumentType
    ): Promise<DocumentType | null> => {    
        try {
            setLoading(true);
            const document = await actualizarTipoDocumento(documentData);
            return document;
        } catch (err) {
            let errorMessage = "Ocurrió un error inesperado";

            if (axios.isAxiosError(err)) {

                errorMessage =
                    err.response?.data?.message ||
                    "Error al crear el periodo";
            }

            throw new Error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return { loading, actualizarDocumento };
}