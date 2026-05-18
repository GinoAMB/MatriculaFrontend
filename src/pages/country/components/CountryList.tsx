import { HiOutlinePencil } from "react-icons/hi";

import type { Country } from "@/type/country/country.type";


type Props = {
    countries: Country[];
    onEdit: (country: Country) => void;
};

export default function CountryList({ countries, onEdit }: Props) {
    return (
        <div className="bg-white rounded-xl shadow overflow-x-auto">
            {/* 🔹 Tabla */}
            <table className="w-full text-sm text-left">
                <thead className="bg-gray-100">
                    <tr className="text-gray-500">
                        <th className="py-2 hidden sm:table-cell px-5">ID</th>
                        <th className="py-2 px-5">NOMBRE DEL PAÍS</th>
                        <th className="py-2 text-center">ACCIONES</th>
                    </tr>
                </thead>

                <tbody>
                    {countries.map((country) => (
                        <tr key={country.idPais}>
                            <td className="px-5 text-xs text-gray-400 hidden sm:table-cell"># {country.idPais}</td>
                            <td className="px-5 ">
                                <div className="flex flex-col">
                                    <span>{country.nombre}</span>

                                    {/* ID solo en móvil */}
                                    <span className="text-xs text-gray-400 sm:hidden">
                                        #{country.idPais}
                                    </span>
                                </div>
                            </td>
                            <td className="py-2">
                                <div className="flex sm:flex-row justify-center items-center gap-2">
                                    <button
                                        onClick={() => onEdit(country)}
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