import type { JSX } from "react";

type Props = {
    title: string;
    value: number;
    color: string;
    icon?: JSX.Element;
    description?: string;
};

export default function StatCard({
    title,
    value,
    color,
    icon,
    description,
}: Props) {
    return (
        <div className="bg-white p-4 rounded-xl shadow">
            <p className="text-sm text-gray-500 font-semibold">
                {title}
            </p>

            <p className={`text-2xl font-bold ${color}`}>
                {value}
            </p>

            <div className="flex items-center gap-2">
                {icon}
                <p className="text-xs text-gray-400">
                    {description}
                </p>
            </div>
        </div>
    );
}