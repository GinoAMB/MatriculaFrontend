import { useState } from "react";
import { IoMdCalendar } from "react-icons/io";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (data: {
        anio: number;
        fecha_inicio: string;
        fecha_fin: string;
    }) => void;
};

export default function CreateSchoolTermModal({ isOpen, onClose, onCreate }: Props) {
    const [anio, setAnio] = useState<number>(new Date().getFullYear());
    const [fechaInicio, setFechaInicio] = useState("");
    const [fechaFin, setFechaFin] = useState("");

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        onCreate({
            anio,
            fecha_inicio: fechaInicio,
            fecha_fin: fechaFin,
        });

        onClose();
        setAnio(new Date().getFullYear());
        setFechaInicio("");
        setFechaFin("");
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
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">

                        {/* Año */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700 mb-1">
                                Año académico
                            </label>

                            <div className="relative">
                                <IoMdCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

                                <input
                                    type="text"
                                    placeholder="Ej: 2025"
                                    onChange={(e) => setAnio(Number(e.target.value))}
                                    className="bg-gray-100 pl-10 pr-2 py-2 rounded text-sm w-full"
                                    required
                                />
                            </div>
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
                                    onChange={(e) => setFechaInicio(e.target.value)}
                                    className="bg-gray-100 p-2 rounded text-sm w-full"
                                    required
                                />
                            </div>

                            {/* Fecha Fin */}
                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-700 mb-1">
                                    Fecha de fin
                                </label>
                                <input
                                    type="date"
                                    value={fechaFin}
                                    onChange={(e) => setFechaFin(e.target.value)}
                                    className="bg-gray-100 p-2 rounded text-sm w-full"
                                    required
                                />
                            </div>

                        </div>

                        {/* Botones */}
                        <div className="flex flex-col sm:flex-row gap-2 py-4 w-full">
                            <button
                                type="button"
                                onClick={onClose}
                                className="btn-secondary w-full"
                            >
                                Cancelar
                            </button>

                            <button
                                type="submit"
                                className="btn-primary w-full text-sm"
                            >
                                Guardar Periodo
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}