import { useEffect, useState } from "react";
import { IoMdRefresh } from "react-icons/io";

import type { Nivel } from "@/type/academic/academin.type";

type Props = {
    niveles: Nivel[];
    loading: boolean;
    error: string | null;
    onSearch: (filters: {
        search: string;
        level: string;
        grade: string;
        section: string;
    }) => void;
};

export default function TuitionFilters({
    onSearch,
    niveles,
    loading,
    error,
}: Props) {

    const [search, setSearch] = useState("");
    const [level, setLevel] = useState("");
    const [grade, setGrade] = useState("");
    const [section, setSection] = useState("");

    //Resetear grado y sección al cambiar nivel
    useEffect(() => {
        setGrade("");
        setSection("");
    }, [level]);

    // Resetear sección al cambiar grado
    useEffect(() => {
        setSection("");
    }, [grade]);

    // Nivel seleccionado
    const selectedNivel = niveles.find(
        (n) => n.idNivel.toString() === level
    );

    // Grados del nivel
    const grados = selectedNivel?.grados || [];

    // Grado seleccionado
    const selectedGrado = grados.find(
        (g) => g.idGrado.toString() === grade
    );

    // Secciones del grado
    const secciones = selectedGrado?.secciones || [];

    // Buscar automáticamente
    useEffect(() => {

        const nivelNombre =
            niveles.find(
                (n) => n.idNivel.toString() === level
            )?.nombre || "";

        const gradoNombre =
            grados.find(
                (g) => g.idGrado.toString() === grade
            )?.nombre || "";

        const seccionNombre =
            secciones.find(
                (s) => s.idSeccion.toString() === section
            )?.nombre || "";

        onSearch({
            search,
            level: nivelNombre,
            grade: gradoNombre,
            section: seccionNombre,
        });

    }, [
        search,
        level,
        grade,
        section,
        niveles,
        onSearch
    ]);

    // Limpiar filtros
    const handleClear = () => {
        setSearch("");
        setLevel("");
        setGrade("");
        setSection("");
    };

    return (
        <div className="bg-white p-4 rounded-xl shadow w-full">

            <div className="flex flex-col lg:flex-row gap-3 w-full">

                <input
                    type="text"
                    placeholder="Buscar por nombre, DNI o cédula..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full lg:flex-1 border border-gray-300 rounded-xl px-3 py-2 text-sm"
                />

                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

                    <select
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                        disabled={loading || !!error}
                        className="w-full sm:w-[150px] border border-gray-300 rounded-xl px-3 py-2 text-sm disabled:bg-gray-100"
                    >
                        <option value="">
                            {loading ? "Cargando..." : "Nivel"}
                        </option>

                        {niveles.map((nivel) => (
                            <option
                                key={nivel.idNivel}
                                value={nivel.idNivel}
                            >
                                {nivel.nombre}
                            </option>
                        ))}
                    </select>

                    <select
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        disabled={!level || loading || !!error}
                        className="w-full sm:w-[120px] border border-gray-300 rounded-xl px-3 py-2 text-sm disabled:bg-gray-100"
                    >
                        <option value="">Grado</option>

                        {grados.map((grado) => (
                            <option
                                key={grado.idGrado}
                                value={grado.idGrado}
                            >
                                {grado.nombre}
                            </option>
                        ))}
                    </select>

                    <select
                        value={section}
                        onChange={(e) => setSection(e.target.value)}
                        disabled={!grade || loading || !!error}
                        className="w-full sm:w-[120px] border border-gray-300 rounded-xl px-3 py-2 text-sm disabled:bg-gray-100"
                    >
                        <option value="">Sección</option>

                        {secciones.map((seccion) => (
                            <option
                                key={seccion.idSeccion}
                                value={seccion.idSeccion}
                            >
                                {seccion.nombre}
                            </option>
                        ))}
                    </select>

                </div>

                <button
                    onClick={handleClear}
                    className="btn-secondary flex items-center justify-center gap-2 text-sm w-full sm:w-auto px-4"
                >
                    <IoMdRefresh />
                    Limpiar
                </button>
            </div>

            {error && (
                <p className="text-red-500 text-sm mt-2">
                    {error}
                </p>
            )}
        </div>
    );
}