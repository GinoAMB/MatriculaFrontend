import { useEffect, useState } from "react";
import { AiFillExclamationCircle } from "react-icons/ai";

import type { Religion } from "@/type/religion/religion.type";

import {
    validateReligionName,
    normalizeReligionName,
    RELIGION_NAME_MAX_LENGTH,
} from "@/utils/validations/religion.validation";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    religion: Religion | null;
    onUpdate: (data: Religion) => void;
    loading: boolean;
};

export default function EditReligionModal({
    isOpen,
    onClose,
    religion,
    onUpdate,
    loading,
}: Props) {

    const [name, setName] = useState("");

    useEffect(() => {
        if (religion) {
            setName(religion.nombre);
        }
    }, [religion]);

    if (!isOpen || !religion) return null;

    const error = validateReligionName(name);

    const handleClose = () => {
        setName("");
        onClose();
    };

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();

        if (error) return;

        onUpdate({
            idReligion: religion.idReligion,
            nombre: normalizeReligionName(name),
        });

        handleClose();
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-2 sm:p-4">

            <div className="bg-white w-full max-w-md rounded-xl shadow-lg flex flex-col gap-4 max-h-[90vh] overflow-y-auto">

                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-primary">
                        Editar religión
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
                                Nombre de la religión
                            </label>

                            <input
                                type="text"
                                value={name}
                                onChange={(e) =>
                                    setName(
                                        normalizeReligionName(
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
                                maxLength={RELIGION_NAME_MAX_LENGTH}
                                required
                            />

                            <span className="text-xs text-gray-400 mt-1">
                                Puedes modificar el nombre de la religión
                            </span>

                            {error && name.length > 0 && (
                                <span className="text-xs text-red-500 mt-1">
                                    {error}
                                </span>
                            )}

                            {/* Impacto */}
                            <div className="bg-gray-100 rounded-lg p-3 mt-2 flex items-start gap-2">

                                <AiFillExclamationCircle className="text-2xl text-primary" />

                                <div className="flex flex-col text-primary">

                                    <p className="text-xs font-semibold mb-1">
                                        IMPACTO DEL CAMBIO
                                    </p>

                                    <p className="text-xs text-gray-500">
                                        Al actualizar este nombre, se reflejará
                                        en todos los registros donde se utilice
                                        esta religión.
                                    </p>

                                </div>

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
                                disabled={loading || !!error}
                                className="btn-primary w-full disabled:opacity-50"
                            >
                                {loading
                                    ? "Actualizando..."
                                    : "Actualizar Cambios"}
                            </button>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}