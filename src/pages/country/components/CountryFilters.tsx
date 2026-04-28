import { useEffect, useState } from "react";
import { IoMdRefresh } from "react-icons/io";

type Props = {
    onSearch: (search: string) => void;
};

export default function CountryFilter({ onSearch }: Props) {
    const [search, setSearch] = useState("");

    useEffect(() => {
        onSearch(search);
    }, [search]);

    const handleClear = () => {
        setSearch("");
    };

    return (
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-end bg-white p-3 rounded-lg shadow w-full">

            {/* Input */}
            <input
                type="text"
                placeholder="Buscar país por nombre..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full md:w-[300px] border border-gray-300 rounded-xl px-3 py-2 text-sm"
            />

            {/* Botón limpiar */}
            <button
                onClick={handleClear}
                className="btn-secondary text-sm flex items-center justify-center gap-2 w-full md:w-auto md:ml-auto"
            >
                <IoMdRefresh />
                Limpiar
            </button>
        </div>
    );
}