import { HiOutlinePencil } from "react-icons/hi";

type Status = {
    id: number;
    name: string;
};

type Props = {
    status: Status[];
    onEdit: (status: Status) => void;
};

export default function StatusList({ status, onEdit }: Props) {
    return (
        <div className="bg-white rounded-xl shadow overflow-x-auto">
            {/* 🔹 Tabla */}
            <table className="w-full text-sm text-left">
                <thead className="bg-gray-100">
                    <tr className="text-gray-500">
                        <th className="py-2 hidden sm:table-cell px-5">ID</th>
                        <th className="py-2 px-5">NOMBRE DEL ESTADO</th>
                        <th className="py-2 text-center">ACCIONES</th>
                    </tr>
                </thead>

                <tbody>
                    {status.map((status) => (
                        <tr key={status.id}>
                            <td className="px-5 text-xs text-gray-400 hidden sm:table-cell"># {status.id}</td>
                            <td className="px-5 ">
                                <div className="flex flex-col">
                                    <span>{status.name}</span>

                                    {/* ID solo en móvil */}
                                    <span className="text-xs text-gray-400 sm:hidden">
                                        #{status.id}
                                    </span>
                                </div>
                            </td>
                            <td className="py-2">
                                <div className="flex sm:flex-row justify-center items-center gap-2">
                                    <button
                                        onClick={() => onEdit(status)}
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