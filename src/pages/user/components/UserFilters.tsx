import { useEffect, useState } from "react";
import { IoMdRefresh } from "react-icons/io";

type Props = {
    onSearch: (filters: {
        search: string;
        role: string;
        status: string;
    }) => void;
};

export default function UserFilters({ onSearch }: Props) {
    const [search, setSearch] = useState("");
    const [role, setRole] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        onSearch({ search, role, status });
    }, [search, role, status]);

    const handleClear = () => {
        setSearch("");
        setRole("");
        setStatus("");
    };

    return (
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-end bg-white p-3 rounded-lg shadow w-full">
            
            {/* Input */}
            <input
                type="text"
                placeholder="Buscar por nombre o correo ..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm"
            />

            {/* Selects */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full sm:w-[180px] border border-gray-300 rounded-xl px-3 py-2 text-sm"
                >
                    <option value="">Todos</option>
                    <option value="admin">Administrador</option>
                    <option value="docente">Docente</option>
                    <option value="auxiliar">Auxiliar</option>
                </select>

                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full sm:w-[180px] border border-gray-300 rounded-xl px-3 py-2 text-sm"
                >
                    <option value="">Todos</option>
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                </select>
            </div>

            {/* Botón */}
            <button
                onClick={handleClear}
                className="btn-secondary text-sm flex items-center justify-center gap-2 w-full md:w-auto"
            >
                <IoMdRefresh />
                Limpiar
            </button>
        </div>
    );
}