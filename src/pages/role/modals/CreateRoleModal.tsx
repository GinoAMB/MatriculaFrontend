import { useState } from "react";

import {
    validateRoleName,
    normalizeRoleName,
} from "@/utils/validations/role.validation";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (data: {
        name: string;
    }) => void;
    loading: boolean;
};

export default function CreateRoleModal({
    isOpen,
    onClose,
    onCreate,
    loading
}: Props) {

    const [name, setName] = useState("");

    if (!isOpen) return null;

    const error = validateRoleName(name);

    const handleClose = () => {
        setName("");
        onClose();
    };

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();

        if (error) return;

        onCreate({
            name: normalizeRoleName(name),
        });

        handleClose();
    };

    

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-2 sm:p-4">

            <div className="bg-white w-full max-w-md rounded-xl shadow-lg flex flex-col gap-4 max-h-[90vh] overflow-y-auto">

                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-primary">
                        Registrar nuevo rol
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
                                Nombre del rol
                            </label>

                            <input
                                type="text"
                                placeholder="Ej: ADMIN"
                                value={name}
                                onChange={(e) =>
                                    setName(
                                        normalizeRoleName(e.target.value)
                                    )
                                }
                                className={`
                                    bg-gray-100 p-2 rounded text-sm w-full uppercase border
                                    ${error && name.length > 0
                                        ? "border-red-500"
                                        : "border-transparent"}
                                `}
                                maxLength={50}
                                required
                            />

                            <span className="text-xs text-gray-400 mt-1">
                                IDENTIFICADOR ÚNICO PARA PERMISOS
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
                                {loading ? "Guardando..." : "Guardar Rol"}
                            </button>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}