import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Props = {
    currentPage: number;
    totalPages: number;
    totalItems: number; // 👈 nuevo
    itemsPerPage: number; // 👈 nuevo
    onPageChange: (page: number) => void;
};

export default function Pagination({
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage,
    onPageChange,
}: Props) {

    const getPages = () => {
        const pages: (number | string)[] = [];
        const delta = 2;

        const start = Math.max(2, currentPage - delta);
        const end = Math.min(totalPages - 1, currentPage + delta);

        pages.push(1);

        if (start > 2) pages.push("...");

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        if (end < totalPages - 1) pages.push("...");

        if (totalPages > 1) pages.push(totalPages);

        return pages;
    };

    const pages = getPages();

    // 👇 cálculo de registros mostrados
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    return (
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 bg-white p-2 rounded-xl shadow">

            {/* 👈 Lado izquierdo: info */}
            <div className="text-sm text-gray-600">
                Mostrando {startItem} - {endItem} de {totalItems} registros
            </div>

            {/* 👉 Lado derecho: paginación */}
            <div className="flex items-center gap-2 flex-wrap justify-end">

                {/* Anterior */}
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 text-sm cursor-pointer text-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <FaChevronLeft />
                </button>

                {/* Páginas */}
                {pages.map((page, index) =>
                    page === "..." ? (
                        <span key={index} className="px-2 text-gray-400">...</span>
                    ) : (
                        <button
                            key={page}
                            onClick={() => onPageChange(Number(page))}
                            className={`px-3 py-1 text-sm cursor-pointer ${
                                currentPage === page
                                    ? "bg-primary text-white rounded"
                                    : "bg-white hover:bg-gray-100"
                            }`}
                        >
                            {page}
                        </button>
                    )
                )}

                {/* Siguiente */}
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 text-sm cursor-pointer text-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
}