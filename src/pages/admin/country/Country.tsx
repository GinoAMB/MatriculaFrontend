import CountryHeader from "./components/CountryHeader";
import CountryFilter from "./components/CountryFilters";
import CountryList from "./components/CountryList";
import Pagination from "@/components/Pagination";
import { useState } from "react";

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


    return (
        <div className="flex flex-col gap-3">
            <CountryHeader
                title="Gestión de Países"
                subtitle="Administre el catálogo de países habilitados para el registro de estudiantes y personal del sistema."
                onNewCountry={() => {
                    // Aquí puedes abrir un modal o redirigir a una página de creación de país
                    alert("Función para crear un nuevo país");
                }}
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
                    // Aquí puedes abrir un modal o redirigir a una página de edición de país
                    alert(`Función para editar el país: ${country.name}`);
                }}
            />

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={countries.length}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}