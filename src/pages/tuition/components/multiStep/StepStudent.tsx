import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";

import type { Nivel } from "@/type/academic/academin.type";
import type { DocumentType } from "@/type/document/document.type";
import type { Country } from "@/type/country/country.type";
import type { Religion } from "@/type/religion/religion.type";

import type {
  RegistrarMatriculaRequest,
  AlumnoRequest,
} from "@/type/tuition/tuition.type";

type Props = {
  formData: RegistrarMatriculaRequest;
  setFormData: React.Dispatch<
    React.SetStateAction<RegistrarMatriculaRequest>
  >;
  niveles: Nivel[];
  loadingNiveles: boolean;
  errorNiveles: string | null;
  documents: DocumentType[];
  loadingDocuments: boolean;
  errorDocuments: string | null;
  countrys: Country[];
  loadingCountrys: boolean;
  errorCountrys: string | null;
  religion: Religion[];
  loadingReligion: boolean;
  errorReligion: string | null;
};

type FieldProps = {
  label: string;
  children: React.ReactNode;
};

function FormField({ label, children }: FieldProps) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      {children}
    </div>
  );
}

type CheckboxFieldProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

function CheckboxField({
  label,
  checked,
  onChange,
}: CheckboxFieldProps) {
  return (
    <div className="flex items-center gap-2 bg-gray-100 p-2 rounded text-sm min-w-0">
      <input
        type="checkbox"
        checked={checked}
        className="cursor-pointer"
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="break-words">{label}</span>
    </div>
  );
}

const inputClass =
  "bg-gray-100 p-2 rounded text-sm w-full";

const selectClass =
  "bg-gray-100 p-2 rounded text-sm w-full cursor-pointer";

const whiteSelectClass =
  "bg-white p-2 rounded text-sm w-full cursor-pointer";

