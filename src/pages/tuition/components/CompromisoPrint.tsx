import type { MatriculaDetalle } from "@/type/tuition/tuition.type";
import logo from "@/assets/logo_San_Bartolo.png";
import MDRP from "@/assets/MDRP.png";

type Props = {
    matricula: MatriculaDetalle;
};

export default function CompromisoPrint({
    matricula,
}: Props) {

    const apoderado = matricula.familiares.find(
        (f) => f.esApoderado
    );

    return (

        <div className="bg-white text-black px-8 py-6 w-full text-[15px] leading-relaxed">

            {/* Encabezado */}
            <div className="flex items-start justify-between mb-2">

                <img
                    src={logo}
                    alt="Logo"
                    className="w-35 h-35 object-contain"
                />

                <div className="flex-1 text-center px-4">

                    <h1 className="font-bold text-base uppercase">
                        Unidad de Gestión Educativa Local - Santa
                    </h1>

                    <h2 className="font-bold text-base uppercase">
                        Institución Educativa N° 88320 - "San Bartolo"
                    </h2>

                    <p className="font-semibold">
                        Jr. Atahualpa Mz. "B" - Santa
                    </p>

                    <div className="flex justify-center gap-10 mt-1 text-sm">
                        <p>
                            CÓDIGO PRIMARIA: 0358630
                        </p>

                        <p>
                            CÓDIGO SECUNDARIA: 1002492
                        </p>
                    </div>

                    <p className="italic text-sm mt-2">
                        "Año de la Esperanza y el Fortalecimiento de la Democracia"
                    </p>
                </div>

                <img
                    src={MDRP}
                    alt="Logo MDRP"
                    className="w-35 h-35 object-contain"
                />
            </div>

            {/* Título */}
            <div className="border-2 border-black bg-green-200 py-3 px-4 text-center mb-2">

                <h2 className="font-bold text-xl uppercase">
                    Acta de Compromiso de los Padres de Familia o Apoderado(a)
                </h2>

            </div>

            {/* Contenido */}
            <div className="text-justify space-y-2">

                <p>
                    Yo <span className="border-b border-black inline-block min-w-[320px] font-medium text-center">
                        {apoderado?.nombre} {apoderado?.apellidos}
                    </span>,
                    identificado(a) con {apoderado?.tipoDocumento} N°
                    <span className="border-b border-black inline-block min-w-[140px] ml-2 font-medium text-center">
                        {apoderado?.numeroDocumento}
                    </span>,
                    domiciliado(a) en
                    <span className="border-b border-black inline-block min-w-[250px] ml-2 font-medium text-center">
                        {apoderado?.direccion}
                    </span>,
                    con teléfono N°
                    <span className="border-b border-black inline-block min-w-[120px] ml-2 font-medium text-cente">
                        {apoderado?.celular}
                    </span>,
                    en mi condición de
                    <span className="italic font-semibold mx-2">
                        Apoderado(a)
                    </span>
                    del(la) estudiante
                    <span className="border-b border-black inline-block min-w-[280px] ml-2 font-medium text-center">
                        {matricula.nombre} {matricula.apellidos}
                    </span>,
                    del aula:
                    <span className="border-b border-black inline-block min-w-[100px] ml-2 font-medium text-center">
                        {matricula.grado}° "{matricula.seccion}"
                    </span>
                    al matricularlo(a) en la institución educativa "N° 88320, San Bartolo", acepto y me comprometo bajo juramento a respetar y cumplir, en todas sus partes, el presente compromiso, que contribuirá a tener claras mis obligaciones respecto a formar parte de esta institución donde estudiará mi menor hijo(a) o representado(a), y que se expresa en los términos siguientes:
                </p>

                {/* Lista */}
                <div className="space-y-0.5 pl-1">

                    <p>
                        1.- Respetaré y cumpliré lo establecido en el Reglamento Interno de la I.E. y expresado en las normas de convivencia institucional.
                    </p>

                    <p>
                        2.- Colaboraré con la puntualidad y cumplimiento del horario escolar.
                    </p>

                    <p>
                        3.- Justificaré personal y puntualmente, por escrito o verbalmente, las inasistencias y/o tardanzas de mi hijo(a), en el plazo de 24 horas.
                    </p>

                    <p>
                        4.- Terminado cada bimestre escolar, recogeré puntualmente la boleta de calificaciones (informe de progreso de los aprendizajes) en el día y hora señalados, firmando la hoja respectiva.
                    </p>

                    <p>
                        5.- Enviaré a mi menor hijo(a) correctamente uniformado(a), con el uniforme característico de la institución o con el uniforme de Educación Física, según la ocasión lo requiera.
                    </p>

                    <p>
                        6.- Apoyaré en el cumplimiento de las tareas y en la buena conducta de mi menor hijo(a).
                    </p>

                    <p>
                        7.- Estimularé diariamente a mi hijo(a) para que mantenga una actitud positiva frente al proceso educativo.
                    </p>

                    <p>
                        8.- Asistiré puntual y responsablemente a reuniones y/o citaciones de la institución educativa.
                    </p>

                    <p>
                        9.- Cumpliré con enviar a mi hijo(a) a las actividades de reforzamiento o recuperación cuando el profesor lo requiera.
                    </p>

                    <p>
                        10.- Haré uso adecuado del derecho de padre de familia.
                    </p>

                    <p>
                        11.- Mostraré conducta apropiada, respecto a mi educación y cortesía en portería, dirección, patio, aula, etc.
                    </p>

                    <p>
                        12.- Acataré la acción reparadora impuesta por la I.E. en caso mi hijo(a) incumpla el Reglamento Interno.
                    </p>

                </div>

            </div>
            <div className="text-right">
                <p>
                    Santa, {
                        new Date().toLocaleDateString("es-PE", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                        })
                    }
                </p>
            </div>
            {/* Firma */}
            <div className="mt-0 flex justify-center items-end gap-16">
                <div className="text-center w-72">

                    <div className="border-t border-black pt-2">
                        {apoderado?.tipoDocumento} N° {apoderado?.numeroDocumento}
                    </div>

                </div>

                {/* Huella digital */}
                <div className="flex flex-col items-center">

                    <div className="w-24 h-28 border-2 border-black rounded-md"></div>

                    <p className="text-sm mt-1">
                        Huella Digital
                    </p>

                </div>

            </div>
        </div>
    );
}