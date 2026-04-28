import { FaUser } from "react-icons/fa";

type Props = {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function StepFamily({ formData, setFormData }: Props) {

  const handleChange = (field: string, value: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-8">

      {/* 🔹 PADRE */}
      <div className="flex flex-col gap-4 border-b border-gray-200 pb-6">
        <div className="flex gap-10 justify-start items-center">

          <h2 className="text-base font-semibold text-primary flex items-center gap-2">
            <FaUser />
            Datos del Padre
          </h2>

          {/* TOGGLE: Fallecido */}
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={formData.padreFallecido || false}
              onChange={(e) =>
                handleChange("padreFallecido", e.target.checked)
              }
            />

            <div className="relative">
              <div className={`block w-10 h-6 rounded-full transition ${formData.padreFallecido ? "bg-primary" : "bg-gray-300"}`} />
              <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${formData.padreFallecido ? "translate-x-4" : ""}`} />
            </div>

            <span className="ml-3 text-sm">¿Fallecido?</span>
          </label>

          {/* TOGGLE: Apoderado */}
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={formData.padreApoderado || false}
              disabled={formData.madreApoderado || formData.padreFallecido}
              onChange={(e) => {
                handleChange("padreApoderado", e.target.checked);
                if (e.target.checked) {
                  handleChange("madreApoderado", false);
                }
              }}
            />

            <div
              className={`relative ${(formData.madreApoderado || formData.padreFallecido)
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer"
                }`}
            >
              <div className={`block w-10 h-6 rounded-full transition ${formData.padreApoderado ? "bg-primary" : "bg-gray-300"}`} />
              <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${formData.padreApoderado ? "translate-x-4" : ""}`} />
            </div>

            <span className="ml-3 text-sm">¿Es apoderado?</span>
          </label>
        </div>

        {!formData.padreFallecido && (
          <div className="grid grid-cols-2 gap-4">

            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">NOMBRES</label>
              <input
                className="bg-gray-100 p-2 rounded text-sm w-full"
                value={formData.padreNombres || ""}
                placeholder="Ej. Juan Marte"
                onChange={(e) =>
                  handleChange("padreNombres", e.target.value)
                }
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">APELLIDOS</label>
              <input
                className="bg-gray-100 p-2 rounded text-sm w-full"
                value={formData.padreApellidos || ""}
                placeholder="Ej. Pérez López"
                onChange={(e) =>
                  handleChange("padreApellidos", e.target.value)
                }
              />
            </div>

            {/* Documento */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">TIPO DOCUMENTO</label>
              <select
                className="bg-gray-100 p-2 rounded text-sm w-full cursor-pointer"
                value={formData.padreTipoDoc || ""}
                onChange={(e) =>
                  handleChange("padreTipoDoc", e.target.value)
                }
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
                value={formData.padreNumDoc || ""}
                placeholder="Ej. 12345678"
                onChange={(e) =>
                  handleChange("padreNumDoc", e.target.value)
                }
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">CELULAR</label>
              <input
                className="bg-gray-100 p-2 rounded text-sm w-full"
                value={formData.padreCelular || ""}
                placeholder="Ej. 987654321"
                onChange={(e) =>
                  handleChange("padreCelular", e.target.value)
                }
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">DIRECCIÓN</label>
              <textarea
                className="bg-gray-100 p-2 rounded text-sm w-full resize-none"
                rows={3}
                value={formData.padreDireccion || ""}
                placeholder="Ej. Av. Siempre Viva 123, Lima"
                onChange={(e) =>
                  handleChange("padreDireccion", e.target.value)
                }
              />
            </div>

          </div>
        )}
      </div>

      {/* 🔹 MADRE */}
      <div className="flex flex-col gap-4 border-b border-gray-200 pb-6">
        <div className="flex gap-10 justify-start items-center">

          <h2 className="text-base font-semibold text-primary flex items-center gap-2">
            <FaUser />
            Datos de la Madre
          </h2>

          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={formData.madreFallecido || false}
              onChange={(e) =>
                handleChange("madreFallecido", e.target.checked)
              }
            />

            <div className="relative">
              <div className={`block w-10 h-6 rounded-full transition ${formData.madreFallecido ? "bg-primary" : "bg-gray-300"}`} />
              <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${formData.madreFallecido ? "translate-x-4" : ""}`} />
            </div>

            <span className="ml-3 text-sm">¿Fallecido?</span>
          </label>

          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={formData.madreApoderado || false}
              disabled={formData.madreFallecido || formData.padreApoderado}
              onChange={(e) => {
                handleChange("madreApoderado", e.target.checked);
                if (e.target.checked) {
                  handleChange("padreApoderado", false);
                }
              }}
            />

            <div
              className={`relative ${(formData.madreFallecido || formData.padreApoderado)
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer"
                }`}
            >
              <div className={`block w-10 h-6 rounded-full transition ${formData.madreApoderado ? "bg-primary" : "bg-gray-300"}`} />
              <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${formData.madreApoderado ? "translate-x-4" : ""}`} />
            </div>

            <span className="ml-3 text-sm">¿Es apoderado?</span>
          </label>
        </div>

        {!formData.madreFallecido && (
          <div className="grid grid-cols-2 gap-4">

            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">NOMBRES</label>
              <input
                className="bg-gray-100 p-2 rounded text-sm w-full"
                value={formData.madreNombres || ""}
                placeholder="Ej. María José"
                onChange={(e) =>
                  handleChange("madreNombres", e.target.value)
                }
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">APELLIDOS</label>
              <input
                className="bg-gray-100 p-2 rounded text-sm w-full"
                value={formData.madreApellidos || ""}
                placeholder="Ej. Pérez López"
                onChange={(e) =>
                  handleChange("madreApellidos", e.target.value)
                }
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">TIPO DOCUMENTO</label>
              <select
                className="bg-gray-100 p-2 rounded text-sm w-full cursor-pointer"
                value={formData.madreTipoDoc || ""}
                onChange={(e) =>
                  handleChange("madreTipoDoc", e.target.value)
                }
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
                value={formData.madreNumDoc || ""}
                placeholder="Ej. 12345678"
                onChange={(e) =>
                  handleChange("madreNumDoc", e.target.value)
                }
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">CELULAR</label>
              <input
                className="bg-gray-100 p-2 rounded text-sm w-full"
                value={formData.madreCelular || ""}
                placeholder="Ej. 987654321"
                onChange={(e) =>
                  handleChange("madreCelular", e.target.value)
                }
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">DIRECCIÓN</label>
              <textarea
                className="bg-gray-100 p-2 rounded text-sm w-full resize-none"
                rows={3}
                value={formData.madreDireccion || ""}
                placeholder="Ej. Av. Siempre Viva 123, Lima"
                onChange={(e) =>
                  handleChange("madreDireccion", e.target.value)
                }
              />
            </div>

          </div>
        )}
      </div>

    </div>
  );
}