import {
    HiOutlineDownload,
    HiOutlinePencil,
    HiOutlineEye
} from "react-icons/hi";

import EmptyState from "@/components/EmptyState";

import type { Tuition } from "@/type/tuition/tuition.type";

type Props = {
    users: Tuition[];
    isSearching?: boolean;

    onEdit: (user: Tuition) => void;
    onView: (user: Tuition) => void;
    onExport: () => void;
};

export default function TuitionList({
    users,
    isSearching = false,
    onEdit,
    onView,
    onExport
}: Props) {

    return (
        <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">

            {/* Header superior */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">

                <h2 className="text-lg font-bold text-primary">
                    Lista de Alumnos
                </h2>

                <button
                    onClick={onExport}
                    className="btn-secondary text-sm flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                    <HiOutlineDownload />
                    Exportar
                </button>

            </div>

            {/* Tabla */}
            <table className="w-full text-sm text-left">

                <thead className="bg-gray-100">
                    <tr className="text-gray-500">

                        <th className="py-2 px-2 hidden sm:table-cell">
                            ID
                        </th>

                        <th className="py-2 px-2 pl-3">
                            ALUMNO
                        </th>

                        <th className="py-2 px-2 pl-3 hidden sm:table-cell">
                            # DOCUMENTO
                        </th>

                        <th className="py-2 px-2 text-center hidden sm:table-cell">
                            NIVEL
                        </th>

                        <th className="py-2 px-2 text-center hidden sm:table-cell">
                            GRADO
                        </th>

                        <th className="py-2 px-2 text-center hidden sm:table-cell">
                            SECCIÓN
                        </th>

                        <th className="py-2 px-2 text-center">
                            ACCIONES
                        </th>

                    </tr>
                </thead>

                <tbody>

                    {users.length === 0 ? (

                        <tr>
                            <td colSpan={7}>

                                <EmptyState
                                    type={isSearching ? "search" : "empty"}
                                />

                            </td>
                        </tr>

                    ) : (

                        users.map((user) => (

                            <tr key={user.idMatricula}>

                                <td className="py-2 px-2 hidden sm:table-cell text-gray-500">
                                    # {user.idMatricula}
                                </td>

                                <td className="py-2 px-2 pl-3">

                                    <div className="flex flex-col items-start">

                                        <span className="font-medium">
                                            {user.nombre} {user.apellidos}
                                        </span>

                                        <span className="text-xs text-gray-400 sm:hidden">
                                            ID: #{user.idMatricula} - {user.tipoDocumento}: {user.numeroDocumento}
                                        </span>

                                    </div>

                                </td>

                                <td className="py-2 px-2 pl-3 hidden sm:table-cell">
                                    {user.tipoDocumento}: {user.numeroDocumento}
                                </td>

                                <td className="py-2 px-2 text-center hidden sm:table-cell">
                                    {user.nivel}
                                </td>

                                <td className="py-2 px-2 text-center hidden sm:table-cell">
                                    {user.grado}
                                </td>

                                <td className="py-2 px-2 text-center hidden sm:table-cell">
                                    {user.seccion}
                                </td>

                                <td className="py-2 px-2">

                                    <div className="flex sm:flex-row justify-center items-center gap-2">

                                        <button
                                            onClick={() => onView(user)}
                                            className="p-2 text-gray-600 border border-transparent hover:bg-gray-100 hover:border-gray-400 rounded-full cursor-pointer"
                                        >
                                            <HiOutlineEye size={16} />
                                        </button>

                                        <button
                                            onClick={() => onEdit(user)}
                                            className="p-2 text-primary border border-transparent hover:bg-blue-50 hover:border-blue-500 rounded-full cursor-pointer"
                                        >
                                            <HiOutlinePencil size={16} />
                                        </button>

                                    </div>

                                </td>

                            </tr>
                        ))
                    )}

                </tbody>

            </table>

        </div>
    );
}