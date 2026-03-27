import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { MdLockReset } from "react-icons/md";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import { GoCircleSlash } from "react-icons/go";


export default function Dashboard() {
    // 🔹 Datos ejemplo
    const rolesData = [
        { name: "Admin", value: 5 },
        { name: "Directiva", value: 3 },
        { name: "Docente", value: 20 },
        { name: "Auxiliar", value: 7 },
    ];

    const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

    return (
        <div className="space-y-6">
            {/* 🧾 Título */}
            <div>
                <h1 className="text-2xl font-bold">
                    Resumen de Gestión de Usuarios
                </h1>
                <p className="text-gray-500">
                    Monitoreo de accesos y perfiles institucionales
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Total */}
                <div className="bg-white p-4 rounded-xl shadow">
                    <p className="text-sm text-gray-500 font-semibold">
                        TOTAL DE USUARIOS
                    </p>
                    <p className="text-2xl font-bold text-primary">35</p>
                    <div className="flex items-center gap-2">
                        <FaUsers className="text-xs text-gray-400" />
                        <p className="text-xs text-gray-400">
                            Base de datos global
                        </p>
                    </div>
                </div>

                {/* Activos */}
                <div className="bg-white p-4 rounded-xl shadow">
                    <p className="text-sm text-gray-500 font-semibold">
                        USUARIOS ACTIVOS
                    </p>
                    <p className="text-2xl font-bold text-green-600">28</p>
                    <div className="flex items-center gap-2">
                        <HiOutlineCheckCircle className="text-xs text-green-600" />
                        <p className="text-xs text-green-600">
                            95% del total
                        </p>
                    </div>
                </div>

                {/* Inactivos */}
                <div className="bg-white p-4 rounded-xl shadow">
                    <p className="text-sm text-gray-500 font-semibold">
                        USUARIOS INACTIVOS
                    </p>
                    <p className="text-2xl font-bold text-red-600">7</p>
                    <div className="flex items-center gap-2">
                        <GoCircleSlash className="text-xs text-red-600" />
                        <p className="text-xs text-red-600">
                            20% del total
                        </p>
                    </div>
                </div>
            </div>

            {/* 📈 Sección inferior */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* 🎯 Distribución por rol */}
                <div className="bg-white p-4 rounded-xl shadow">
                    <h2 className="font-semibold mb-4">
                        Distribución por rol
                    </h2>

                    <div className="w-full h-64">
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    data={rolesData}
                                    dataKey="value"
                                    nameKey="name"
                                    outerRadius={90}
                                    label
                                >
                                    {rolesData.map((entry, index) => (
                                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* 🔽 Leyenda personalizada */}
                    <div className="grid grid-cols-2 gap-2">
                        {rolesData.map((role, index) => (
                            <div key={index} className="flex items-center justify-between">

                                {/* Nombre + color */}
                                <div className="flex items-center gap-2">
                                    <span
                                        className="w-3 h-3 rounded-full"
                                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                                    ></span>
                                    <span className="text-sm text-gray-700">
                                        {role.name}
                                    </span>
                                </div>

                                {/* Cantidad */}
                                <span className="text-sm font-semibold">
                                    {role.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 🔐 Recuperación de contraseña */}
                <div className="bg-white p-4 rounded-xl shadow">
                    <h2 className="font-semibold mb-4">
                        Métricas de Recuperación de Contraseña
                    </h2>

                    <div className="space-y-4">

                        {/* 🔹 Cards verticales */}
                        <div className="flex flex-col gap-4">

                            {/* Solicitudes */}
                            <div className="bg-gray-200 p-4 rounded-lg flex items-center gap-4">

                                {/* Icono */}
                                <div className="bg-white p-2 rounded-lg">
                                    <MdLockReset className="text-3xl text-primary" />
                                </div>

                                {/* Texto */}
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold">
                                        Solicitudes Totales
                                    </span>
                                    <span className="text-2xl font-bold text-primary">
                                        50
                                    </span>
                                    <span className="text-xs text-gray-500">
                                        ÚLTIMO MES
                                    </span>
                                </div>

                            </div>

                            {/* Exitosas */}
                            <div className="bg-gray-200 p-4 rounded-lg flex items-center gap-4">

                                {/* Icono */}
                                <div className="bg-white p-2 rounded-lg">
                                    <HiOutlineCheckCircle className="text-3xl text-green-600" />
                                </div>

                                {/* Texto */}
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold">
                                        Recuperaciones Exitosas
                                    </span>
                                    <span className="text-2xl font-bold text-green-600">
                                        42
                                    </span>
                                    <span className="text-xs text-gray-500">
                                        90% DE ÉXITOS
                                    </span>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}