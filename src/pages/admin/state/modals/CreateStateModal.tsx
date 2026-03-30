import { useState } from "react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (data: {
        name: string;
    }) => void;
};

export default function CreateStateModal({ isOpen, onClose, onCreate }: Props) {
    const [name, setName] = useState("");

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        onCreate({ name });
        onClose();
        setName("");
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-2 sm:p-4">
            <div className="bg-white w-full max-w-md rounded-xl shadow-lg flex flex-col gap-4 max-h-[90vh] overflow-y-auto">

                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-primary">
                        Registrar nuevo estado
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
                                placeholder="Ej: Matriculado"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="bg-gray-100 p-2 rounded text-sm w-full"
                                required
                            />
                            <span className="text-xs text-gray-400 mt-1">
                                DEFINE LA ETAPA DEL PROCESO DE MATRÍCULA
                            </span>
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
                                Guardar Estado
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}