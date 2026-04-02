import DashboardDirectivoHeader from "./components/DashboardDirectivoHeader";
import KpiCard from "./components/KpiCard";
import DistributionKpi from "./components/DistributionKpi";
import PercentageKpi from "./components/PercentageKpi";
import LastEnrollments from "./components/LastEnrollments";

export default function DashboardDirectivo() {
  const distributionData = [
    { name: "Primaria", value: 500 },
    { name: "Secundaria", value: 400 },
  ];

  const percentageData = [
    { name: "Primaria", value: 45 },
    { name: "Secundaria", value: 30 },
  ];

  const lastEnrollments = [
    {
      student: "Juan Pérez",
      level: "Primaria",
      grade: "3°",
      date: "2024-06-15", // Ejemplo de fecha
    },
    {
      student: "María López",
      level: "Secundaria",
      grade: "1°",
      date: "2024-06-14", // Ejemplo de fecha
    },
    {
      student: "Carlos Ramos",
      level: "Primaria",
      grade: "5°",
      date: "2024-06-13", // Ejemplo de fecha
    }
  ];

  return (
    <div className="flex flex-col gap-4">
      <DashboardDirectivoHeader
        title="IE 33280 San Bartolo"
        subtitle="Resumen general de estado de matrículas para el periodo actual."
      />

      {/* KPI principal */}
      <KpiCard
        title="TOTAL DE ESTUDIANTES MATRICULADOS"
        value={1200}
        percentage="+4.2%"
        periodStatus="Periodo Activo 2026"
      />

      {/* Segunda fila de KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DistributionKpi data={distributionData} />
        <PercentageKpi data={percentageData} />
      </div>

      <LastEnrollments data={lastEnrollments} />
    </div>
  );
}