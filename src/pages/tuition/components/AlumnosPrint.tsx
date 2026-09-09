import type { AlumnoPrintResponse } from "@/type/tuition/tuition.type";

type Props = {
    alumnos: AlumnoPrintResponse;
};

export default function AlumnosPrint({ alumnos }: Props) {

    return (
        <div className="bg-white text-black p-4">

            <h1 className="text-lg font-bold text-center mb-3">
                LISTADO DE ALUMNOS
            </h1>

            <table className="w-full border border-black text-[10px] table-fixed">

                <thead>
                    <tr className="border-b border-black">

                        <th className="border px-1 py-0.5">N°</th>
                        <th className="border px-1 py-0.5">ALUMNO</th>
                        <th className="border px-1 py-0.5">DOC</th>
                        <th className="border px-1 py-0.5">NIV</th>
                        <th className="border px-1 py-0.5">GR</th>
                        <th className="border px-1 py-0.5">SEC</th>
                        <th className="border px-1 py-0.5">DIR</th>
                        <th className="border px-1 py-0.5">EXT</th>
                        <th className="border px-1 py-0.5">INST</th>
                        <th className="border px-1 py-0.5">DIS</th>
                        <th className="border px-1 py-0.5">DESC</th>
                        <th className="border px-1 py-0.5">REL</th>
                        <th className="border px-1 py-0.5">F.NAC</th>
                        <th className="border px-1 py-0.5">PAÍS</th>

                    </tr>
                </thead>

                <tbody>
                    {alumnos.map((a, index) => (
                        <tr key={index} className="border-b border-black text-center">

                            <td className="border px-1 py-0.5 text-center">
                                {index + 1}
                            </td>

                            <td className="border px-1 py-0.5">
                                {a.apellidos} {a.nombre}
                            </td>

                            <td className="border px-1 py-0.5">
                                {a.tipoDocumento} - {a.numeroDocumento}
                            </td>

                            <td className="border px-1 py-0.5 text-center">
                                {a.nivel}
                            </td>

                            <td className="border px-1 py-0.5 text-center">
                                {a.grado}
                            </td>

                            <td className="border px-1 py-0.5 text-center">
                                {a.seccion}
                            </td>

                            <td className="border px-1 py-0.5">
                                {a.direccion}
                            </td>

                            <td className="border px-1 py-0.5 text-center">
                                {a.vieneDeOtraInstitucion ? "SI" : "NO"}
                            </td>

                            <td className="border px-1 py-0.5">
                                {a.nombreInstitucionProcedencia || "-"}
                            </td>

                            <td className="border px-1 py-0.5 text-center">
                                {a.tieneDiscapacidad ? "SI" : "NO"}
                            </td>

                            <td className="border px-1 py-0.5">
                                {a.descripcionDiscapacidad || "-"}
                            </td>

                            <td className="border px-1 py-0.5">
                                {a.religion}
                            </td>

                            <td className="border px-1 py-0.5">
                                {a.fechaNacimiento}
                            </td>

                            <td className="border px-1 py-0.5">
                                {a.pais || "-"}
                            </td>

                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}