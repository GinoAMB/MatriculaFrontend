import { FiTrendingUp } from "react-icons/fi";

type Props = {
  title: string;
  value: number;
  percentage: string;
  periodStatus: string;
};

export default function KpiCard({
  title,
  value,
  percentage,
  periodStatus,
}: Props) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 w-full 
                    flex flex-col sm:flex-row 
                    justify-between sm:items-center gap-4">

      {/* LADO IZQUIERDO */}
      <div className="flex flex-col">
        <h3 className="text-xs sm:text-sm text-gray-500 uppercase">
          {title}
        </h3>

        <p className="text-2xl sm:text-3xl font-bold text-primary">
          {value}
        </p>

        <div className="flex items-center gap-1 text-green-600 text-xs sm:text-sm mt-1">
          <FiTrendingUp />
          <span>{percentage} respecto al año anterior</span>
        </div>
      </div>

      {/* LADO DERECHO */}
      <div className="flex flex-col items-start sm:items-end">
        <p className="text-xs sm:text-sm text-gray-500">
          Estado del Periodo Escolar
        </p>

        <div className="flex items-center gap-2 mt-1">
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          <span className="text-xs sm:text-sm font-medium text-gray-700">
            {periodStatus}
          </span>
        </div>
      </div>
    </div>
  );
}