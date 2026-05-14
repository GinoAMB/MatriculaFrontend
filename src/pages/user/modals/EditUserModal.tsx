import { useEffect, useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import type { Usuario } from "@/type/user/user.type";
import type { Role } from "@/type/role/rol.type";

type UsuarioForm = {
  idUsuario: number;
  nombre: string;
  apellidos: string;
  correo: string;
  idRol: number;
  password?: string;
  estado: boolean;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user: Usuario | null;
  onUpdate: (data: UsuarioForm) => void;
  loading: boolean;

  roles: Role[];
  loadingRoles: boolean;
};

export default function EditUserModal({
  isOpen,
  onClose,
  user,
  onUpdate,
  loading,
  roles,
  loadingRoles,
}: Props) {
  const [form, setForm] = useState<UsuarioForm>({
    idUsuario: 0,
    nombre: "",
    apellidos: "",
    correo: "",
    password: "",
    estado: true,
    idRol: 0,
  });

  useEffect(() => {
    if (user) {
      setForm({
        idUsuario: user.idUsuario,
        nombre: user.nombres, // mapping correcto
        apellidos: user.apellidos,
        correo: user.correo,
        estado: user.estado,
        idRol: user.idRol, // si tienes endpoint detalle, aquí va user.idRol
        password: "",
      });
    }
  }, [user]);

  if (!isOpen || !user) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;

      setForm((prev) => ({
        ...prev,
        [name]: checked,
      }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: name === "idRol" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const dataToSend = { ...form };

    if (!dataToSend.password) {
      delete dataToSend.password;
    }

    onUpdate(dataToSend);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg flex flex-col gap-4 max-h-[90vh] overflow-y-auto">

        {/* HEADER */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-primary">
            Editar Información del Usuario
          </h2>
          <p className="text-sm text-gray-600">
            Modifique los accesos y los datos personales del usuario.
          </p>
        </div>

        {/* FORM */}
        <div className="px-6 py-2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">

            {/* Nombres y Apellidos */}
            <div className="flex flex-col sm:flex-row gap-3">

              <div className="flex flex-col w-full sm:w-1/2">
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Nombres
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  className="bg-gray-100 p-2 rounded text-sm w-full"
                  required
                />
              </div>

              <div className="flex flex-col w-full sm:w-1/2">
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Apellidos
                </label>
                <input
                  type="text"
                  name="apellidos"
                  value={form.apellidos}
                  onChange={handleChange}
                  className="bg-gray-100 p-2 rounded text-sm w-full"
                  required
                />
              </div>

            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Correo
              </label>

              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

                <input
                  type="email"
                  name="correo"
                  value={form.correo}
                  onChange={handleChange}
                  className="bg-gray-100 p-2 pl-9 rounded text-sm w-full"
                  required
                />
              </div>
            </div>

            {/* Rol */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Rol
              </label>

              <select
                name="idRol"
                value={form.idRol}
                onChange={handleChange}
                className="bg-gray-100 p-2 rounded text-sm w-full"
              >
                {loadingRoles ? (
                  <option disabled>Cargando roles...</option>
                ) : (
                  roles.map((rol) => (
                    <option key={rol.idRol} value={rol.idRol}>
                      {rol.nombre}
                    </option>
                  ))
                )}
              </select>
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Nueva contraseña
              </label>

              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

                <input
                  type="password"
                  name="password"
                  placeholder="*************"
                  value={form.password || ""}
                  onChange={handleChange}
                  className="bg-gray-100 p-2 pl-9 rounded text-sm w-full"
                />
              </div>

              <span className="text-xs text-gray-400 mt-1">
                Deje este campo vacío para mantener la contraseña actual.
              </span>
            </div>

            {/* Estado */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-gray-100 p-3 rounded">

              <div>
                <p className="font-semibold text-gray-700 text-sm">
                  Estado de la cuenta
                </p>
                <p className="text-xs text-gray-400">
                  Permitir acceso al sistema.
                </p>
              </div>

              <div className="flex items-center gap-3">

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="estado"
                    checked={form.estado}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-primary transition-colors duration-300"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                </label>

                <span className={`text-sm font-semibold ${
                  form.estado ? "text-primary" : "text-gray-400"
                }`}>
                  {form.estado ? "Activo" : "Inactivo"}
                </span>

              </div>
            </div>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-2 py-4 w-full">

              <button
                type="button"
                onClick={onClose}
                className="btn-secondary w-full"
              >
                Cancelar
              </button>

              <button
                type="submit"
                className="btn-primary w-full"
                disabled={loading}
              >
                {loading ? "Guardando..." : "Guardar cambios"}
              </button>

            </div>

          </form>
        </div>

      </div>
    </div>
  );
}