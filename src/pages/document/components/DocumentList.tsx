import { HiOutlinePencil } from "react-icons/hi";
import type { DocumentType } from "@/type/document/document.type";

type Props = {
    document: DocumentType[];
    onEdit: (document: DocumentType) => void;
};

export default function DocumentList({ document, onEdit }: Props) {
    return (
        <div className="bg-white rounded-xl shadow overflow-x-auto">
            {/* 🔹 Tabla */}
            <table className="w-full text-sm text-left">
                <thead className="bg-gray-100">
                    <tr className="text-gray-500">
                        <th className="py-2 hidden sm:table-cell px-5">ID</th>
                        <th className="py-2 px-5">NOMBRE DEL DOCUMENTO</th>
                        <th className="py-2 text-center">ACCIONES</th>
                    </tr>
                </thead>

                <tbody>
                    {document.map((document) => (
                        <tr key={document.idTipo}>
                            <td className="px-5 text-xs text-gray-400 hidden sm:table-cell"># {document.idTipo}</td>
                            <td className="px-5 ">
                                <div className="flex flex-col">
                                    <span>{document.nombre}</span>

                                    {/* ID solo en móvil */}
                                    <span className="text-xs text-gray-400 sm:hidden">
                                        #{document.idTipo}
                                    </span>
                                </div>
                            </td>
                            <td className="py-2">
                                <div className="flex sm:flex-row justify-center items-center gap-2">
                                    <button
                                        onClick={() => onEdit(document)}
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