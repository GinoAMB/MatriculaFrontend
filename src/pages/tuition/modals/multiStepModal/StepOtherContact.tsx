import { FaUser } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";

type Props = {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function StepOtherContact({ formData, setFormData }: Props) {
  const handleChange = (field: string, value: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-base font-semibold text-primary flex items-center gap-2">
          <FaUser />
          Datos del Apoderado
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">PARENTESCO</label>
            <select
              className="bg-gray-100 p-2 rounded text-sm w-full cursor-pointer"
              value={formData.otroParentesco || ""}
              onChange={(e) => handleChange("otroParentesco", e.target.value)}
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
            <label className="text-sm text-gray-600 mb-1">NOMBRES</label>
            <input
              className="bg-gray-100 p-2 rounded text-sm w-full"
              value={formData.otroNombre || ""}
              placeholder="Ej. Pedro"
              onChange={(e) => handleChange("otroNombre", e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">APELLIDOS</label>
            <input
              className="bg-gray-100 p-2 rounded text-sm w-full"
              value={formData.otroApellido || ""}
              placeholder="Ej. Gómez"
              onChange={(e) => handleChange("otroApellido", e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">TIPO DOCUMENTO</label>
            <select
              className="bg-gray-100 p-2 rounded text-sm w-full cursor-pointer"
              value={formData.otroTipoDoc || ""}
              onChange={(e) => handleChange("otroTipoDoc", e.target.value)}
            >
              <option value="">Seleccione</option>
              <option value="DNI">DNI</option>
              <option value="Pasaporte">Pasaporte</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">NÚMERO DOCUMENTO</label>
            <input
              className="bg-gray-100 p-2 rounded text-sm w-full"
              value={formData.otroNumDoc || ""}
              placeholder="Ej. 12345678"
              onChange={(e) => handleChange("otroNumDoc", e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">CELULAR</label>
            <input
              className="bg-gray-100 p-2 rounded text-sm w-full"
              value={formData.otroCelular || ""}
              placeholder="Ej. 987654321"
              onChange={(e) => handleChange("otroCelular", e.target.value)}
            />
          </div>

          <div className="flex flex-col col-span-2">
            <label className="text-sm text-gray-600 mb-1">DIRECCIÓN</label>
            <textarea
              className="bg-gray-100 p-2 rounded text-sm w-full resize-none"
              rows={3}
              value={formData.otroDireccion || ""}
              placeholder="Ej. Av. Siempre Viva 123, Lima"
              onChange={(e) => handleChange("otroDireccion", e.target.value)}
            />
          </div>
        </div>
        {/* Mensaje y toggle siempre activo */}
        <div className="flex items-center justify-between bg-gray-50 px-6 py-4 rounded-xl">

          {/* IZQUIERDA: icono + textos */}
          <div className="flex items-center gap-3">
            <IoShieldCheckmark size={20} className="text-primary"/>

            <div className="flex flex-col">
              <span className="text-sm font-bold">
                ¿Es el Apoderado oficial?
              </span>
              <span className="text-xs text-gray-600">
                Esta persona será el contacto principal para comunicaciones académicas.
              </span>
            </div>
          </div>

          {/* DERECHA: toggle */}
          <label className="flex items-center">
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