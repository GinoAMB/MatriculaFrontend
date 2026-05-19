import { useState } from "react";
import ReligionHeader from "./components/ReligionHeader";
import ReligionList from "./components/ReligionList";
import Pagination from "@/components/Pagination";
import CreateReligionModal from "./modals/CreateReligionModal";
import EditReligionModal from "./modals/EditReligionModal";
import Loader from "@/components/Loader";

import { useReligion } from "@/hooks/religion/useReligion";
import { useCreateReligion } from "@/hooks/religion/useCreateReligion";
import { useUpdateReligion } from "@/hooks/religion/useUpdateReligion";

import type { Religion } from "@/type/religion/religion.type";

import { showSuccess, showError } from "@/utils/toast";

export default function Religion() {

    const { religions, error, loading, recargar } = useReligion();

    const {
        crearNuevaReligion,
        loading: creatingReligion
    } = useCreateReligion();

    const {
        actualizarReligionData,
        loading: updatingReligion
    } = useUpdateReligion();

    // Paginación
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 10;

    const totalPages = Math.ceil(religions.length / itemsPerPage);

    const paginatedReligions = religions.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Modal crear
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Modal editar
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const [selectedReligion, setSelectedReligion] = useState<Religion | null>(null);

    const handleEditReligion = (religion: Religion) => {
        setSelectedReligion(religion);
        setIsEditModalOpen(true);
    };

    // Crear religión
    const handleCreateReligion = async (data: { name: string }) => {

        try {

            const response = await crearNuevaReligion({
                nombre: data.name,
            });

            if (response) {

                await recargar();

                showSuccess("Religión creada correctamente");

                setIsModalOpen(false);
            }

        } catch (error) {

            showError("Error al crear la religión");
        }
    };

    // Actualizar religión
    const handleUpdateReligion = async (data: Religion) => {

        try {

            const response = await actualizarReligionData({
                idReligion: data.idReligion,
                nombre: data.nombre,
            });

            if (response) {

                await recargar();

                showSuccess("Religión actualizada correctamente");

                setIsEditModalOpen(false);

                setSelectedReligion(null);
            }

        } catch (error) {

            showError("Error al actualizar la religión");
        }
    };

    // Error
    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="flex flex-col gap-3">

            <ReligionHeader
                title="Gestión de Religiones"
                subtitle="Administra el catalogo oficial de creencias religiosas para el registro de estudiantes."
                onNewReligion={() => setIsModalOpen(true)}
            />

            {loading ? (
                <Loader />
            ) : (
                <ReligionList
                    religion={paginatedReligions}
                    onEdit={handleEditReligion}
                />
            )}

            {!loading && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalItems={religions.length}
                    itemsPerPage={itemsPerPage}
                    onPageChange={setCurrentPage}
                />
            )}

            <CreateReligionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onCreate={handleCreateReligion}
                loading={creatingReligion}
            />

            <EditReligionModal
                isOpen={isEditModalOpen}
                onClose={() => {
                    setIsEditModalOpen(false);
                    setSelectedReligion(null);
                }}
                religion={selectedReligion}
                onUpdate={handleUpdateReligion}
                loading={updatingReligion}
            />

        </div>
    );
}