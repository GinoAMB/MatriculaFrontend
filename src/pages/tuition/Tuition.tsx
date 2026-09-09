import { useState, useCallback, useRef } from "react";
import { useReactToPrint } from "react-to-print";

import TuitionHeader from "./components/TuitionHeader";
import TuitionFilters from "./components/TuitionFilters";
import TuitionList from "./components/TuitionList";
import AlumnosPrint from "./components/AlumnosPrint";
import TuitionForm from "./components/multiStep/TuitionForm";

import DetailModal from "./modals/DetailModal";

import Pagination from "@/components/Pagination";
import Loader from "@/components/Loader";
import ErrorState from "@/components/ErrorState";

import { useAcademic } from "@/hooks/academic/useAcacemic";
import { useTuitions } from "@/hooks/tuition/useTuition";
import { useMatriculaDetalle } from "@/hooks/tuition/useMatriculaDetalle";
import { useAlumnosPrint } from "@/hooks/tuition/useAlumnosPrint";
import { useDocument } from "@/hooks/document/useDocument";
import { useCountrys } from "@/hooks/country/useCountrys";
import { useReligion } from "@/hooks/religion/useReligion";

import type { TuitionFiltros } from "@/type/tuition/tuition.type";

export default function Tuition() {

    const [showForm, setShowForm] = useState(false);

    const [openDetail, setOpenDetail] = useState(false);

    const [selectedId, setSelectedId] = useState<number | null>(null);

    const printRef = useRef<HTMLDivElement>(null);

    const handlePrint = useReactToPrint({
        contentRef: printRef,
        documentTitle: "Listado-Alumnos",
    });

    const {
        niveles,
        loading: loadingAcademic,
        error: errorAcademic,
    } = useAcademic();



    const [filters, setFilters] = useState<TuitionFiltros>({
        page: 0,
        size: 10,
    });

    const {
        tuitions,
        loading,
        error: errorTuitions,
        totalPages,
        totalElements,
        recargar
    } = useTuitions(filters);

    const {
        alumnos,
        loading: loadingPrint,
        error: errorPrint,
        recargar: recargarPrint
    } = useAlumnosPrint({
        nivel: filters.nivel,
        grado: filters.grado,
        seccion: filters.seccion,
    });

    // Hook detalle
    const {
        matricula,
        loading: loadingDetail,
        error: errorDetail,
    } = useMatriculaDetalle(selectedId || undefined);

    const { documents, error: errorDocument, loading: loadingDocument } = useDocument();

    const { countrys, error: errorCountry, loading: loadingCountry } = useCountrys();

    const { religions, error: errorReligion, loading: loadingReligion } = useReligion();

    const handleSearch = useCallback((data: {
        search: string;
        level: string;
        grade: string;
        section: string;
    }) => {

        setFilters((prev) => ({
            ...prev,
            page: 0,
            search: data.search.trim() || undefined,
            nivel: data.level || undefined,
            grado: data.grade || undefined,
            seccion: data.section || undefined,
        }));

    }, []);

    const handlePageChange = (page: number) => {

        setFilters((prev) => ({
            ...prev,
            page: page - 1,
        }));
    };

    const handleExport = async () => {

        if (loadingPrint) return;

        if (errorPrint) {
            recargarPrint();
            return;
        }

        handlePrint();
    };

    const hasFilters = Boolean(
        filters.search?.trim() ||
        filters.nivel ||
        filters.grado ||
        filters.seccion
    );

    // Error
    if (errorTuitions) {

        return (
            <ErrorState
                message={errorTuitions}
                onRetry={recargar}
            />
        );
    }

    if (showForm) {
        return (
            <TuitionForm
                onBack={() => setShowForm(false)}
                niveles={niveles}
                loadingNiveles={loadingAcademic}
                errorNiveles={errorAcademic}

                documents={documents}
                loadingDocuments={loadingDocument}
                errorDocuments={errorDocument}

                countrys={countrys}
                loadingCountrys={loadingCountry}
                errorCountrys={errorCountry}

                religion={religions}
                loadingReligion={loadingReligion}
                errorReligion={errorReligion}
            />
        );
    }

    return (
        <div className="flex flex-col gap-4">

            <TuitionHeader
                title="Gestión de Matrículas"
                subtitle="Control académico y administrativo del alumnado"
                onNewTuition={() => setShowForm(true)}
            />

            <TuitionFilters
                niveles={niveles}
                loading={loadingAcademic}
                error={errorAcademic}
                onSearch={handleSearch}
            />

            {loading ? (
                <Loader />
            ) : (
                <TuitionList
                    users={tuitions}
                    isSearching={hasFilters}
                    onView={(tuition) => {

                        setSelectedId(tuition.idMatricula);

                        setOpenDetail(true);
                    }}

                    onEdit={(tuition) => {
                        console.log("Editar", tuition);
                    }}

                    onExport={handleExport}
                />
            )}

            <Pagination
                currentPage={(filters.page || 0) + 1}
                totalPages={totalPages}
                totalItems={totalElements}
                itemsPerPage={filters.size || 10}
                onPageChange={handlePageChange}
            />



            <DetailModal
                isOpen={openDetail}

                onClose={() => {

                    setOpenDetail(false);

                    setSelectedId(null);
                }}

                matricula={matricula}

                loading={loadingDetail}

                error={errorDetail}
            />
            <div className="hidden">
                <div ref={printRef}>
                    <AlumnosPrint alumnos={alumnos} />
                </div>
            </div>

        </div>
    );
}