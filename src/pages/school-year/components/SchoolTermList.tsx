import { HiOutlinePencil } from "react-icons/hi";

type SchoolTerm = {
    id: number;
    anio: number;
    fecha_inicio: string;
    fecha_fin: string;
};

type Props = {
    schoolTerms: SchoolTerm[];
    onEdit: (schoolTerm: SchoolTerm) => void;
};

export default function SchoolTermList({ schoolTerms, onEdit }: Props) {
    return (
        <div className="bg-white rounded-xl shadow overflow-x-auto">
            {/* 🔹 Tabla */}
            <table className="w-full text-sm text-left">
                <thead className="bg-gray-100">
                    <tr className="text-gray-500">
                        <th className="py-2 hidden sm:table-cell px-5">ID</th>
                        <th className="py-2 px-5">AÑO</th>
                        <th className="py-2 text-center">INICIO</th>
                        <th className="py-2 text-center">FIN</th>
                        <th className="py-2 text-center">ACCIONES</th>
                    </tr>
                </thead>

                <tbody>
                    {schoolTerms.map((schoolTerm) => (
                        <tr key={schoolTerm.id}>
                            <td className="px-5 text-xs text-gray-400 hidden sm:table-cell"># {schoolTerm.id}</td>
                            <td className="px-5 ">
                                <div className="flex flex-col">
                                    <span>{schoolTerm.anio}</span>

                                    {/* ID solo en móvil */}
                                    <span className="text-xs text-gray-400 sm:hidden">
                                        #{schoolTerm.id}
                                    </span>
                                </div>
                            </td>
                            <td className="px-5 text-xs text-center">{schoolTerm.fecha_inicio}</td>
                            <td className="px-5 text-xs text-center">{schoolTerm.fecha_fin}</td>
                            <td className="py-2">
                                <div className="flex sm:flex-row justify-center items-center gap-2">
                                    <button
                                        onClick={() => onEdit(schoolTerm)}
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