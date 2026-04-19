import { useState } from "react";
import StepStudent from "./StepStudent";
import StepFamily from "./StepFamily";
import StepOtherContact from "./StepOtherContact";
import { HiX } from "react-icons/hi";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MultiStepModal({ isOpen, onClose }: Props) {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    fechaNacimiento: "",
    tipoDocumento: "",
    numeroDocumento: "",
    pais: "",
    nivel: "",
    grado: "",
    seccion: "",
    domicilio: "",
    otraInstitucion: false,
    nombreInstitucion: "",
    discapacidad: false,
    detalleDiscapacidad: "",
    religion: "",

    // =====================
    // PADRE
    // =====================
    padreNombres: "",
    padreApellidos: "",
    padreTipoDoc: "",
    padreNumDoc: "",
    padreCelular: "",
    padreDireccion: "",
    padreApoderado: false,
    padreFallecido: false,

    // =====================
    // MADRE
    // =====================
    madreNombres: "",
    madreApellidos: "",
    madreTipoDoc: "",
    madreNumDoc: "",
    madreCelular: "",
    madreDireccion: "",
    madreApoderado: false,
    madreFallecido: false,

    // =====================
    // OTRO CONTACTO
    // =====================
    otroParentesco: "",
    otroNombre: "",
    otroApellido: "",
    otroTipoDoc: "",
    otroNumDoc: "",
    otroDireccion: "",
    otroCelular: "",
    otroEsApoderado: false,
  });

  if (!isOpen) return null;

  const steps = [
    { id: 1, label: "Datos del Alumno" },
    { id: 2, label: "Datos Familiares" },
    { id: 3, label: "Datos del Apoderado" },
  ];

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white w-full max-w-6xl h-[90vh] rounded-2xl shadow-lg flex flex-col">

        {/* HEADER */}
        <div className="px-7 py-4 bg-primary-transparent2 flex items-center gap-3">

          {/* Título */}
          <div>
            <h1 className="text-xl font-bold text-primary">
              Matricular Alumno
            </h1>
            <p className="text-sm text-gray-500">
              IE 33280 San Bartolo
            </p>
          </div>

          {/* Botón cerrar */}
          <button
            onClick={onClose}
            className="ml-auto text-gray-400 hover:text-black transition cursor-pointer"
          >
            <HiX size={22} />
          </button>

        </div>

        {/* STEPPER */}
        <div className="px-7 py-4 w-full">
          <div className="flex items-center justify-center w-full gap-6">

            {steps.map((item, index) => (
              <div key={item.id} className="flex items-center">

                {/* Círculo + Texto */}
                <div className="flex items-center gap-3">

                  {/* Círculo */}
                  <div
                    className={`
              w-10 h-10 flex items-center justify-center rounded-xl text-sm font-bold shrink-0
              ${step >= item.id ? "bg-primary text-white" : "bg-gray-300 text-gray-600"}
            `}
                  >
                    {item.id}
                  </div>

                  {/* Texto */}
                  <span
                    className={`
              text-sm font-medium whitespace-nowrap
              ${step >= item.id ? "text-primary" : "text-gray-500"}
            `}
                  >
                    {item.label}
                  </span>

                </div>

                {/* Línea */}
                {index !== steps.length - 1 && (
                  <div
                    className={`
              w-50 h-1 mx-2
              ${step > item.id ? "bg-primary" : "bg-gray-300"}
            `}
                  />
                )}

              </div>
            ))}

          </div>
        </div>

        {/* CONTENIDO CON SCROLL */}
        <div className="flex-1 overflow-y-auto cont-scroll p-6">
          {step === 1 && (
            <StepStudent formData={formData} setFormData={setFormData} />
          )}

          {step === 2 && (
            <StepFamily formData={formData} setFormData={setFormData} />
          )}

          {step === 3 && (
            <StepOtherContact formData={formData} setFormData={setFormData} />
          )}
        </div>

        {/* FOOTER FIJO */}
        <div className="p-6 flex justify-between bg-gray-50 rounded-b-xl">
          <button
            disabled={step === 1}
            onClick={() => setStep(step - 1)}
            className="btn-secondary"
          >
            Atrás
          </button>

          {step < 3 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="btn-tertiary"
            >
              Siguiente
            </button>
          ) : (
            <button
              onClick={() => {
                console.log(formData);
                onClose();
              }}
              className="btn-primary"
            >
              Finalizar Matricula
            </button>
          )}
        </div>

      </div>
    </div>
  );
}