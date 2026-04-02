import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from "recharts";

type DataItem = {
  name: string;
  value: number;
};

type Props = {
  data: DataItem[];
};

const COLORS = [
  "var(--color-primary)",
  "var(--color-secondary)",
];
export default function DistributionKpi({ data }: Props) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 w-full">
      <h3 className="text-sm text-gray-500 mb-3">
        DISTRIBUCIÓN POR NIVEL EDUCATIVO
      </h3>

      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Bar dataKey="value">
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}