import { IoMdAdd } from "react-icons/io";

type Props = {
    title: string;
    subtitle?: string;
    onNewCountry: () => void;
};

export default function CountryHeader({ title, subtitle, onNewCountry }: Props) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            {/* Texto */}
            <div>
                <h1 className="text-xl sm:text-4xl font-bold text-primary">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-gray-500 text-xs sm:text-sm">
                        {subtitle}
                    </p>
                )}
            </div>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <button
                    onClick={onNewCountry}
                    className="btn-primary text-sm flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                    <IoMdAdd />
                    Nuevo País
                </button>
            </div>
        </div>
    );
}