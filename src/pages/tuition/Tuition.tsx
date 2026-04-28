import TuitionHeader from "./components/TuitionHeader";
import TuitionFilters from "./components/TuitionFilters";
import TuitionList from "./components/TuitionList";
import Pagination from "@/components/Pagination";
import { useState } from "react";
import MultiStepModal from "./modals/multiStepModal/MultiStepModal";

export default function Tuition() {

    type User = {
        id: number;
        name: string;
        nivel: string;
        grado: string;
        seccion: string;
    };

    const users: User[] = [
        { id: 1, name: "Juan Pérez", nivel: "Primaria", grado: "5to", seccion: "A" },
        { id: 2, name: "María Gómez", nivel: "Secundaria", grado: "3ro", seccion: "B" },
        { id: 3, name: "Carlos Sánchez", nivel: "Primaria", grado: "2do", seccion: "C" },
    ];

    const handleSearch = (filters: {
        search: string;
        level: string;
        grade: string;
        section: string;
    }) => {
        console.log(filters);
        // aquí luego filtras data o llamas a tu API
    };

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalPages = Math.ceil(users.length / itemsPerPage);

    const paginatedUsers = users.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="flex flex-col gap-4">

            <TuitionHeader
                title="Gestión de Matrículas"
                subtitle="Control académico y administrativo del alumnado"
                onNewTuition={() => setOpenModal(true)}

            />

            <TuitionFilters onSearch={handleSearch} />
            <TuitionList
                users={paginatedUsers}
                onEdit={(user) => {
                    console.log("Editar usuario", user);
                }}
            />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={users.length}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
            />

            <MultiStepModal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
            />
        </div>
    );
}