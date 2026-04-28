type Props = {
    title: string;
    subtitle?: string;
};

export default function DashboardHeader({ title, subtitle }: Props) {
    return (
        <div>
            <h1 className="text-2xl font-bold text-primary">{title}</h1>
            {subtitle && (
                <p className="text-gray-500">{subtitle}</p>
            )}
        </div>
    );
}