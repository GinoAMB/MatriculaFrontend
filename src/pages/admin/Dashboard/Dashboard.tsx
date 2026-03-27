import DashboardHeader from "./components/DashboardHeader";
import StatCard from "./components/StatCard";
import RolesChart from "./components/RolesChart";
import RecoveryMetrics from "./components/RecoveryMetrics";
import { FaUsers } from "react-icons/fa";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { GoCircleSlash } from "react-icons/go";

export default function Dashboard() {
    const rolesData = [
        { name: "Admin", value: 5 },
        { name: "Directiva", value: 3 },
        { name: "Docente", value: 20 },
        { name: "Auxiliar", value: 7 },
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <DashboardHeader
                title="Resumen de Gestión de Usuarios"
                subtitle="Monitoreo de accesos y perfiles institucionales"
            />

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatCard
                    title="TOTAL DE USUARIOS"
                    value={35}
                    color="text-primary"
                    icon={<FaUsers className="text-xs text-gray-400" />}
                    description="Base de datos global"
                />

                <StatCard
                    title="USUARIOS ACTIVOS"
                    value={28}
                    color="text-green-600"
                    icon={<HiOutlineCheckCircle className="text-xs text-green-600" />}
                    description="95% del total"
                />

                <StatCard
                    title="USUARIOS INACTIVOS"
                    value={7}
                    color="text-red-600"
                    icon={<GoCircleSlash className="text-xs text-red-600" />}
                    description="20% del total"
                />
            </div>

            {/* Sección inferior */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <RolesChart rolesData={rolesData} />
                <RecoveryMetrics />
            </div>
        </div>
    );
}