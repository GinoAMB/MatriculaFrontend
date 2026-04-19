import { useEffect, useState } from "react";
import { IoMdRefresh } from "react-icons/io";

type Props = {
    onSearch: (filters: {
        search: string;
        level: string;
        grade: string;
        section: string;
    }) => void;
};

export default function TuitionFilters({ onSearch }: Props) {
    const [search, setSearch] = useState("");
    const [level, setLevel] = useState("");
    const [grade, setGrade] = useState("");
    const [section, setSection] = useState("");

    useEffect(() => {
        onSearch({ search, level, grade, section });
    }, [search, level, grade, section]);

    const handleClear = () => {
        setSearch("");
        setLevel("");
        setGrade("");
        setSection("");
    };

    return (
        <div className="bg-white p-4 rounded-xl shadow w-full">
            
            <div className="flex flex-col lg:flex-row gap-3 w-full">
                
                {/* 🔍 Buscador (más grande en desktop) */}
                <input
                    type="text"
                    placeholder="Buscar por nombre, DNI o cédula..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full lg:flex-1 border border-gray-300 rounded-xl px-3 py-2 text-sm"
                />

                {/* 📦 Filtros */}
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                    
                    <select
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                        className="w-full sm:w-[150px] border border-gray-300 rounded-xl px-3 py-2 text-sm"
                    >
                        <option value="">Nivel</option>
                        <option value="Inicial">Inicial</option>
                        <option value="Primaria">Primaria</option>
                        <option value="Secundaria">Secundaria</option>
                    </select>

                    <select
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        className="w-full sm:w-[120px] border border-gray-300 rounded-xl px-3 py-2 text-sm"
                    >
                        <option value="">Grado</option>
                        <option value="1">1°</option>
                        <option value="2">2°</option>
                        <option value="3">3°</option>
                        <option value="4">4°</option>
                        <option value="5">5°</option>
                    </select>

                    <select
                        value={section}
                        onChange={(e) => setSection(e.target.value)}
                        className="w-full sm:w-[120px] border border-gray-300 rounded-xl px-3 py-2 text-sm"
                    >
                        <option value="">Sección</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                    </select>
                </div>

                {/* 🔄 Botón */}
                <button
                    onClick={handleClear}
                    className="btn-secondary flex items-center justify-center gap-2 text-sm w-full sm:w-auto px-4"
                >
                    <IoMdRefresh />
                    Limpiar
                </button>
            </div>
        </div>
    );
}