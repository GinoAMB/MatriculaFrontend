import { useState } from "react";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

import {
    normalizeName,
    normalizeText,
    validateName,
    validateLastname,
    validateEmail,
    validatePassword,
    validateRole,
} from "@/utils/validations/user.validation";

import type { Role } from "@/type/role/rol.type";

type Props = {
    isOpen: boolean;
    onClose: () => void;

    roles: Role[];
    loadingRoles: boolean;

    loading: boolean;

    onCreate: (data: {
        name: string;
        lastname: string;
        email: string;
        password: string;
        role: string;
    }) => void;
};

export default function CreateUserModal({
    isOpen,
    onClose,
    onCreate,
    roles,
    loadingRoles,
    loading
}: Props) {

    const [form, setForm] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
        role: "",
    });

    if (!isOpen) return null;

    // 🔹 Validaciones
    const nameError = validateName(form.name);
    const lastnameError = validateLastname(form.lastname);
    const emailError = validateEmail(form.email);
    const passwordError = validatePassword(form.password);
    const roleError = validateRole(form.role);

    const hasErrors =
        nameError ||
        lastnameError ||
        emailError ||
        passwordError ||
        roleError;

    const resetForm = () => {
        setForm({
            name: "",
            lastname: "",
            email: "",
            password: "",
            role: "",
        });
    };

    const handleClose = () => {
        resetForm();
        onClose();
    };

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();

        if (hasErrors) return;

        onCreate(form);

        handleClose();
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-2 sm:p-4">

            <div className="bg-white w-full max-w-md rounded-xl shadow-lg flex flex-col gap-4 max-h-[90vh] overflow-y-auto">

                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-primary">
                        Registrar nuevo usuario
                    </h2>

                    <p className="text-sm text-gray-600">
                        Complete la información para el nuevo acceso al sistema.
                    </p>
                </div>

                {/* Form */}
                <div className="px-6 py-2">

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-3"
                    >

                        {/* Nombres y Apellidos */}
                        <div className="flex flex-col sm:flex-row gap-3">

                            {/* Nombre */}
                            <div className="flex flex-col w-full sm:w-1/2">

                                <label className="text-sm font-medium text-gray-700 mb-1">
                                    Nombres
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Ej: JUAN"
                                    value={form.name}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            name: normalizeName(e.target.value),
                                        })
                                    }
                                    className={`
                                        bg-gray-100 p-2 rounded text-sm w-full uppercase border
                                        ${nameError && form.name.length > 0
                                            ? "border-red-500"
                                            : "border-transparent"}
                                    `}
                                    maxLength={50}
                                    required
                                />

                                {nameError && form.name.length > 0 && (
                                    <span className="text-xs text-red-500 mt-1">
                                        {nameError}
                                    </span>
                                )}

                            </div>

                            {/* Apellidos */}
                            <div className="flex flex-col w-full sm:w-1/2">

                                <label className="text-sm font-medium text-gray-700 mb-1">
                                    Apellidos
                                </label>

                                <input
                                    type="text"
                                    name="lastname"
                                    placeholder="Ej: PÉREZ GARCÍA"
                                    value={form.lastname}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            lastname: normalizeName(e.target.value),
                                        })
                                    }
                                    className={`
                                        bg-gray-100 p-2 rounded text-sm w-full uppercase border
                                        ${lastnameError && form.lastname.length > 0
                                            ? "border-red-500"
                                            : "border-transparent"}
                                    `}
                                    maxLength={80}
                                    required
                                />

                                {lastnameError && form.lastname.length > 0 && (
                                    <span className="text-xs text-red-500 mt-1">
                                        {lastnameError}
                                    </span>
                                )}

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
                                    placeholder="example@email.com"
                                    value={form.email}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            email: normalizeText(e.target.value),
                                        })
                                    }
                                    className={`
                                        bg-gray-100 p-2 pl-9 rounded text-sm w-full border
                                        ${emailError && form.email.length > 0
                                            ? "border-red-500"
                                            : "border-transparent"}
                                    `}
                                    required
                                />

                            </div>

                            {emailError && form.email.length > 0 && (
                                <span className="text-xs text-red-500 mt-1">
                                    {emailError}
                                </span>
                            )}

                        </div>

                        {/* Rol */}
                        <div className="flex flex-col">

                            <label className="text-sm font-medium text-gray-700 mb-1">
                                Rol
                            </label>

                            <div className="relative">

                                <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

                                <select
                                    name="role"
                                    value={form.role}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            role: e.target.value,
                                        })
                                    }
                                    className={`
                                        bg-gray-100 p-2 pl-9 rounded text-sm w-full appearance-none border
                                        ${roleError && form.role.length === 0
                                            ? "border-red-500"
                                            : "border-transparent"}
                                    `}
                                >

                                    <option value="" disabled>
                                        Seleccione un rol
                                    </option>

                                    {loadingRoles ? (
                                        <option disabled>
                                            Cargando roles...
                                        </option>
                                    ) : (
                                        roles.map((rol) => (
                                            <option
                                                key={rol.idRol}
                                                value={rol.idRol}
                                            >
                                                {rol.nombre}
                                            </option>
                                        ))
                                    )}

                                </select>

                            </div>

                            {roleError && (
                                <span className="text-xs text-red-500 mt-1">
                                    {roleError}
                                </span>
                            )}

                        </div>

                        {/* Password */}
                        <div className="flex flex-col">

                            <label className="text-sm font-medium text-gray-700 mb-1">
                                Contraseña
                            </label>

                            <div className="relative">

                                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

                                <input
                                    type="password"
                                    name="password"
                                    placeholder="***********"
                                    value={form.password}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            password: normalizeText(e.target.value),
                                        })
                                    }
                                    className={`
                                        bg-gray-100 p-2 pl-9 rounded text-sm w-full border
                                        ${passwordError && form.password.length > 0
                                            ? "border-red-500"
                                            : "border-transparent"}
                                    `}
                                    required
                                />

                            </div>

                            <span className="text-xs text-gray-400 mt-1">
                                MÍNIMO 6 CARACTERES
                            </span>

                            {passwordError && form.password.length > 0 && (
                                <span className="text-xs text-red-500 mt-1">
                                    {passwordError}
                                </span>
                            )}

                        </div>

                        {/* Botones */}
                        <div className="flex flex-col sm:flex-row gap-2 py-4 w-full">

                            <button
                                type="button"
                                onClick={handleClose}
                                className="btn-secondary w-full"
                            >
                                Cancelar
                            </button>

                            <button
                                type="submit"
                                disabled={loading || !!hasErrors}
                                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading
                                    ? "Guardando..."
                                    : "Guardar Usuario"}
                            </button>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}