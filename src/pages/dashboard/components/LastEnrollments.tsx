import { Link } from "react-router-dom";

type Enrollment = {
    student: string;
    level: string;
    grade: string;
    date: string;
};

type Props = {
    data: Enrollment[];
};

export default function LastEnrollments({ data }: Props) {
    return (
        <div className="bg-white shadow-md rounded-2xl flex flex-col">

            {/* Header */}
            <div className="flex justify-between items-center border-b border-gray-300 p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    Últimas Matrículas realizadas
                </h2>

                <Link
                    to="/directivo/matricula"
                    className="text-sm font-semibold text-primary hover:underline"
                >
                    Ver todas
                </Link>
            </div>

            {/* Lista */}
            <div className="flex flex-col gap-3 px-4 py-3">
                {data.slice(0, 3).map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center last:border-none"
                    >
                        {/* Info alumno */}
                        <div className="flex flex-col">
                            <span className="font-medium text-gray-700">
                                {item.student}
                            </span>
                            <span className="text-sm text-gray-500">
                                {item.level} - {item.grade} Grado
                            </span>
                        </div>

                        {/* Fecha */}
                        <span className="text-sm text-gray-400">
                            {item.date}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}