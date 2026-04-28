import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";

type Props = {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function StepStudent({ formData, setFormData }: Props) {
  const [comesFromOther, setComesFromOther] = useState(formData.otraInstitucion || false);
  const [hasDisability, setHasDisability] = useState(formData.discapacidad || false);

  return (
    <div className="flex flex-col gap-6">

      <h2 className="text-base font-semibold text-primary border-b border-gray-300 pb-2 flex items-center gap-2">
        <FaUser />
        Identificación del Estudiante
      </h2>

      {/* 🔹 Datos personales */}
      <div className="flex flex-col gap-4">

        {/* FILA 1 */}
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">NOMBRES</label>
            <input
              placeholder="Ej: Gino"
              className="bg-gray-100 p-2 rounded text-sm w-full"
              value={formData.nombres}
              onChange={(e) =>
                setFormData({ ...formData, nombres: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">APELLIDOS</label>
            <input
              placeholder="Ej: Pérez Gómez"
              className="bg-gray-100 p-2 rounded text-sm w-full"
              value={formData.apellidos}
              onChange={(e) =>
                setFormData({ ...formData, apellidos: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              FECHA DE NACIMIENTO
            </label>
            <input
              type="date"
              className="bg-gray-100 p-2 rounded text-sm w-full"
              value={formData.fechaNacimiento}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  fechaNacimiento: e.target.value,
                })
              }
            />
          </div>
        </div>

        {/* FILA 2 */}
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              TIPO DE DOCUMENTO
            </label>
            <select
              className="bg-gray-100 p-2 rounded text-sm w-full cursor-pointer"
              value={formData.tipoDocumento}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  tipoDocumento: e.target.value,
                })
              }
            >
              <option value="">Seleccione</option>
              <option>DNI</option>
              <option>Pasaporte</option>
              <option>Carnet de extranjería</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              NÚMERO DE DOCUMENTO
            </label>
            <input
              placeholder="Ej: 12345678"
              className="bg-gray-100 p-2 rounded text-sm w-full"
              value={formData.numeroDocumento}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  numeroDocumento: e.target.value,
                })
              }
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">PAÍS</label>
            <select
              className="bg-gray-100 p-2 rounded text-sm w-full cursor-pointer"
              value={formData.pais}
              onChange={(e) =>
                setFormData({ ...formData, pais: e.target.value })
              }
            >
              <option value="">Seleccione</option>
              <option>Perú</option>
              <option>Chile</option>
              <option>Argentina</option>
            </select>
          </div>
        </div>
      </div>

      {/* 🔹 Asignación Académica */}
      <div className="flex flex-col gap-4 bg-primary-transparent2 p-3 rounded-xl">
        <h3 className="font-semibold text-primary flex items-center gap-2">
          <HiAcademicCap size={20} /> Asignación Académica
        </h3>

        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">NIVEL</label>
            <select
              className="bg-white p-2 rounded text-sm w-full cursor-pointer"
              value={formData.nivel}
              onChange={(e) =>
                setFormData({ ...formData, nivel: e.target.value })
              }
            >
              <option value="">Seleccione</option>
              <option>Inicial</option>
              <option>Primaria</option>
              <option>Secundaria</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">GRADO</label>
            <select
              className="bg-white p-2 rounded text-sm w-full cursor-pointer"
              value={formData.grado}
              onChange={(e) =>
                setFormData({ ...formData, grado: e.target.value })
              }
            >
              <option value="">Seleccione</option>
              <option>1ro</option>
              <option>2do</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">SECCIÓN</label>
            <select
              className="bg-white p-2 rounded text-sm w-full cursor-pointer"
              value={formData.seccion}
              onChange={(e) =>
                setFormData({ ...formData, seccion: e.target.value })
              }
            >
              <option value="">Seleccione</option>
              <option>A</option>
              <option>B</option>
            </select>
          </div>
        </div>
      </div>
      {/* 🔹 Otros datos */}
      <div className="flex flex-col gap-4">

        {/* FILA 1: Domicilio + Religión */}
        <div className="grid grid-cols-2 gap-4">

          {/* Domicilio */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">DOMICILIO</label>
            <textarea
              placeholder="Ej: Av. Los Olivos 123"
              className="bg-gray-100 p-2 rounded text-sm w-full resize-none"
              rows={3}
              value={formData.domicilio}
              onChange={(e) =>
                setFormData({ ...formData, domicilio: e.target.value })
              }
            />
          </div>

          {/* Religión */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">RELIGIÓN</label>
            <select
              className="bg-gray-100 p-2 rounded text-sm w-full cursor-pointer"
              value={formData.religion}
              onChange={(e) =>
                setFormData({ ...formData, religion: e.target.value })
              }
            >
              <option value="">Seleccione</option>
              <option>Católica</option>
              <option>Evangélica</option>
              <option>Otra</option>
            </select>
          </div>

        </div>

        {/* FILA 2: Checkboxes */}
        <div className="grid grid-cols-2 gap-4">

          {/* Otra institución */}
          <div className="flex items-center gap-2 bg-gray-100 p-2 rounded text-sm">
            <input
              type="checkbox"
              checked={comesFromOther}
              onChange={(e) => {
                setComesFromOther(e.target.checked);
                setFormData({
                  ...formData,
                  otraInstitucion: e.target.checked,
                });
              }}
            />
            <span>¿VIENE DE OTRA INSTITUCIÓN?</span>
          </div>

          {/* Discapacidad */}
          <div className="flex items-center gap-2 bg-gray-100 p-2 rounded text-sm">
            <input
              type="checkbox"
              checked={hasDisability}
              onChange={(e) => {
                setHasDisability(e.target.checked);
                setFormData({
                  ...formData,
                  discapacidad: e.target.checked,
                });
              }}
            />
            <span>¿PRESENTA DISCAPACIDAD?</span>
          </div>

        </div>

        {/* Condicionales */}
        {comesFromOther && (
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">
              INSTITUCIÓN ANTERIOR
            </label>
            <input
              placeholder="Ej: Colegio San Martín"
              className="bg-gray-100 p-2 rounded text-sm w-full"
              value={formData.nombreInstitucion}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  nombreInstitucion: e.target.value,
                })
              }
            />
          </div>
        )}

        {hasDisability && (
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">
              DETALLE DE DISCAPACIDAD
            </label>
            <input
              placeholder="Ej: Visual, auditiva, etc."
              className="bg-gray-100 p-2 rounded text-sm w-full"
              value={formData.detalleDiscapacidad}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  detalleDiscapacidad: e.target.value,
                })
              }
            />
          </div>
        )}

      </div>
    </div>
  );
}