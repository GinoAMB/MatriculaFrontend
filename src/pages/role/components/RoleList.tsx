import { HiOutlinePencil } from "react-icons/hi";

import type { Role } from "@/type/role/rol.type";

type Props = {
    role: Role[];
    onEdit: (role: Role) => void;
};

export default function RoleList({ role, onEdit }: Props) {
    return (
        <div className="bg-white rounded-xl shadow overflow-x-auto">
            {/* 🔹 Tabla */}
            <table className="w-full text-sm text-left">
                <thead className="bg-gray-100">
                    <tr className="text-gray-500">
                        <th className="py-2 hidden sm:table-cell px-5">ID</th>
                        <th className="py-2 px-5">NOMBRE DEL ROL</th>
                        <th className="py-2 text-center">ACCIONES</th>
                    </tr>
                </thead>

                <tbody>
                    {role.map((role) => (
                        <tr key={role.idRol}>
                            <td className="px-5 text-xs text-gray-400 hidden sm:table-cell"># {role.idRol}</td>
                            <td className="px-5 ">
                                <div className="flex flex-col">
                                    <span>{role.nombre}</span>

                                    {/* ID solo en móvil */}
                                    <span className="text-xs text-gray-400 sm:hidden">
                                        #{role.idRol}
                                    </span>
                                </div>
                            </td>
                            <td className="py-2">
                                <div className="flex sm:flex-row justify-center items-center gap-2">
                                    <button
                                        onClick={() => onEdit(role)}
                                        className="p-2 text-primary border border-transparent hover:bg-blue-50 hover:border-blue-500 rounded-full cursor-pointer"                                    >
                                        <HiOutlinePencil size={16} />
                                    </button>

                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}