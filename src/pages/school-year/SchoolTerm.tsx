import { useState } from "react";
import SchoolTermHeader from "./components/SchoolTermHeader";
import SchoolTermList from "./components/SchoolTermList";
import Pagination from "@/components/Pagination";
import CreateSchoolTermModal from "./modals/CreateSchoolTermModal";
import EditSchoolTermModal from "./modals/EditSchoolTermModal";
import Loader from "@/components/Loader";
import ErrorState from "@/components/ErrorState";

import { usePeriodo } from "@/hooks/school-year/usePeriodo";
import { useCreatePeriodo } from "@/hooks/school-year/useCreatePeriodo";
import { useUpdatePeriodo } from "@/hooks/school-year/useUpdatePeriodo";

import type { SchoolTerm } from "@/type/school-year/periodo.type";

import { showSuccess, showError } from "@/utils/toast";

export default function SchoolTerm() {

    const { periodos, loading, error, cargarPeriodos } = usePeriodo();

    const { crearNuevoPeriodo, loading: creating } = useCreatePeriodo();

    const {
        actualizarPeriodoData,
        loading: updating,
    } = useUpdatePeriodo();

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalPages = Math.ceil(periodos.length / itemsPerPage);

    const paginatedSchoolTerms = periodos.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedSchoolTerm, setSelectedSchoolTerm] = useState<SchoolTerm | null>(null);

    // Crear periodo académico
    const handleCreatePeriodo = async (
        data: {
            anio: number;
            fecha_inicio: string;
            fecha_fin: string;
        }
    ) => {

        try {

            await crearNuevoPeriodo({
                anio: data.anio,
                fechaInicio: data.fecha_inicio,
                fechaFin: data.fecha_fin,
            });

            await cargarPeriodos();

            showSuccess("Periodo académico creado correctamente");

            setIsModalOpen(false);

        } catch (error) {

            if (error instanceof Error) {
                showError(error.message);
            } else {
                showError("Error al crear el periodo académico");
            }
        }
    };

    // Actualizar periodo académico
    const handleUpdatePeriodo = async (data: SchoolTerm) => {

        try {

            await actualizarPeriodoData({
                idPeriodo: data.idPeriodo,
                anio: data.anio,
                fechaInicio: data.fechaInicio,
                fechaFin: data.fechaFin,
            });

            await cargarPeriodos();

            showSuccess("Periodo académico actualizado correctamente");

            setIsEditModalOpen(false);

        } catch (error) {

            if (error instanceof Error) {
                showError(error.message);
            } else {
                showError("Error al actualizar el periodo académico");
            }
        }
    };

    // Error
    if (error) {
        return (
            <ErrorState
                message={error}
                onRetry={cargarPeriodos}
            />
        );
    }

    return (
        <div className="flex flex-col gap-3">
            <SchoolTermHeader
                title="Gestión del Periodo Académico"
                subtitle="Administre los periodos académicos y fechas institucionales."
                onNewSchoolTerm={() => setIsModalOpen(true)}
            />

            {loading ? (
                <Loader />
            ) : (
                <SchoolTermList
                    schoolTerms={paginatedSchoolTerms}
                    onEdit={(schoolTerm) => {
                        setSelectedSchoolTerm(schoolTerm);
                        setIsEditModalOpen(true);
                    }}
                />
            )}

            {!loading && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalItems={periodos.length}
                    itemsPerPage={itemsPerPage}
                    onPageChange={setCurrentPage}
                />
            )}

            <CreateSchoolTermModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onCreate={(data) => handleCreatePeriodo(data)}
                loading={creating}
            />

            <EditSchoolTermModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                schoolTerm={selectedSchoolTerm}
                onUpdate={handleUpdatePeriodo}
                loading={updating}
            />
        </div>
    );
}
