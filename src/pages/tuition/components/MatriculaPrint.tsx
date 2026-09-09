import type { MatriculaDetalle } from "@/type/tuition/tuition.type";
import logo from "@/assets/logo_San_Bartolo.png";

type Props = {
    matricula: MatriculaDetalle;
};

export default function MatriculaPrint({
    matricula,
}: Props) {

    return (

        <div className="bg-white text-black p-8 w-full h-full">
            {/* Encabezado */}
            <div className="flex items-start justify-between gap-6">

                {/* Logo + grado */}
                <div className="flex items-center gap-5 flex-1">

                    <img
                        src={logo}
                        alt="Logo Colegio"
                        className="w-50 h-50 object-contain"
                    />

                    <div className="flex flex-col gap-3">

                        <div className="flex items-center gap-2">
                            <p className="text-sm font-semibold text-gray-500">
                                GRADO:
                            </p>

                            <p className="text-xl font-bold">
                                {matricula.grado}
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <p className="text-sm font-semibold text-gray-500">
                                SECCIÓN:
                            </p>

                            <p className="text-xl font-bold">
                                "{matricula.seccion}"
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    {/* Cuadro foto */}
                    <div className="w-[3.5cm] h-[4.5cm] border-2 border-gray-400 flex items-center justify-center text-center text-sm text-gray-500">

                        FOTO
                        <br />
                        DEL
                        <br />
                        ALUMNO

                    </div>
                </div>

            </div>
            <h2 className="text-2xl font-semibold text-center mb-1">
                FICHA PERSONAL DEL ESTUDIANTE
            </h2>
            {/* Información alumno */}
            <section>
                <div className="border bg-primary/10 p-2 flex items-center justify-center">
                    <h2 className="text-base font-semibold">
                        DATOS DEL ALUMNO
                    </h2>
                </div>

                <div className="grid py-2">

                    {/* Primera fila */}
                    <div className="grid grid-cols-2 gap-4 border py-1 px-2">
                        <div className="flex items-center gap-2">
                            <p className="font-semibold">
                                Apellidos y Nombres:
                            </p>

                            <p>
                                {matricula.apellidos} {matricula.nombre}
                            </p>
                        </div>
                    </div>

                    {/* Segunda fila */}
                    <div className="grid grid-cols-2 gap-4 border py-1 px-2">

                        <div className="flex items-center gap-2">
                            <p className="font-semibold">
                                Documento:
                            </p>

                            <p>
                                {matricula.tipoDocumento}: {matricula.numeroDocumento}
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <p className="font-semibold">
                                Nacionalidad:
                            </p>

                            <p>
                                {matricula.pais}
                            </p>
                        </div>

                    </div>

                    {/* Tercera fila */}
                    <div className="grid grid-cols-2 gap-4 border py-1 px-2">

                        <div className="flex items-center gap-2">
                            <p className="font-semibold">
                                Fecha Nacimiento:
                            </p>

                            <p>
                                {matricula.fechaNacimiento}
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <p className="font-semibold">
                                Edad:
                            </p>

                            <p>
                                {new Date().getFullYear() - new Date(matricula.fechaNacimiento).getFullYear()} años
                            </p>
                        </div>

                    </div>

                    {/* Cuarta fila */}
                    <div className="grid grid-cols-2 gap-4 border py-1 px-2">

                        <div className="flex items-center gap-2">
                            <p className="font-semibold">
                                Domicilio:
                            </p>

                            <p>
                                {matricula.direccion}
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* Datos escolares */}
            <section>
                <div className="border bg-primary/10 p-2 flex items-center justify-center">
                    <h2 className="text-base font-semibold">
                        DATOS ESCOLARES
                    </h2>
                </div>

                <div className="grid py-2">

                    {/* Primera fila */}
                    <div className="grid grid-cols-2 gap-4 border py-1 px-2">

                        <div className="flex items-center gap-2">
                            <p className="font-semibold">
                                Procede de otra institución:
                            </p>

                            <p>
                                {matricula.vieneDeOtraInstitucion ? "Sí" : "No"}
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <p className="font-semibold">
                                ¿Cuál institución?:
                            </p>

                            <p>
                                {matricula.nombreInstitucionProcedencia || "-"}
                            </p>
                        </div>

                    </div>

                    {/* Segunda fila */}
                    <div className="grid grid-cols-2 gap-4 border py-1 px-2">

                        <div className="flex items-center gap-2">
                            <p className="font-semibold">
                                Presenta discapacidad:
                            </p>

                            <p>
                                {matricula.tieneDiscapacidad ? "Sí" : "No"}
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <p className="font-semibold">
                                ¿Cuál discapacidad?:
                            </p>

                            <p>
                                {matricula.descripcionDiscapacidad || "-"}
                            </p>
                        </div>

                    </div>

                    {/* Tercera fila */}
                    <div className="flex items-center gap-2 border py-1 px-2">
                        <p className="font-semibold">
                            Religión:
                        </p>

                        <p>
                            {matricula.religion || "-"}
                        </p>
                    </div>

                </div>
            </section>

            {/* Familiares */}
            <section>

                <div className="border bg-primary/10 p-2 flex items-center justify-center">
                    <h2 className="text-base font-semibold">
                        DATOS FAMILIARES
                    </h2>
                </div>

                <div className="flex flex-col gap-2 py-2">

                    {matricula.familiares.map((familiar) => (

                        <div
                            key={familiar.idRelacion}
                            className="border overflow-hidden"
                        >

                            <div className="flex">

                                {/* Tipo relación vertical */}
                                <div className="bg-primary text-white flex items-center justify-center px-4">

                                    <p
                                        className="font-bold tracking-widest text-sm"
                                        style={{
                                            writingMode: "vertical-rl",
                                            transform: "rotate(180deg)"
                                        }}
                                    >
                                        {familiar.tipoRelacion}
                                    </p>

                                </div>

                                {/* Información */}
                                <div className="flex-1">

                                    {/* Nombre */}
                                    <div className="border-b py-1 px-2 flex items-center justify-between">

                                        <div className="flex items-center gap-2 ">
                                            <p className="text-sm font-semibold text-gray-500">
                                                Apellidos y Nombres:
                                            </p>

                                            <p>
                                                {matricula.apellidos} {matricula.nombre}
                                            </p>
                                        </div>

                                        {familiar.esApoderado && (
                                            <span className="text-sm">
                                                Apoderado
                                            </span>
                                        )}

                                    </div>

                                    {/* Datos tipo excel */}
                                    <div className="grid grid-cols-2">

                                        <div className="border-r py-1 px-2  border-b p-3">
                                            <div className="flex items-center gap-2 ">
                                                <p className="text-sm font-semibold text-gray-500">
                                                    Documento
                                                </p>

                                                <p>
                                                    {familiar.tipoDocumento} - {familiar.numeroDocumento}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="border-b py-1 px-2 p-3">
                                            <div className="flex items-center gap-2 ">
                                                <p className="text-sm font-semibold text-gray-500">
                                                    Celular
                                                </p>

                                                <p>
                                                    {familiar.celular}
                                                </p>
                                            </div>
                                        </div>

                                        <div className={`${familiar.esFallecido ? "border-r" : ""} py-1 px-2 p-3`}>
                                            <div className="flex items-center gap-2">
                                                <p className="text-sm font-semibold text-gray-500">
                                                    Dirección
                                                </p>

                                                <p>
                                                    {familiar.direccion}
                                                </p>
                                            </div>
                                        </div>

                                        {familiar.esFallecido && (
                                            <div className="py-1 px-2 p-3">
                                                <p className="text-sm font-semibold text-gray-500">
                                                    Fallecido
                                                </p>

                                                <p>
                                                    Sí
                                                </p>
                                            </div>
                                        )}

                                    </div>

                                </div>

                            </div>

                        </div>
                    ))}
                </div>
            </section>
            <div className="text-right">
                <p>
                    Santa, {
                        new Date(matricula.fechaMatricula).toLocaleDateString("es-PE", {
                            month: "long",
                            year: "numeric"
                        })
                    }
                </p>
            </div>
        </div>
    );
}