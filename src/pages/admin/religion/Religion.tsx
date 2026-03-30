import { useState } from "react";
import ReligionHeader from "./components/ReligionHeader";
import ReligionList from "./components/ReligionList";
import Pagination from "@/components/Pagination";
import CreateReligionModal from "./modals/CreateReligionModal";
import EditReligionModal from "./modals/EditReligionModal";

export default function Religion() {

    type Religion = {
        id: number;
        name: string;
    };

    const sampleReligions: Religion[] = [
        { id: 1, name: "Cristianismo" },
        { id: 2, name: "Islam" },
        { id: 3, name: "Hinduismo" },
        { id: 4, name: "Budismo" },
        { id: 5, name: "Judaísmo" },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalPages = Math.ceil(sampleReligions.length / itemsPerPage);

    const paginatedReligions = sampleReligions.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedReligion, setSelectedReligion] = useState<Religion | null>(null);

    return (
        <div className="flex flex-col gap-3">
            <ReligionHeader
                title="Gestión de Religiones"
                subtitle="Administra el catalogo oficial de creencias religiosas para el registro de estudiantes."
                onNewReligion={() => setIsModalOpen(true)}
            />
            <ReligionList
                religion={paginatedReligions}
                onEdit={(religion) => {
                    setSelectedReligion(religion);
                    setIsEditModalOpen(true);
                }}
            />

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={sampleReligions.length}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
            />

            <CreateReligionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onCreate={(data) => {
                    console.log("Nueva religión:", data);
                    // aquí puedes agregarla a tu lista o llamar API
                }}
            />

            <EditReligionModal
                isOpen={isEditModalOpen}
                onClose={() => {
                    setIsEditModalOpen(false);
                    setSelectedReligion(null);
                }}
                religion={selectedReligion}
                onUpdate={(data) => {
                    console.log("Religión actualizada:", data);
                    // aquí puedes actualizar tu lista o llamar API
                }}
            />
        </div>
    );
}