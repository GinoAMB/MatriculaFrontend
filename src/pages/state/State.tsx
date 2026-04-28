import StateHeader from "./components/StateHeader";
import StateList from "./components/StateList";
import Pagination from "@/components/Pagination";
import { useState } from "react";
import CreateStateModal from "./modals/CreateStateModal";
import EditStateModal from "./modals/EditStateModal";

export default function State() {

    type Status = {
        id: number;
        name: string;
    };

    const dummyStatus: Status[] = [
        { id: 1, name: "Matriculado" },
        { id: 2, name: "Egresado" },
        { id: 3, name: "Traslado" },
        { id: 4, name: "Retirado" },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalPages = Math.ceil(dummyStatus.length / itemsPerPage);

    const paginatedStatus = dummyStatus.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState<Status | null>(null);

    return (
        <div className="flex flex-col gap-3">
            <StateHeader
                title="Gestión de Estados de Matrícula"
                subtitle="Administre los diferentes estados que definen el flujo del proceso de inscripción de los estudiantes en el sistema educativo."
                onNewState={() => setIsModalOpen(true)}
            />

            <StateList
                status={paginatedStatus}
                onEdit={(status) => {
                    setSelectedStatus(status);
                    setIsEditModalOpen(true);
                }}
            />

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={dummyStatus.length}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
            />

            <CreateStateModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onCreate={(data) => {
                    console.log("Nuevo estado:", data);
                    // aquí luego conectas con backend o state real
                }}
            />

            <EditStateModal
                isOpen={isEditModalOpen}
                onClose={() => {
                    setIsEditModalOpen(false);
                    setSelectedStatus(null);
                }}
                status={selectedStatus}
                onUpdate={(data) => {
                    console.log("Estado actualizado:", data);
                    // luego conectas con backend o actualizas state
                }}
            />
        </div>
    );
}