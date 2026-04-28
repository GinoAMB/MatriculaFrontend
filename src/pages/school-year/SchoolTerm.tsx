import { useState } from "react";
import SchoolTermHeader from "./components/SchoolTermHeader";
import SchoolTermList from "./components/SchoolTermList";
import Pagination from "@/components/Pagination";
import CreateSchoolTermModal from "./modals/CreateSchoolTermModal";
import EditSchoolTermModal from "./modals/EditSchoolTermModal";

export default function SchoolTerm() {

    type SchoolTerm = {
        id: number;
        anio: number;
        fecha_inicio: string;
        fecha_fin: string;
    };

    const schoolTerms: SchoolTerm[] = [
        {
            id: 1,
            anio: 2024,
            fecha_inicio: "2024-01-15",
            fecha_fin: "2024-12-20",
        },
        {
            id: 2,
            anio: 2025,
            fecha_inicio: "2025-01-15",
            fecha_fin: "2025-12-20",
        },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalPages = Math.ceil(schoolTerms.length / itemsPerPage);

    const paginatedSchoolTerms = schoolTerms.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedSchoolTerm, setSelectedSchoolTerm] = useState<SchoolTerm | null>(null);

    return (
        <div className="flex flex-col gap-3">
            <SchoolTermHeader
                title="Gestión del Periodo Académico"
                subtitle="Administre los periodos académicos y fechas institucionales."
                onNewSchoolTerm={() => setIsModalOpen(true)}
            />
            <SchoolTermList
                schoolTerms={paginatedSchoolTerms}
                onEdit={(schoolTerm) => {
                    setSelectedSchoolTerm(schoolTerm);
                    setIsEditModalOpen(true);
                }}
            />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={schoolTerms.length}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
            />

            <CreateSchoolTermModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onCreate={(data) => console.log("Nuevo periodo:", data)}
            />

            <EditSchoolTermModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                schoolTerm={selectedSchoolTerm}
                onUpdate={(data) => console.log("Actualizar:", data)}
            />
        </div>
    );
}
