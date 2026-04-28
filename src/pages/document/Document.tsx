import { useState } from "react";
import DocumentHeader from "./components/DocumentHueader";
import DocumentList from "./components/DocumentList";
import Pagination from "@/components/Pagination";
import CreateDocumentModal from "./modals/CreateDocumentModal";
import EditDocumentModal from "./modals/EditDocumentModal";

export default function Document() {
    type Document = {
        id: number;
        name: string;
    };

    const documents: Document[] = [
        { id: 1, name: "DNI" },
        { id: 2, name: "Pasaporte" },
        { id: 3, name: "Carnet de Extranjería" },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalPages = Math.ceil(documents.length / itemsPerPage);

    const paginatedDocuments = documents.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const [openModal, setOpenModal] = useState(false);

    const [openEditModal, setOpenEditModal] = useState(false);
    const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);

    return (
        <div className="flex flex-col gap-3">
            <DocumentHeader
                title="Gestión de Tipos de Documentos"
                subtitle="Define y administra los diferentes tipos de documentos aceptados por el sistema."
                onNewDocument={() => setOpenModal(true)}
            />
            <DocumentList
                document={paginatedDocuments}
                onEdit={(doc) => {
                    setSelectedDocument(doc);
                    setOpenEditModal(true);
                }}
            />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={documents.length}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
            />

            <CreateDocumentModal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                onCreate={(data) => {
                    console.log("Nuevo documento:", data);
                    // aquí luego puedes conectar con backend
                }}
            />

            <EditDocumentModal
                isOpen={openEditModal}
                onClose={() => {
                    setOpenEditModal(false);
                    setSelectedDocument(null);
                }}
                document={selectedDocument}
                onUpdate={(data) => {
                    console.log("Documento actualizado:", data);
                    // aquí luego actualizas en backend o estado
                }}
            />
        </div>
    );
}