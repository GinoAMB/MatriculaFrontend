import { useState } from "react";

import {
    validateDocumentName,
    normalizeDocumentName,
    DOCUMENT_NAME_MAX_LENGTH,
} from "@/utils/validations/document.validation";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (data: {
        name: string;
    }) => void;

    loading: boolean;
};

export default function CreateDocumentModal({
    isOpen,
    onClose,
    onCreate,
    loading,
}: Props) {

    const [name, setName] = useState("");

    if (!isOpen) return null;

    const error = validateDocumentName(name);

    const handleClose = () => {
        setName("");
        onClose();
    };

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();

        if (error) return;

        onCreate({
            name: normalizeDocumentName(name),
        });

        handleClose();
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-2 sm:p-4">

            <div className="bg-white w-full max-w-md rounded-xl shadow-lg flex flex-col gap-4 max-h-[90vh] overflow-y-auto">

                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-primary">
                        Registrar nuevo tipo de documento
                    </h2>
                </div>

                {/* Form */}
                <div className="px-6 py-2">

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-3"
                    >

                        {/* Nombre */}
                        <div className="flex flex-col">

                            <label className="text-sm font-medium text-gray-700 mb-1">
                                Nombre del tipo de documento
                            </label>

                            <input
                                type="text"
                                placeholder="Ej: Dni, Pasaporte"
                                value={name}
                                onChange={(e) =>
                                    setName(
                                        normalizeDocumentName(
                                            e.target.value
                                        )
                                    )
                                }
                                className={`
                                    bg-gray-100 p-2 rounded text-sm w-full border
                                    ${error && name.length > 0
                                        ? "border-red-500"
                                        : "border-transparent"}
                                `}
                                maxLength={DOCUMENT_NAME_MAX_LENGTH}
                                required
                            />

                            <span className="text-xs text-gray-400 mt-1">
                                ESTE NOMBRE SERÁ USADO EN TODO EL SISTEMA
                            </span>

                            {error && name.length > 0 && (
                                <span className="text-xs text-red-500 mt-1">
                                    {error}
                                </span>
                            )}

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
                                disabled={loading || !!error}
                                className="btn-primary w-full disabled:opacity-50"
                            >
                                {loading ? "Guardando..." : "Guardar Tipo"}
                            </button>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}