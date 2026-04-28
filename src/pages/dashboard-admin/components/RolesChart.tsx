import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

type Role = {
    name: string;
    value: number;
};

type Props = {
    rolesData: Role[];
};

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

export default function RolesChart({ rolesData }: Props) {
    return (
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
                            {rolesData.map((_, index) => (
                                <Cell
                                    key={index}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* Leyenda */}
            <div className="grid grid-cols-2 gap-2">
                {rolesData.map((role, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between"
                    >
                        <div className="flex items-center gap-2">
                            <span
                                className="w-3 h-3 rounded-full"
                                style={{
                                    backgroundColor:
                                        COLORS[index % COLORS.length],
                                }}
                            ></span>
                            <span className="text-sm text-gray-700">
                                {role.name}
                            </span>
                        </div>

                        <span className="text-sm font-semibold">
                            {role.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}