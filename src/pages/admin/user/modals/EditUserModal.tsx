import { useEffect, useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";

type User = {
    id: number;
    name: string;
    lastname: string;
    email: string;
    password?: string;
    status: boolean;
};

type Props = {
    isOpen: boolean;
    onClose: () => void;
    user: User | null;
    onUpdate: (data: User) => void;
};

export default function EditUserModal({ isOpen, onClose, user, onUpdate }: Props) {
    const [form, setForm] = useState<User>({
        id: 0,
        name: "",
        lastname: "",
        email: "",
        password: "",
        status: true,
    });

    useEffect(() => {
        if (user) {
            setForm({
                ...user,
                password: "", // 👈 nunca cargues la contraseña real
            });
        }
    }, [user]);

    if (!isOpen || !user) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;

        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value,
        });
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
                                    name="name"
                                    value={form.name}
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
                                    name="lastname"
                                    value={form.lastname}
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
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="bg-gray-100 p-2 pl-9 rounded text-sm w-full"
                                    required
                                />
                            </div>
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

                        {/* Toggle */}
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
                                        name="status"
                                        checked={form.status}
                                        onChange={handleChange}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-primary transition-colors duration-300"></div>
                                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                                </label>

                                <span
                                    className={`text-sm font-semibold ${form.status ? "text-primary" : "text-gray-400"
                                        }`}
                                >
                                    {form.status ? "Activo" : "Inactivo"}
                                </span>
                            </div>
                        </div>

                        {/* BOTONES */}
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
                            >
                                Guardar cambios
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}