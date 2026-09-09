import { FaUser } from "react-icons/fa";

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

export default function StepFamily({ formData, setFormData, documents, loadingDocuments, errorDocuments }: Props) {

  // =========================
  // ACTUALIZAR PADRE
  // =========================

  const updatePadre = (
    field: keyof FamiliarRequest,
    value: any
  ) => {
    setFormData((prev) => ({
      ...prev,
      padre: {
        ...prev.padre,
        [field]: value,
      },
    }));
  };

  const updatePadreDatos = (
    field: keyof PersonaRequest,
    value: any
  ) => {
    setFormData((prev) => ({
      ...prev,
      padre: {
        ...prev.padre,
        datos: {
          ...prev.padre.datos,
          [field]: value,
        },
      },
    }));
  };

  // =========================
  // ACTUALIZAR MADRE
  // =========================

  const updateMadre = (
    field: keyof FamiliarRequest,
    value: any
  ) => {
    setFormData((prev) => ({
      ...prev,
      madre: {
        ...prev.madre,
        [field]: value,
      },
    }));
  };

  const updateMadreDatos = (
    field: keyof PersonaRequest,
    value: any
  ) => {
    setFormData((prev) => ({
      ...prev,
      madre: {
        ...prev.madre,
        datos: {
          ...prev.madre.datos,
          [field]: value,
        },
      },
    }));
  };

  return (
    <div className="flex flex-col gap-8 px-1 sm:px-0">

      {/* 🔹 PADRE */}
      <div className="flex flex-col gap-4 border-b border-gray-200 pb-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-10">

          <h2 className="text-base font-semibold text-primary flex items-center gap-2">
            <FaUser />
            Datos del Padre
          </h2>

          {/* TOGGLE: Fallecido */}
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={formData.padre.esFallecido}
              onChange={(e) =>
                updatePadre(
                  "esFallecido",
                  e.target.checked
                )
              }
            />

            <div className="relative">
              <div
                className={`block w-10 h-6 rounded-full transition ${formData.padre.esFallecido
                  ? "bg-primary"
                  : "bg-gray-300"
                  }`}
              />

              <div
                className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${formData.padre.esFallecido
                  ? "translate-x-4"
                  : ""
                  }`}
              />
            </div>

            <span className="ml-2 text-xs sm:text-sm">¿Fallecido?</span>
          </label>

          {/* TOGGLE: Apoderado */}
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={formData.padre.esApoderado}
              disabled={
                formData.madre.esApoderado ||
                formData.padre.esFallecido
              }
              onChange={(e) => {
                updatePadre(
                  "esApoderado",
                  e.target.checked
                );

                if (e.target.checked) {
                  updateMadre("esApoderado", false);
                }
              }}
            />

            <div
              className={`relative ${formData.madre.esApoderado ||
                formData.padre.esFallecido
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
                }`}
            >
              <div className={`block w-10 h-6 rounded-full transition ${formData.padre.esApoderado ? "bg-primary" : "bg-gray-300"}`} />
              <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${formData.padre.esApoderado ? "translate-x-4" : ""}`} />
            </div>

            <span className="ml-2 text-xs sm:text-sm">¿Es apoderado?</span>
          </label>
        </div>

        {!formData.padre.esFallecido && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">NOMBRES</label>
              <input
                className="bg-gray-100 px-3 py-3 rounded-lg text-sm w-full"
                value={formData.padre.datos.nombre}
                placeholder="Ej. Juan Marte"
                onChange={(e) =>
                  updatePadreDatos(
                    "nombre",
                    e.target.value
                  )
                }
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">APELLIDOS</label>
              <input
                className="bg-gray-100 px-3 py-3 rounded-lg text-sm w-full"
                value={formData.padre.datos.apellidos}
                placeholder="Ej. Pérez López"
                onChange={(e) =>
                  updatePadreDatos(
                    "apellidos",
                    e.target.value
                  )
                }
              />
            </div>

            {/* Documento */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">TIPO DOCUMENTO</label>
              <>
                <select
                  className="bg-gray-100 px-3 py-3 rounded-lg text-sm w-full cursor-pointer"
                  value={formData.padre.datos.idTipoDocumento}
                  disabled={loadingDocuments || !!errorDocuments}
                  onChange={(e) =>
                    updatePadreDatos(
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
              <label className="text-sm text-gray-600 mb-1">NÚMERO DOCUMENTO</label>
              <input
                className="bg-gray-100 px-3 py-3 rounded-lg text-sm w-full"
                value={formData.padre.datos.numeroDocumento}
                placeholder="Ej. 12345678"
                onChange={(e) =>
                  updatePadreDatos(
                    "numeroDocumento",
                    e.target.value
                  )
                }
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">CELULAR</label>
              <input
                className="bg-gray-100 px-3 py-3 rounded-lg text-sm w-full"
                value={formData.padre.datos.celular}
                placeholder="Ej. 987654321"
                onChange={(e) =>
                  updatePadreDatos(
                    "celular",
                    e.target.value
                  )
                }
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="text-sm text-gray-600 mb-1">DIRECCIÓN</label>
              <textarea
                className="bg-gray-100 p-2 rounded text-sm w-full resize-none"
                rows={3}
                value={formData.padre.datos.direccion}
                placeholder="Ej. Av. Siempre Viva 123, Lima"
                onChange={(e) =>
                  updatePadreDatos(
                    "direccion",
                    e.target.value
                  )
                }
              />
            </div>

          </div>
        )}
      </div>

      {/* 🔹 MADRE */}
      <div className="flex flex-col gap-4 border-b border-gray-200 pb-6">
        <div className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-4 md:gap-6">

          <h2 className="text-base font-semibold text-primary flex items-center gap-2">
            <FaUser />
            Datos de la Madre
          </h2>

          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={formData.madre.esFallecido}
              onChange={(e) =>
                updateMadre(
                  "esFallecido",
                  e.target.checked
                )
              }
            />

            <div className="relative">
              <div className={`block w-10 h-6 rounded-full transition ${formData.madre.esFallecido ? "bg-primary" : "bg-gray-300"}`} />
              <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${formData.madre.esFallecido ? "translate-x-4" : ""}`} />
            </div>

            <span className="ml-2 text-xs sm:text-sm">¿Fallecido?</span>
          </label>

          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={formData.madre.esApoderado}
              disabled={
                formData.madre.esFallecido ||
                formData.padre.esApoderado
              }
              onChange={(e) => {
                updateMadre(
                  "esApoderado",
                  e.target.checked
                );

                if (e.target.checked) {
                  updatePadre("esApoderado", false);
                }
              }}
            />

            <div
              className={`relative ${formData.madre.esFallecido ||
                formData.padre.esApoderado
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
                }`}
            >
              <div className={`block w-10 h-6 rounded-full transition ${formData.madre.esApoderado ? "bg-primary" : "bg-gray-300"}`} />
              <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${formData.madre.esApoderado ? "translate-x-4" : ""}`} />
            </div>

            <span className="ml-2 text-xs sm:text-sm">¿Es apoderado?</span>
          </label>
        </div>

        {!formData.madre.esFallecido && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">NOMBRES</label>
              <input
                className="bg-gray-100 px-3 py-3 rounded-lg text-sm w-full"
                value={formData.madre.datos.nombre}
                placeholder="Ej. María José"
                onChange={(e) =>
                  updateMadreDatos(
                    "nombre",
                    e.target.value
                  )
                }
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">APELLIDOS</label>
              <input
                className="bg-gray-100 px-3 py-3 rounded-lg text-sm w-full"
                value={formData.madre.datos.apellidos}
                placeholder="Ej. Pérez López"
                onChange={(e) =>
                  updateMadreDatos(
                    "apellidos",
                    e.target.value
                  )
                }
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">TIPO DOCUMENTO</label>
              <>
                <select
                  className="bg-gray-100 px-3 py-3 rounded-lg text-sm w-full cursor-pointer"
                  value={formData.madre.datos.idTipoDocumento}
                  disabled={loadingDocuments || !!errorDocuments}
                  onChange={(e) =>
                    updateMadreDatos(
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
              <label className="text-sm text-gray-600 mb-1">NÚMERO DOCUMENTO</label>
              <input
                className="bg-gray-100 px-3 py-3 rounded-lg text-sm w-full"
                value={formData.madre.datos.numeroDocumento}
                placeholder="Ej. 12345678"
                onChange={(e) =>
                  updateMadreDatos(
                    "numeroDocumento",
                    e.target.value
                  )
                }
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">CELULAR</label>
              <input
                className="bg-gray-100 px-3 py-3 rounded-lg text-sm w-full"
                value={formData.madre.datos.celular}
                placeholder="Ej. 987654321"
                onChange={(e) =>
                  updateMadreDatos(
                    "celular",
                    e.target.value
                  )
                }
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="text-sm text-gray-600 mb-1">DIRECCIÓN</label>
              <textarea
                className="bg-gray-100 p-2 rounded text-sm w-full resize-none"
                rows={3}
                value={formData.madre.datos.direccion}
                placeholder="Ej. Av. Siempre Viva 123, Lima"
                onChange={(e) =>
                  updateMadreDatos(
                    "direccion",
                    e.target.value
                  )
                }
              />
            </div>

          </div>
        )}
      </div>

    </div>
  );
}