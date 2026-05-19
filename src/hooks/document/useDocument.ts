import { useEffect, useState, useCallback } from "react";
import { obtenerTiposDocumentos } from "@/api/service/document/document.service";
import type { DocumentType } from "@/type/document/document.type";

export const useDocument = () => {
    const [documents, setDocuments] = useState<DocumentType[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const cargarDocuments = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const data = await obtenerTiposDocumentos();

            setDocuments(data);
        } catch (err) {
            setError("Error al obtener los documentos");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        cargarDocuments();
    }, [cargarDocuments]);

    return {
        documents,
        loading,
        error,
        recargar: cargarDocuments,
    };

};