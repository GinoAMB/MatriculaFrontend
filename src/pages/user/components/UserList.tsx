import { HiOutlinePencil } from "react-icons/hi";
import type { Usuario } from "@/type/user/user.type";

type Props = {
  users: Usuario[];
  onEdit: (user: Usuario) => void;
  onToggleStatus: (user: Usuario) => void;
  loadingStatus: boolean;
};

export default function UserList({
  users,
  onEdit,
  onToggleStatus,
  loadingStatus,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div className="flex items-center gap-3 flex-wrap">
          <h2 className="text-lg font-bold text-primary">
            Lista de Usuarios
          </h2>

          <div className="bg-red-50 px-3 py-0.5 rounded-lg">
            <span className="text-sm text-red-400">
              {users.filter((user) => !user.estado).length} inactivos
            </span>
          </div>
        </div>
      </div>

      {/* Tabla */}
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-100">
          <tr className="text-gray-500">
            <th className="py-2 px-5 hidden sm:table-cell">NOMBRE</th>
            <th className="py-2 text-center">CORREO</th>
            <th className="py-2 text-center hidden sm:table-cell">ROL</th>
            <th className="py-2 text-center hidden sm:table-cell">ESTADO</th>
            <th className="py-2 text-center">ACCIONES</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.idUsuario}>
              <td className="py-2 px-5 hidden sm:table-cell">
                <div className="flex flex-col">
                  <span className="font-medium">
                    {user.nombres} {user.apellidos}
                  </span>
                  <span className="text-xs text-gray-400">
                    ID: #{user.idUsuario}
                  </span>
                </div>
              </td>

              <td className="py-2">
                <div className="flex flex-col">
                  <span className="text-sm px-5 break-all">
                    {user.correo}
                  </span>

                  <div className="flex items-center gap-2 px-5 sm:hidden">
                    <span className="text-xs text-gray-400">
                      ID: #{user.idUsuario}
                    </span>

                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${user.estado
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                        }`}
                    >
                      {user.estado ? "Activo" : "Inactivo"}
                    </span>
                  </div>
                </div>
              </td>

              <td className="py-2 text-center hidden sm:table-cell">
                {user.rol}
              </td>

              <td className="py-2 text-center hidden sm:table-cell">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${user.estado
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                    }`}
                >
                  {user.estado ? "Activo" : "Inactivo"}
                </span>
              </td>

              <td className="py-2">
                <div className="flex sm:flex-row justify-center items-center gap-2">
                  <button
                    onClick={() => onEdit(user)}
                    className="p-2 text-primary border border-transparent hover:bg-blue-50 hover:border-blue-500 rounded-full cursor-pointer"
                  >
                    <HiOutlinePencil size={16} />
                  </button>

                  <button
                    onClick={() => onToggleStatus(user)}
                    disabled={loadingStatus}
                    className={`
                        relative w-10 h-5 flex items-center rounded-full transition-colors
                        ${user.estado ? "bg-primary" : "bg-gray-300"}
                        ${loadingStatus ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
                    `}
                  >
                    <span
                      className={`
                        absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow
                        transform transition-transform
                        ${user.estado ? "translate-x-5" : "translate-x-0"}
                    `}
                    />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}