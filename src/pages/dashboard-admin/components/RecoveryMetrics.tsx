import { MdLockReset } from "react-icons/md";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { type JSX } from "react";

function MetricCard({
    title,
    value,
    subtitle,
    icon,
    color,
}: {
    title: string;
    value: number;
    subtitle: string;
    icon?: JSX.Element;
    color: string;
}) {
    return (
        <div className="bg-gray-200 p-4 rounded-lg flex items-center gap-4">
            <div className="bg-white p-2 rounded-lg">
                {icon}
            </div>

            <div className="flex flex-col">
                <span className="text-sm font-semibold">
                    {title}
                </span>
                <span className={`text-2xl font-bold ${color}`}>
                    {value}
                </span>
                <span className="text-xs text-gray-500">
                    {subtitle}
                </span>
            </div>
        </div>
    );
}

export default function RecoveryMetrics() {
    return (
        <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="font-semibold mb-4">
                Métricas de Recuperación de Contraseña
            </h2>

            <div className="flex flex-col gap-4">
                <MetricCard
                    title="Solicitudes Totales"
                    value={50}
                    subtitle="ÚLTIMO MES"
                    color="text-primary"
                    icon={
                        <MdLockReset className="text-3xl text-primary" />
                    }
                />

                <MetricCard
                    title="Recuperaciones Exitosas"
                    value={42}
                    subtitle="90% DE ÉXITOS"
                    color="text-green-600"
                    icon={
                        <HiOutlineCheckCircle className="text-3xl text-green-600" />
                    }
                />
            </div>
        </div>
    );
}