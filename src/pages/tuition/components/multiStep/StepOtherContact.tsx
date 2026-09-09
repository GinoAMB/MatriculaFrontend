import { FaUser } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";

import type {
  RegistrarMatriculaRequest,
  FamiliarRequest,
  PersonaRequest,
} from "@/type/tuition/tuition.type";
import type { DocumentType } from "@/type/document/document.type";

type Props = {
  formData: RegistrarMatriculaRequest;
  setFormData: React.Dispatch<
    React.SetStateAction<RegistrarMatriculaRequest>
  >;
  documents: DocumentType[];
  loadingDocuments: boolean;
  errorDocuments: string | null;
};

export default function StepOtherContact({
  formData,
  setFormData,
  documents,
  loadingDocuments,
  errorDocuments,
}: Props) {
  // =========================
  // ACTUALIZAR APODERADO
  // =========================

  const updateApoderado = (
    field: keyof FamiliarRequest,
    value: any
  ) => {
    setFormData((prev) => ({
      ...prev,
      apoderadoExterno: {
        ...prev.apoderadoExterno,
        [field]: value,
      },
    }));
  };

  const updateApoderadoDatos = (
    field: keyof PersonaRequest,
    value: any
  ) => {
    setFormData((prev) => ({
      ...prev,
      apoderadoExterno: {
        ...prev.apoderadoExterno,
        datos: {
          ...prev.apoderadoExterno.datos,
          [field]: value,
        },
      },
    }));
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-base font-semibold text-primary flex items-center gap-2">
          <FaUser />
          Datos del Apoderado
        </h2>

        {/* Formulario */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">
              PARENTESCO
            </label>

            <select
              className="bg-gray-100 p-3 rounded text-sm w-full cursor-pointer"
              value={formData.apoderadoExterno.idTipoRelacion}
              onChange={(e) =>
                updateApoderado(
                  "idTipoRelacion",
                  Number(e.target.value)
                )
              }
            >
              <option value="">Seleccione</option>
              <option value="Tío/a">Tío/a</option>
              <option value="Hermano/a">Hermano/a</option>
              <option value="Abuelo/a">Abuelo/a</option>
              <option value="Tutor/a">Tutor/a</option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">
              NOMBRES
            </label>

            <input
              className="bg-gray-100 p-3 rounded text-sm w-full"
              value={formData.apoderadoExterno.datos.nombre}
              placeholder="Ej. Pedro"
              onChange={(e) =>
                updateApoderadoDatos(
                  "nombre",
                  e.target.value
                )
              }
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">
              APELLIDOS
            </label>

            <input
              className="bg-gray-100 p-3 rounded text-sm w-full"
              value={formData.apoderadoExterno.datos.apellidos}
              placeholder="Ej. Gómez"
              onChange={(e) =>
                updateApoderadoDatos(
                  "apellidos",
                  e.target.value
                )
              }
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">
              TIPO DOCUMENTO
            </label>

            <>
              <select
                className="bg-gray-100 p-3 rounded text-sm w-full cursor-pointer"
                value={formData.apoderadoExterno.datos.idTipoDocumento}
                disabled={loadingDocuments || !!errorDocuments}
                onChange={(e) =>
                  updateApoderadoDatos(
                    "idTipoDocumento",
                    Number(e.target.value)
                  )
                }
              >
                <option value={0}>
                  {loadingDocuments ? "Cargando..." : "Seleccione"}
                </option>

                {documents.map((document) => (
                  <option
                    key={document.idTipo}
                    value={document.idTipo}
                  >
                    {document.nombre}
                  </option>
                ))}
              </select>

              {errorDocuments && (
                <p className="text-xs text-red-500 mt-1">
                  {errorDocuments}
                </p>
              )}
            </>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">
              NÚMERO DOCUMENTO
            </label>

            <input
              className="bg-gray-100 p-3 rounded text-sm w-full"
              value={
                formData.apoderadoExterno.datos.numeroDocumento
              }
              placeholder="Ej. 12345678"
              onChange={(e) =>
                updateApoderadoDatos(
                  "numeroDocumento",
                  e.target.value
                )
              }
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">
              CELULAR
            </label>

            <input
              className="bg-gray-100 p-3 rounded text-sm w-full"
              value={formData.apoderadoExterno.datos.celular}
              placeholder="Ej. 987654321"
              onChange={(e) =>
                updateApoderadoDatos(
                  "celular",
                  e.target.value
                )
              }
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="text-sm text-gray-600 mb-1">
              DIRECCIÓN
            </label>

            <textarea
              className="bg-gray-100 p-3 rounded text-sm w-full resize-none"
              rows={3}
              value={formData.apoderadoExterno.datos.direccion}
              placeholder="Ej. Av. Siempre Viva 123, Lima"
              onChange={(e) =>
                updateApoderadoDatos(
                  "direccion",
                  e.target.value
                )
              }
            />
          </div>
        </div>

        {/* Apoderado Oficial */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-gray-50 px-4 md:px-6 py-4 rounded-xl">
          <div className="flex items-start md:items-center gap-3">
            <IoShieldCheckmark
              size={20}
              className="text-primary shrink-0"
            />

            <div className="flex flex-col">
              <span className="text-sm font-bold">
                ¿Es el Apoderado oficial?
              </span>

              <span className="text-xs text-gray-600">
                Esta persona será el contacto principal para
                comunicaciones académicas.
              </span>
            </div>
          </div>

          <label className="flex items-center justify-end md:justify-center">
            <input
              type="checkbox"
              className="sr-only"
              checked={true}
              readOnly
            />

            <div className="relative">
              <div className="block w-10 h-6 rounded-full bg-primary transition" />
              <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition translate-x-4" />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}