import { HiOutlinePencil } from "react-icons/hi";

import type { SchoolTerm } from "@/type/school-year/periodo.type";

import {
    isSchoolTermExpired
} from "@/utils/validations/school-term.validation";

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
                    {schoolTerms.map((schoolTerm) => {

                        const isExpired =
                            isSchoolTermExpired(
                                schoolTerm.fechaFin
                            );

                        return (

                            <tr key={schoolTerm.idPeriodo}>

                                <td className="px-5 py-2 text-xs text-gray-400 hidden sm:table-cell">
                                    # {schoolTerm.idPeriodo}
                                </td>

                                <td className="px-5 py-2">
                                    <div className="flex flex-col">

                                        <span>{schoolTerm.anio}</span>

                                        {/* ID solo en móvil */}
                                        <span className="text-xs text-gray-400 sm:hidden">
                                            #{schoolTerm.idPeriodo}
                                        </span>

                                    </div>
                                </td>

                                <td className="px-5 py-2 text-xs text-center">
                                    {schoolTerm.fechaInicio}
                                </td>

                                <td className="px-5 py-2 text-xs text-center">
                                    {schoolTerm.fechaFin}
                                </td>

                                <td className="py-2">

                                    <div className="flex sm:flex-row justify-center items-center gap-2">

                                        <button
                                            onClick={() => {
                                                if (!isExpired) {
                                                    onEdit(schoolTerm);
                                                }
                                            }}
                                            disabled={isExpired}
                                            title={
                                                isExpired
                                                    ? "No se puede editar un periodo académico finalizado"
                                                    : "Editar periodo académico"
                                            }
                                            className={`
                                p-2 rounded-full border transition
                                ${isExpired
                                                    ? "text-gray-300 cursor-not-allowed border-transparent"
                                                    : "text-primary border-transparent hover:bg-blue-50 hover:border-blue-500 cursor-pointer"
                                                }
                            `}
                                        >
                                            <HiOutlinePencil size={16} />
                                        </button>

                                    </div>

                                </td>

                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}