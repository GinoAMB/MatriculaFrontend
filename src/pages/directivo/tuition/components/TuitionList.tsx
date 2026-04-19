import { HiOutlineDownload } from "react-icons/hi";
import { HiOutlinePencil } from "react-icons/hi";

type User = {
    id: number;
    name: string;
    nivel: string;
    grado: string;
    seccion: string;
};

type Props = {
    users: User[];
    onEdit: (user: User) => void;
};

export default function TuitionList({ users, onEdit, }: Props) {
    return (
        <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
            {/* 🔹 Header superior */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">

                <h2 className="text-lg font-bold text-primary">
                    Lista de Alumnos
                </h2>

                {/* Derecha */}
                <button className="btn-secondary text-sm flex items-center justify-center gap-2 w-full sm:w-auto">
                    <HiOutlineDownload />
                    Exportar
                </button>
            </div>

            {/* 🔹 Tabla */}
            <table className="w-full text-sm text-left">
                <thead className="bg-gray-100">
                    <tr className="text-gray-500">
                        <th className="py-2 px-3 hidden sm:table-cell">ID</th>
                        <th className="py-2 px-3 pl-3">NOMBRE DEL ALUMNO</th>
                        <th className="py-2 px-3 text-center ">NIVEL</th>
                        <th className="py-2 px-3 text-center hidden sm:table-cell">GRADO</th>
                        <th className="py-2 px-3 text-center hidden sm:table-cell">SECCIÓN</th>
                        <th className="py-2 px-3 text-center">ACCIONES</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td className="py-2 px-3 hidden sm:table-cell text-gray-500"># {user.id}</td>
                            <td className="py-2 px-3 pl-3">
                                <div className="flex flex-col items-start">
                                    <span className="font-medium">{user.name}</span>

                                    <span className="text-xs text-gray-400 sm:hidden">
                                        ID: #{user.id}
                                    </span>
                                </div>
                            </td>
                            <td className="py-2 px-3 text-center">{user.nivel}</td>
                            <td className="py-2 px-3 text-center hidden sm:table-cell">{user.grado}</td>
                            <td className="py-2 px-3 text-center hidden sm:table-cell">{user.seccion}</td>

                            <td className="py-2 px-3">
                                <div className="flex  sm:flex-row justify-center items-center gap-2">
                                    <button
                                        onClick={() => onEdit(user)}
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