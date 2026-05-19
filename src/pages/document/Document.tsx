import { useState } from "react";

import DocumentHeader from "./components/DocumentHueader";
import DocumentList from "./components/DocumentList";
import Pagination from "@/components/Pagination";
import CreateDocumentModal from "./modals/CreateDocumentModal";
import EditDocumentModal from "./modals/EditDocumentModal";
import Loader from "@/components/Loader";

import { useDocument } from "@/hooks/document/useDocument";
import { useCreateDocument } from "@/hooks/document/useCreateDocument";
import { useUpdateDocument } from "@/hooks/document/useUpdateDocument";

import type { DocumentType } from "@/type/document/document.type";

import { showSuccess, showError } from "@/utils/toast";

export default function Document() {

    const { documents, loading, error, recargar } = useDocument();

    const {
        crearDocumento,
        loading: creatingDocument
    } = useCreateDocument();

    const {
        actualizarDocumento,
        loading: updatingDocument
    } = useUpdateDocument();

    //  Paginación
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 10;

    const totalPages = Math.ceil(documents.length / itemsPerPage);

    const paginatedDocuments = documents.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    //  Modal crear
    const [openModal, setOpenModal] = useState(false);

    //  Modal editar
    const [openEditModal, setOpenEditModal] = useState(false);

    const [selectedDocument, setSelectedDocument] = useState<DocumentType | null>(null);

    const handleEditDocument = (document: DocumentType) => {
        setSelectedDocument(document);
        setOpenEditModal(true);
    };

    //  Crear documento
    const handleCreateDocument = async (data: { name: string }) => {

        try {

            const response = await crearDocumento({
                nombre: data.name,
            });

            if (response) {

                await recargar();

                showSuccess("Tipo de documento creado correctamente");

                setOpenModal(false);
            }

        } catch (error) {

            showError("Error al crear el tipo de documento");
        }
    };

    //  Actualizar documento
    const handleUpdateDocument = async (data: DocumentType) => {

    try {

        const response = await actualizarDocumento({
            idTipo: data.idTipo,
            nombre: data.nombre,
        });

        if (response) {

            await recargar();

            showSuccess("Tipo de documento actualizado correctamente");

            setOpenEditModal(false);

            setSelectedDocument(null);
        }

    } catch (error) {

        showError("Error al actualizar el tipo de documento");
    }
};

    //  Error
    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="flex flex-col gap-3">

            <DocumentHeader
                title="Gestión de Tipos de Documentos"
                subtitle="Define y administra los diferentes tipos de documentos aceptados por el sistema."
                onNewDocument={() => setOpenModal(true)}
            />

            {loading ? (
                <Loader />
            ) : (
                <DocumentList
                    document={paginatedDocuments}
                    onEdit={handleEditDocument}
                />
            )}

            {!loading && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalItems={documents.length}
                    itemsPerPage={itemsPerPage}
                    onPageChange={setCurrentPage}
                />
            )}

            <CreateDocumentModal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                onCreate={handleCreateDocument}
                loading={creatingDocument}
            />

            <EditDocumentModal
                isOpen={openEditModal}
                onClose={() => {
                    setOpenEditModal(false);
                    setSelectedDocument(null);
                }}
                document={selectedDocument}
                onUpdate={handleUpdateDocument}
                loading={updatingDocument}
            />

        </div>
    );
}