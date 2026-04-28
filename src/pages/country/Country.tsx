import CountryHeader from "./components/CountryHeader";
import CountryFilter from "./components/CountryFilters";
import CountryList from "./components/CountryList";
import Pagination from "@/components/Pagination";
import { useState } from "react";
import CreateCountryModal from "./modals/CreateCountryModal";
import EditCountryModal from "./modals/EditCountryModal";

export default function Country() {

    type Country = {
        id: number;
        name: string;
    };

    const countries: Country[] = [
        { id: 1, name: "Argentina" },
        { id: 2, name: "Brasil" },
        { id: 3, name: "Chile" },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalPages = Math.ceil(countries.length / itemsPerPage);

    const paginatedCountries = countries.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

    return (
        <div className="flex flex-col gap-3">
            <CountryHeader
                title="Gestión de Países"
                subtitle="Administre el catálogo de países habilitados para el registro de estudiantes y personal del sistema."
                onNewCountry={() => setIsModalOpen(true)}
            />
            <CountryFilter
                onSearch={(query) => {
                    // Aquí puedes implementar la lógica de búsqueda de países
                    console.log("Buscar país con query:", query);
                }}
            />
            <CountryList
                countries={paginatedCountries}
                onEdit={(country) => {
                    setSelectedCountry(country);
                    setIsEditModalOpen(true);
                }}
            />

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={countries.length}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
            />

            <CreateCountryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onCreate={(data) => {
                    console.log("Nuevo país:", data);
                    // aquí luego puedes agregar lógica para guardar en backend o estado
                }}
            />

            <EditCountryModal
                isOpen={isEditModalOpen}
                onClose={() => {
                    setIsEditModalOpen(false);
                    setSelectedCountry(null);
                }}
                country={selectedCountry}
                onUpdate={(data) => {
                    console.log("Actualizar país:", data);
                    // aquí luego puedes actualizar estado o backend
                }}
            />
        </div>
    );
}