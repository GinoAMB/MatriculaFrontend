import { HiOutlineX } from "react-icons/hi";
import { FaClipboardUser } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";

import Loader from "@/components/Loader";
import type { MatriculaDetalle } from "@/type/tuition/tuition.type";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import MatriculaPrint from "../components/MatriculaPrint";
import CompromisoPrint from "../components/CompromisoPrint";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    matricula: MatriculaDetalle | null;
    loading: boolean;
    error: string | null;
};

export default function DetailModal({
    isOpen,
    onClose,
    matricula,
    loading,
    error,
}: Props) {

    const printRef = useRef<HTMLDivElement>(null);
    const compromisoRef = useRef<HTMLDivElement>(null);

    const handlePrint = useReactToPrint({
        contentRef: printRef,
        documentTitle: `Ficha-${matricula?.nombre}`,
    });

    const handlePrintCompromiso = useReactToPrint({
        contentRef: compromisoRef,
        documentTitle: `Compromiso-${matricula?.nombre}`,
    });

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-2 sm:p-4">

            <div className="bg-white rounded-2xl shadow-xl w-full max-w-6xl h-[95vh] sm:max-h-[90vh] overflow-hidden overflow-x-hidden flex flex-col">

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4 sm:px-6 py-4 sticky top-0 bg-white z-10 border-b border-gray-100">

                    <div className="flex items-start sm:items-center gap-3 min-w-0">

                        <div className="p-3 bg-primary/20 rounded-xl shrink-0">
                            <FaClipboardUser
                                className="text-primary"
                                size={24}
                            />
                        </div>

                        <div className="min-w-0">
                            <h2 className="text-lg sm:text-xl font-bold text-primary">
                                Detalle de Matrícula
                            </h2>

                            {matricula && (
                                <p className="text-sm sm:text-lg text-gray-600 break-words">
                                    {matricula.apellidos} {matricula.nombre}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">

                        <div className="text-xs sm:text-sm text-primary border border-gray-300 rounded-full px-3 py-1 whitespace-nowrap">
                            {matricula && (
                                <p>
                                    {matricula.estado}
                                </p>
                            )}
                        </div>

                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition shrink-0"
                        >
                            <HiOutlineX size={20} />
                        </button>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto cont-scroll">

                    {/* Loading */}
                    {loading && (
                        <Loader />
                    )}

                    {/* Error */}
                    {error && (
                        <div className="p-10 text-center text-red-500">
                            {error}
                        </div>
                    )}

                    {/* Sin data */}
                    {!loading && !error && !matricula && (
                        <div className="p-10 text-center text-gray-500">
                            No se encontró información.
                        </div>
                    )}

                    {/* Content */}
                    {!loading && !error && matricula && (

                        <div className="p-4 sm:p-6 flex flex-col gap-6">

                            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

                                {/* Datos del alumno */}
                                <section className="xl:col-span-2">

                                    <h3 className="text-sm sm:text-base font-semibold mb-4 text-primary flex items-center gap-2">
                                        <FaRegUser />
                                        DATOS DEL ALUMNO
                                    </h3>

                                    <div className="flex flex-col gap-4">

                                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

                                            <Item
                                                label="Alumno"
                                                value={`${matricula.nombre} ${matricula.apellidos}`}
                                            />

                                            <Item
                                                label="Documento"
                                                value={`${matricula.tipoDocumento || "-"} - ${matricula.numeroDocumento}`}
                                            />

                                            <Item
                                                label="Fecha de nacimiento"
                                                value={matricula.fechaNacimiento}
                                            />

                                            <Item
                                                label="Dirección"
                                                value={matricula.direccion}
                                            />

                                            <Item
                                                label="Religión"
                                                value={matricula.religion || "-"}
                                            />

                                            <Item
                                                label="País"
                                                value={matricula.pais || "-"}
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                            <Item
                                                label="Viene de otra institución"
                                                value={
                                                    matricula.vieneDeOtraInstitucion
                                                        ? "Sí"
                                                        : "No"
                                                }
                                            />

                                            <Item
                                                label="Institución procedencia"
                                                value={
                                                    matricula.nombreInstitucionProcedencia || "-"
                                                }
                                            />

                                            <Item
                                                label="Tiene discapacidad"
                                                value={
                                                    matricula.tieneDiscapacidad
                                                        ? "Sí"
                                                        : "No"
                                                }
                                            />

                                            <Item
                                                label="Descripción discapacidad"
                                                value={
                                                    matricula.descripcionDiscapacidad || "-"
                                                }
                                            />
                                        </div>

                                    </div>
                                </section>

                                {/* Información académica */}
                                <section className="bg-primary text-white rounded-2xl p-5 sm:p-6 shadow-md h-fit">

                                    <h3 className="text-sm sm:text-base font-bold mb-4">
                                        INFORMACIÓN ACADÉMICA
                                    </h3>

                                    <div className="flex flex-col gap-5">

                                        <div>
                                            <p className="text-xs sm:text-sm text-white/70 uppercase tracking-wide">
                                                Nivel Educativo
                                            </p>

                                            <p className="text-sm sm:text-base font-semibold break-words">
                                                {matricula.nivel}
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">

                                            <div>
                                                <p className="text-xs sm:text-sm text-white/70 uppercase tracking-wide">
                                                    Grado
                                                </p>

                                                <p className="text-sm sm:text-base font-semibold">
                                                    {matricula.grado}
                                                </p>
                                            </div>

                                            <div>
                                                <p className="text-xs sm:text-sm text-white/70 uppercase tracking-wide">
                                                    Sección
                                                </p>

                                                <p className="text-sm sm:text-base font-semibold">
                                                    "{matricula.seccion}"
                                                </p>
                                            </div>
                                        </div>

                                        <div>
                                            <p className="text-xs sm:text-sm text-white/70 uppercase tracking-wide">
                                                Año Escolar
                                            </p>

                                            <p className="text-sm sm:text-base font-semibold">
                                                {matricula.periodo}
                                            </p>
                                        </div>

                                    </div>
                                </section>
                            </div>

                            {/* Familiares */}
                            <section>

                                <h3 className="text-sm sm:text-base font-semibold mb-4 text-primary flex items-center gap-2">
                                    <MdFamilyRestroom />
                                    DATOS FAMILIARES
                                </h3>

                                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">

                                    {matricula.familiares.map((familiar) => (

                                        <div
                                            key={familiar.idRelacion}
                                            className="rounded-xl p-4 border border-gray-100"
                                        >

                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">

                                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 min-w-0">

                                                    <h4 className="font-semibold text-primary break-words">
                                                        {familiar.nombre} {familiar.apellidos}
                                                    </h4>

                                                    <p className="text-sm text-gray-500">
                                                        {familiar.tipoRelacion}
                                                    </p>
                                                </div>

                                                {familiar.esApoderado && (
                                                    <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full font-medium w-fit">
                                                        Apoderado
                                                    </span>
                                                )}
                                            </div>

                                            <div className="grid gap-3 text-sm">

                                                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 pb-1">

                                                    <span className="font-medium text-gray-500">
                                                        DOCUMENTO
                                                    </span>

                                                    <span className="sm:text-right break-words">
                                                        {`${familiar.tipoDocumento || "-"} - ${familiar.numeroDocumento}`}
                                                    </span>
                                                </div>

                                                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 pb-1">

                                                    <span className="font-medium text-gray-500">
                                                        CELULAR
                                                    </span>

                                                    <span className="sm:text-right break-words">
                                                        {familiar.celular}
                                                    </span>
                                                </div>

                                                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 pb-1">

                                                    <span className="font-medium text-gray-500">
                                                        DIRECCIÓN
                                                    </span>

                                                    <span className="sm:text-right break-words">
                                                        {familiar.direccion}
                                                    </span>
                                                </div>

                                                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 pb-1">

                                                    <span className="font-medium text-gray-500">
                                                        FALLECIDO
                                                    </span>

                                                    <span className="sm:text-right">
                                                        {familiar.esFallecido ? "Sí" : "No"}
                                                    </span>
                                                </div>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Botones imprimir */}
                            <div className="flex flex-col sm:flex-row sm:justify-end gap-3 pt-2">

                                <button
                                    onClick={handlePrint}
                                    className="btn-primary w-full sm:w-auto"
                                >
                                    Imprimir ficha
                                </button>

                                <button
                                    onClick={handlePrintCompromiso}
                                    className="btn-tertiary w-full sm:w-auto"
                                >
                                    Imprimir compromiso
                                </button>

                                <div className="hidden">

                                    <div ref={printRef}>
                                        {matricula && (
                                            <MatriculaPrint matricula={matricula} />
                                        )}
                                    </div>

                                    <div ref={compromisoRef}>
                                        {matricula && (
                                            <CompromisoPrint matricula={matricula} />
                                        )}
                                    </div>

                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

type ItemProps = {
    label: string;
    value: string;
};

function Item({ label, value }: ItemProps) {

    return (
        <div className="flex flex-col min-w-0">

            <span className="text-xs sm:text-sm text-gray-500">
                {label}
            </span>

            <span className="font-medium break-words text-sm sm:text-base">
                {value}
            </span>
        </div>
    );
}