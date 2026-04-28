import { useEffect, useState } from "react";
import { AiFillExclamationCircle } from "react-icons/ai";

type Status = {
    id: number;
    name: string;
};

type Props = {
    isOpen: boolean;
    onClose: () => void;
    status: Status | null;
    onUpdate: (data: Status) => void;
};

export default function EditStateModal({
    isOpen,
    onClose,
    status,
    onUpdate,
}: Props) {
    const [name, setName] = useState("");

    useEffect(() => {
        if (status) {
            setName(status.name);
        }
    }, [status]);

    if (!isOpen || !status) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        onUpdate({
            id: status.id,
            name,
        });

        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-2 sm:p-4">
            <div className="bg-white w-full max-w-md rounded-xl shadow-lg flex flex-col gap-4 max-h-[90vh] overflow-y-auto">

                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-primary">
                        Editar estado
                    </h2>
                </div>

                {/* Form */}
                <div className="px-6 py-2">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">

                        {/* Nombre */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700 mb-1">
                                Nombre del estado
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="bg-gray-100 p-2 rounded text-sm w-full"
                                required
                            />
                            <span className="text-xs text-gray-400 mt-1">
                                Puedes modificar el nombre del estado
                            </span>

                            <div className="bg-gray-100 rounded-lg p-3 mt-2 flex items-start gap-2">
                                <AiFillExclamationCircle className="text-2xl text-primary" />
                                <div className="flex flex-col text-primary">
                                    <p className="text-xs font-semibold mb-1">
                                        IMPACTO DEL CAMBIO
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        Al actualizar este estado, se reflejará en todos los registros de matrícula asociados.
                                    </p>
                                </div>
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
                                className="btn-primary w-full"
                            >
                                Actualizar Cambios
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}