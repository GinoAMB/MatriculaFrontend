import { useState } from "react";
import axios from "axios";
import { crearTipoDocumento } from "@/api/service/document/document.service";

import type { DocumentType, CreateDocumentType } from "@/type/document/document.type";

export const useCreateDocument = () => {

    const [loading, setLoading] = useState(false);

    const crearDocumento = async (
        documentData: CreateDocumentType
    ): Promise<DocumentType | null> => {

        try {

            setLoading(true);

            const data = await crearTipoDocumento(documentData);

            return data;
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

    return {
        crearDocumento,
        loading,
    };
}