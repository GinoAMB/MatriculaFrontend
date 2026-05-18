import { useEffect, useState } from "react";

import CountryHeader from "./components/CountryHeader";
import CountryFilter from "./components/CountryFilters";
import CountryList from "./components/CountryList";
import Pagination from "@/components/Pagination";
import CreateCountryModal from "./modals/CreateCountryModal";
import EditCountryModal from "./modals/EditCountryModal";
import Loader from "@/components/Loader";

import { useCountrys } from "@/hooks/country/useCountrys";
import { useCreateCountry } from "@/hooks/country/useCreateCountry";
import { useUpdateCountry } from "@/hooks/country/useUpdateCountry";

import type { Country } from "@/type/country/country.type";

import { showSuccess, showError } from "@/utils/toast";

export default function Country() {

    const { countrys, error, loading, recargar } = useCountrys();

    const {
        crearPais,
        loading: creatingCountry
    } = useCreateCountry();

    const {
        actualizarPais,
        loading: updatingCountry
    } = useUpdateCountry();

    //  Lista filtrada
    const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

    //  Busqueda
    const [search, setSearch] = useState("");

    //  Paginación
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 10;

    //  Filtrar países
    useEffect(() => {

        const filtered = countrys.filter((country) =>
            country.nombre.toLowerCase().includes(search.toLowerCase())
        );

        setFilteredCountries(filtered);

        setCurrentPage(1);

    }, [search, countrys]);

    const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);

    const paginatedCountries = filteredCountries.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    //  Modal crear
    const [isModalOpen, setIsModalOpen] = useState(false);

    //  Modal editar
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

    const handleEditCountry = (country: Country) => {
        setSelectedCountry(country);
        setIsEditModalOpen(true);
    };

    //  Crear país
    const handleCreateCountry = async (data: { name: string }) => {

        try {

            const response = await crearPais({
                nombre: data.name,
            });

            if (response) {

                await recargar();

                showSuccess("País creado correctamente");

                setIsModalOpen(false);
            }

        } catch (error) {

            showError("Error al crear el país");
        }
    };

    const handleUpdateCountry = async (data: Country) => {

        try {

            const response = await actualizarPais({
                idPais: data.idPais,
                nombre: data.nombre,
            });

            if (response) {

                await recargar();

                showSuccess("País actualizado correctamente");

                setIsEditModalOpen(false);
                setSelectedCountry(null);
            }

        } catch (error) {

            showError("Error al actualizar el país");
        }
    };

    //  Error
    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="flex flex-col gap-3">

            <CountryHeader
                title="Gestión de Países"
                subtitle="Administre el catálogo de países habilitados para el registro de estudiantes y personal del sistema."
                onNewCountry={() => setIsModalOpen(true)}
            />

            <CountryFilter
                onSearch={(query) => setSearch(query)}
            />

            {loading ? (
                <Loader />
            ) : (
                <CountryList
                    countries={paginatedCountries}
                    onEdit={handleEditCountry}
                />
            )}

            {!loading && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalItems={filteredCountries.length}
                    itemsPerPage={itemsPerPage}
                    onPageChange={setCurrentPage}
                />
            )}

            <CreateCountryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onCreate={handleCreateCountry}
                loading={creatingCountry}
            />

            <EditCountryModal
                isOpen={isEditModalOpen}
                onClose={() => {
                    setIsEditModalOpen(false);
                    setSelectedCountry(null);
                }}
                country={selectedCountry}
                onUpdate={handleUpdateCountry}
                loading={updatingCountry}
            />

        </div>
    );
}