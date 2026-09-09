import { HiOutlineInbox, HiOutlineSearch } from "react-icons/hi";

type Props = {
    type?: "empty" | "search";
    title?: string;
    message?: string;
};

export default function EmptyState({
    type = "empty",
    title,
    message,
}: Props) {

    const isSearch = type === "search";

    return (
        <div className="flex flex-col items-center justify-center py-14 px-4 text-center">

            <div className="bg-gray-100 p-4 rounded-full mb-4">
                {isSearch ? (
                    <HiOutlineSearch className="text-gray-500" size={35} />
                ) : (
                    <HiOutlineInbox className="text-gray-500" size={35} />
                )}
            </div>

            <h3 className="text-lg font-semibold text-gray-700">
                {title ||
                    (isSearch
                        ? "No se encontraron resultados"
                        : "No hay registros disponibles")}
            </h3>

            <p className="text-sm text-gray-500 mt-1 max-w-md">
                {message ||
                    (isSearch
                        ? "Intenta cambiar los filtros o términos de búsqueda."
                        : "Todavía no existen registros para mostrar.")}
            </p>
        </div>
    );
}