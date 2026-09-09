import { useState } from "react";
import StepStudent from "./StepStudent";
import StepFamily from "./StepFamily";
import StepOtherContact from "./StepOtherContact";

import type { RegistrarMatriculaRequest } from "@/type/tuition/tuition.type";
import type { Nivel } from "@/type/academic/academin.type";
import type { DocumentType } from "@/type/document/document.type";
import type { Country } from "@/type/country/country.type";
import type { Religion } from "@/type/religion/religion.type";

type Props = {
  onBack: () => void;
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

export default function TuitionForm({ onBack, niveles, loadingNiveles, errorNiveles, documents, loadingDocuments, errorDocuments, countrys, loadingCountrys, errorCountrys, religion, loadingReligion, errorReligion }: Props) {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prev) => prev + 1);

    setTimeout(() => {
      document
        .getElementById("main-scroll-container")
        ?.scrollTo({
          top: 0,
          behavior: "smooth",
        });
    }, 0);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);

    setTimeout(() => {
      document
        .getElementById("main-scroll-container")
        ?.scrollTo({
          top: 0,
          behavior: "smooth",
        });
    }, 0);
  };

  const [formData, setFormData] =
    useState<RegistrarMatriculaRequest>({
      alumno: {
        nombre: "",
        apellidos: "",
        idTipoDocumento: 0,
        numeroDocumento: "",
        direccion: "",
        vieneDeOtraInstitucion: false,
        nombreInstitucionProcedencia: "",
        tieneDiscapacidad: false,
        descripcionDiscapacidad: "",
        fechaNacimiento: "",
        idReligion: 0,
        idPais: 0,
      },

      padre: {
        datos: {
          nombre: "",
          apellidos: "",
          idTipoDocumento: 0,
          numeroDocumento: "",
          direccion: "",
          celular: "",
        },
        idTipoRelacion: 1,
        esApoderado: false,
        esFallecido: false,
      },

      madre: {
        datos: {
          nombre: "",
          apellidos: "",
          idTipoDocumento: 0,
          numeroDocumento: "",
          direccion: "",
          celular: "",
        },
        idTipoRelacion: 2,
        esApoderado: false,
        esFallecido: false,
      },

      apoderadoExterno: {
        datos: {
          nombre: "",
          apellidos: "",
          idTipoDocumento: 0,
          numeroDocumento: "",
          direccion: "",
          celular: "",
        },
        idTipoRelacion: 3,
        esApoderado: false,
        esFallecido: false,
      },

      idSeccion: 0,
      idPeriodo: 1,
      idEstado: 1,
      fechaMatricula: new Date().toISOString(),
    });

  const steps = [
    { id: 1, label: "Datos del Alumno" },
    { id: 2, label: "Datos Familiares" },
    { id: 3, label: "Datos del Apoderado" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm">

      {/* Header */}
      <div className="px-6 py-4">
        <h1 className="text-xl font-bold text-primary">
          Matricular Alumno
        </h1>

        <p className="text-sm text-gray-500">
          IE 33280 San Bartolo
        </p>
      </div>

      {/* Stepper */}
      <div className="px-7 py-2 w-full">
        <div className="flex items-center justify-between w-full md:justify-center md:gap-6">

          {steps.map((item, index) => (
            <div key={item.id} className="flex items-center">

              {/* Círculo + Texto */}
              <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3">

                <div
                  className={`
              w-10 h-10 flex items-center justify-center rounded-xl text-sm font-bold shrink-0
              ${step >= item.id
                      ? "bg-primary text-white"
                      : "bg-gray-300 text-gray-600"
                    }
            `}
                >
                  {item.id}
                </div>

                {/* MÓVIL: solo mostrar el texto del paso actual */}
                {step === item.id && (
                  <span className="md:hidden text-[11px] font-medium text-center text-primary">
                    {item.label}
                  </span>
                )}

                {/* DESKTOP: mostrar todos los textos */}
                <span
                  className={`
              hidden md:block text-sm font-medium
              ${step >= item.id
                      ? "text-primary"
                      : "text-gray-500"
                    }
            `}
                >
                  {item.label}
                </span>

              </div>

              {/* Línea */}
              {index !== steps.length - 1 && (
                <div
                  className={`
              hidden md:block
              h-1 mx-2
              w-16 lg:w-40
              ${step > item.id
                      ? "bg-primary"
                      : "bg-gray-300"
                    }
            `}
                />
              )}

            </div>
          ))}

        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">

        {step === 1 && (
          <StepStudent
            formData={formData}
            setFormData={setFormData}
            niveles={niveles}
            loadingNiveles={loadingNiveles}
            errorNiveles={errorNiveles}

            documents={documents}
            loadingDocuments={loadingDocuments}
            errorDocuments={errorDocuments}

            countrys={countrys}
            loadingCountrys={loadingCountrys}
            errorCountrys={errorCountrys}

            religion={religion}
            loadingReligion={loadingReligion}
            errorReligion={errorReligion}
          />
        )}

        {step === 2 && (
          <StepFamily
            formData={formData}
            setFormData={setFormData}

            documents={documents}
            loadingDocuments={loadingDocuments}
            errorDocuments={errorDocuments}
          />
        )}

        {step === 3 && (
          <StepOtherContact
            formData={formData}
            setFormData={setFormData}

            documents={documents}
            loadingDocuments={loadingDocuments}
            errorDocuments={errorDocuments}
          />
        )}

      </div>

      {/* Footer */}
      <div className="p-4 md:p-6 flex flex-col sm:flex-row gap-3 sm:justify-between">

        <button
          onClick={onBack}
          className="btn-secondary w-full sm:w-auto"
        >
          Cancelar
        </button>

        <div className="flex gap-2 w-full sm:w-auto">

          {step > 1 && (
            <button
              onClick={prevStep}
              className="btn-secondary flex-1 sm:flex-none"
            >
              <span className="sm:hidden">←</span>
              <span className="hidden sm:inline">Atrás</span>
            </button>
          )}

          {step < 3 ? (
            <button
              onClick={nextStep}
              className="btn-tertiary flex-1 sm:flex-none"
            >
              Siguiente
            </button>
          ) : (
            <button
              className="btn-primary flex-1 sm:flex-none"
            >
              <span className="hidden sm:inline">
                Finalizar Matrícula
              </span>

              <span className="sm:hidden">
                Finalizar
              </span>
            </button>
          )}

        </div>

      </div>

    </div>
  );
}