export default function StepStudent({ formData, setFormData, niveles, loadingNiveles, errorNiveles, documents, loadingDocuments, errorDocuments, countrys, loadingCountrys, errorCountrys, religion, loadingReligion, errorReligion }: Props) {

  const [idNivel, setIdNivel] = useState<number>(0);
  const [idGrado, setIdGrado] = useState<number>(0);

  const nivelSeleccionado = niveles.find(
    (n) => n.idNivel === idNivel
  );

  const gradoSeleccionado = nivelSeleccionado?.grados.find(
    (g) => g.idGrado === idGrado
  );

  const updateAlumno = (
    field: keyof AlumnoRequest,
    value: any
  ) => {
    setFormData((prev) => ({
      ...prev,
      alumno: {
        ...prev.alumno,
        [field]: value,
      },
    }));
  };

  return (
    <div className="flex flex-col gap-6">

      <h2 className="text-sm md:text-base font-semibold text-primary border-b border-gray-300 pb-2 flex items-center gap-2">
        <FaUser />
        Identificación del Estudiante
      </h2>

      {/* Datos personales */}
      <div className="flex flex-col gap-4">

        {/* FILA 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FormField label="NOMBRES">
            <input
              placeholder="Ej: Gino"
              className={inputClass}
              value={formData.alumno.nombre}
              onChange={(e) =>
                updateAlumno("nombre", e.target.value)
              }
            />
          </FormField>

          <FormField label="APELLIDOS">
            <input
              placeholder="Ej: Pérez Gómez"
              className={inputClass}
              value={formData.alumno.apellidos}
              onChange={(e) =>
                updateAlumno("apellidos", e.target.value)
              }
            />
          </FormField>

          <FormField label="FECHA DE NACIMIENTO">
            <input
              type="date"
              className={inputClass}
              value={formData.alumno.fechaNacimiento}
              onChange={(e) =>
                updateAlumno("fechaNacimiento", e.target.value)
              }
            />
          </FormField>
        </div>

        {/* FILA 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FormField label="TIPO DE DOCUMENTO">
            <>
              <select
                className={selectClass}
                value={formData.alumno.idTipoDocumento}
                disabled={loadingDocuments || !!errorDocuments}
                onChange={(e) =>
                  updateAlumno(
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
          </FormField>

          <FormField label="NÚMERO DE DOCUMENTO">
            <input
              placeholder="Ej: 12345678"
              className={inputClass}
              value={formData.alumno.numeroDocumento}
              onChange={(e) =>
                updateAlumno("numeroDocumento", e.target.value)
              }
            />
          </FormField>

          <FormField label="PAÍS">
            <>
              <select
                className={selectClass}
                value={formData.alumno.idPais}
                disabled={loadingCountrys || !!errorCountrys}
                onChange={(e) =>
                  updateAlumno(
                    "idPais",
                    Number(e.target.value)
                  )
                }
              >
                <option value={0}>
                  {loadingCountrys ? "Cargando..." : "Seleccione"}
                </option>

                {countrys.map((country) => (
                  <option
                    key={country.idPais}
                    value={country.idPais}
                  >
                    {country.nombre}
                  </option>
                ))}
              </select>

              {errorCountrys && (
                <p className="text-xs text-red-500 mt-1">
                  {errorCountrys}
                </p>
              )}
            </>
          </FormField>
        </div>
      </div>

      <div className="flex flex-col gap-4 bg-primary-transparent2 p-3 rounded-xl">

        <h3 className="font-semibold text-primary flex items-center gap-2">
          <HiAcademicCap size={20} />
          Asignación Académica
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* NIVEL */}
          <FormField label="NIVEL">
            <>
              <select
                className={whiteSelectClass}
                value={idNivel}
                onChange={(e) => {
                  const nivelId = Number(e.target.value);

                  setIdNivel(nivelId);
                  setIdGrado(0);

                  setFormData((prev) => ({
                    ...prev,
                    idSeccion: 0,
                  }));
                }}
                disabled={loadingNiveles || !!errorNiveles}
              >
                <option value={0}>
                  {loadingNiveles ? "Cargando..." : "Seleccione"}
                </option>

                {niveles.map((nivel) => (
                  <option
                    key={nivel.idNivel}
                    value={nivel.idNivel}
                  >
                    {nivel.nombre}
                  </option>
                ))}
              </select>

              {errorNiveles && (
                <p className="text-xs text-red-500 mt-1">
                  {errorNiveles}
                </p>
              )}
            </>
          </FormField>

          {/* GRADO */}
          <FormField label="GRADO">
            <select
              className={whiteSelectClass}
              value={idGrado}
              disabled={!idNivel}
              onChange={(e) => {
                const gradoId = Number(e.target.value);

                setIdGrado(gradoId);

                setFormData((prev) => ({
                  ...prev,
                  idSeccion: 0,
                }));
              }}
            >
              <option value={0}>Seleccione</option>

              {nivelSeleccionado?.grados.map((grado) => (
                <option
                  key={grado.idGrado}
                  value={grado.idGrado}
                >
                  {grado.nombre}
                </option>
              ))}
            </select>
          </FormField>

          {/* SECCIÓN */}
          <FormField label="SECCIÓN">
            <select
              className={whiteSelectClass}
              value={formData.idSeccion}
              disabled={!idGrado}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  idSeccion: Number(e.target.value),
                }))
              }
            >
              <option value={0}>Seleccione</option>

              {gradoSeleccionado?.secciones.map((seccion) => (
                <option
                  key={seccion.idSeccion}
                  value={seccion.idSeccion}
                >
                  {seccion.nombre}
                </option>
              ))}
            </select>
          </FormField>

        </div>
      </div>
      {/*  Otros datos */}
      <div className="flex flex-col gap-4">

        {/* FILA 1: Domicilio + Religión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Domicilio */}
          <FormField label="DOMICILIO">
            <textarea
              placeholder="Ej: Av. Los Olivos 123"
              className="bg-gray-100 p-2 rounded text-sm w-full resize-none"
              rows={3}
              value={formData.alumno.direccion}
              onChange={(e) =>
                updateAlumno("direccion", e.target.value)
              }
            />
          </FormField>

          {/* Religión */}
          <FormField label="RELIGIÓN">
            <>
              <select
                className={selectClass}
                value={formData.alumno.idReligion}
                disabled={loadingReligion || !!errorReligion}
                onChange={(e) =>
                  updateAlumno(
                    "idReligion",
                    Number(e.target.value)
                  )
                }
              >
                <option value={0}>
                  {loadingReligion ? "Cargando..." : "Seleccione"}
                </option>
                {religion.map((religion) => (
                  <option
                    key={religion.idReligion}
                    value={religion.idReligion}
                  >
                    {religion.nombre}
                  </option>
                ))}
              </select>
              {errorReligion && (
                <p className="text-xs text-red-500 mt-1">
                  {errorReligion}
                </p>
              )}
            </>
          </FormField>

        </div>

        {/* FILA 2: Checkboxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Otra institución */}
          <CheckboxField
            label="¿VIENE DE OTRA INSTITUCIÓN?"
            checked={formData.alumno.vieneDeOtraInstitucion}
            onChange={(value) =>
              updateAlumno(
                "vieneDeOtraInstitucion",
                value
              )
            }
          />

          {/* Discapacidad */}
          <CheckboxField
            label="¿PRESENTA DISCAPACIDAD?"
            checked={formData.alumno.tieneDiscapacidad}
            onChange={(value) =>
              updateAlumno(
                "tieneDiscapacidad",
                value
              )
            }
          />

        </div>

        {/* Condicionales */}
        {formData.alumno.vieneDeOtraInstitucion && (
          <FormField label="INSTITUCIÓN ANTERIOR">
            <input
              placeholder="Ej: Colegio San Martín"
              className={inputClass}
              value={formData.alumno.nombreInstitucionProcedencia}
              onChange={(e) =>
                updateAlumno(
                  "nombreInstitucionProcedencia",
                  e.target.value
                )
              }
            />
          </FormField>
        )}

        {formData.alumno.tieneDiscapacidad && (
          <FormField label="DETALLE DE DISCAPACIDAD">
            <input
              placeholder="Ej: Visual, auditiva, etc."
              className={inputClass}
              value={formData.alumno.descripcionDiscapacidad}
              onChange={(e) =>
                updateAlumno(
                  "descripcionDiscapacidad",
                  e.target.value
                )
              }
            />
          </FormField>
        )}

      </div>
    </div>
  );
}

