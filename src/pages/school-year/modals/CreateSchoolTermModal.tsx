import { useState } from "react";
import { IoMdCalendar } from "react-icons/io";

import {
    validateSchoolTermYear,
    validateSchoolTermStartDate,
    validateSchoolTermEndDate,
    SCHOOL_TERM_YEAR_MAX,
} from "@/utils/validations/school-term.validation";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (data: {
        anio: number;
        fecha_inicio: string;
        fecha_fin: string;
    }) => void;
    loading: boolean;
};

export default function CreateSchoolTermModal({
    isOpen,
    onClose,
    onCreate,
    loading,
}: Props) {

    const [anio, setAnio] = useState<number>(new Date().getFullYear());
    const [fechaInicio, setFechaInicio] = useState("");
    const [fechaFin, setFechaFin] = useState("");

    if (!isOpen) return null;

    const yearError = validateSchoolTermYear(anio);

    const startDateError =
        validateSchoolTermStartDate(fechaInicio);

    const endDateError =
        validateSchoolTermEndDate(
            fechaInicio,
            fechaFin
        );

    const handleClose = () => {

        setAnio(new Date().getFullYear());
        setFechaInicio("");
        setFechaFin("");

        onClose();
    };

    const handleSubmit = async (
        e: React.FormEvent
    ) => {

        e.preventDefault();

        if (
            yearError ||
            startDateError ||
            endDateError
        ) {
            return;
        }

        await onCreate({
            anio,
            fecha_inicio: fechaInicio,
            fecha_fin: fechaFin,
        });
    };

    return (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-2 sm:p-4">

            <div className="bg-white w-full max-w-md rounded-xl shadow-lg flex flex-col gap-4 max-h-[90vh] overflow-y-auto">

                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-primary">
                        Registrar nuevo periodo académico
                    </h2>
                </div>

                {/* Form */}
                <div className="px-6 py-2">

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-3"
                    >

                        {/* Año */}
                        <div className="flex flex-col">

                            <label className="text-sm font-medium text-gray-700 mb-1">
                                Año académico
                            </label>

                            <div className="relative">

                                <IoMdCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

                                <input
                                    type="number"
                                    placeholder="Ej: 2025"
                                    onChange={(e) =>
                                        setAnio(
                                            Number(e.target.value)
                                        )
                                    }
                                    className={`
                                        bg-gray-100 pl-10 pr-2 py-2 rounded text-sm w-full border
                                        ${yearError
                                            ? "border-red-500"
                                            : "border-transparent"}
                                    `}
                                    max={SCHOOL_TERM_YEAR_MAX}
                                    required
                                />

                            </div>

                            {yearError && (
                                <span className="text-xs text-red-500 mt-1">
                                    {yearError}
                                </span>
                            )}

                        </div>

                        {/* Fechas */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                            {/* Fecha Inicio */}
                            <div className="flex flex-col">

                                <label className="text-sm font-medium text-gray-700 mb-1">
                                    Fecha de inicio
                                </label>

                                <input
                                    type="date"
                                    value={fechaInicio}
                                    onChange={(e) =>
                                        setFechaInicio(
                                            e.target.value
                                        )
                                    }
                                    className={`
                                        bg-gray-100 p-2 rounded text-sm w-full border
                                        ${startDateError
                                            ? "border-red-500"
                                            : "border-transparent"}
                                    `}
                                    required
                                />

                                {startDateError && (
                                    <span className="text-xs text-red-500 mt-1">
                                        {startDateError}
                                    </span>
                                )}

                            </div>

                            {/* Fecha Fin */}
                            <div className="flex flex-col">

                                <label className="text-sm font-medium text-gray-700 mb-1">
                                    Fecha de fin
                                </label>

                                <input
                                    type="date"
                                    value={fechaFin}
                                    onChange={(e) =>
                                        setFechaFin(
                                            e.target.value
                                        )
                                    }
                                    className={`
                                        bg-gray-100 p-2 rounded text-sm w-full border
                                        ${endDateError
                                            ? "border-red-500"
                                            : "border-transparent"}
                                    `}
                                    required
                                />

                                {endDateError && (
                                    <span className="text-xs text-red-500 mt-1">
                                        {endDateError}
                                    </span>
                                )}

                            </div>

                        </div>

                        {/* Botones */}
                        <div className="flex flex-col sm:flex-row gap-2 py-4 w-full">

                            <button
                                type="button"
                                onClick={handleClose}
                                disabled={loading}
                                className="btn-secondary w-full disabled:opacity-50"
                            >
                                Cancelar
                            </button>

                            <button
                                type="submit"
                                disabled={
                                    loading ||
                                    !!yearError ||
                                    !!startDateError ||
                                    !!endDateError
                                }
                                className="btn-primary w-full text-sm disabled:opacity-50"
                            >
                                {loading
                                    ? "Guardando..."
                                    : "Guardar Periodo"}
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}