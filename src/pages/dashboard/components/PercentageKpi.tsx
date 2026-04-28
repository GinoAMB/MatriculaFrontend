import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Legend,
  Sector,
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

// 👇 tu active shape
const renderActiveShape = (props: any) => {
  const {
    cx, cy, innerRadius, outerRadius,
    startAngle, endAngle, fill,
    payload, percent, value
  } = props;

  return (
    <g>
      <text x={cx} y={cy} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>

      <text x={cx} y={cy + 20} textAnchor="middle" fill="#999">
        {value} ({(percent * 100).toFixed(0)}%)
      </text>

      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

export default function PercentageKpi({ data }: Props) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 w-full">
      <h3 className="text-sm text-gray-500 mb-3">
        PORCENTAJE POR NIVEL EDUCATIVO
      </h3>

      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={50}
              outerRadius={80}
              activeShape={renderActiveShape} // 👈 SOLO ESTO
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            {/* 👇 ESTO CONTROLA EL ACTIVO EN v3 */}
            <Tooltip defaultIndex={0} />

            <Legend
              verticalAlign="bottom"
              content={({ payload }: any) => {
                const total = data.reduce((acc, item) => acc + item.value, 0);

                return (
                  <div className="flex flex-col gap-2 mt-3">
                    {payload.map((entry: any, index: number) => {
                      const percent = ((entry.payload.value / total) * 100).toFixed(0);

                      return (
                        <div
                          key={index}
                          className="flex items-center justify-between w-full"
                        >
                          {/* IZQUIERDA */}
                          <div className="flex items-center gap-2">
                            <span
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: entry.color }}
                            />
                            <span className="text-sm text-gray-700">
                              {entry.value}
                            </span>
                          </div>

                          {/* DERECHA */}
                          <span className="text-sm text-gray-500">
                            {percent}%
                          </span>
                        </div>
                      );
                    })}
                  </div>
                );
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}