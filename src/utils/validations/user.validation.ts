export const normalizeText = (value: string): string => {
    return value.replace(/\s+/g, " ").trimStart();
};

export const normalizeName = (value: string): string => {
    return normalizeText(value).toUpperCase();
};

export const validateName = (value: string): string | null => {

    const trimmed = value.trim();

    if (!trimmed) {
        return "El nombre es obligatorio";
    }

    if (trimmed.length < 2) {
        return "El nombre debe tener mínimo 2 caracteres";
    }

    if (trimmed.length > 50) {
        return "El nombre no puede superar los 50 caracteres";
    }

    return null;
};

export const validateLastname = (value: string): string | null => {

    const trimmed = value.trim();

    if (!trimmed) {
        return "Los apellidos son obligatorios";
    }

    if (trimmed.length < 2) {
        return "Los apellidos deben tener mínimo 2 caracteres";
    }

    if (trimmed.length > 80) {
        return "Los apellidos no pueden superar los 80 caracteres";
    }

    return null;
};

export const validateEmail = (value: string): string | null => {

    const trimmed = value.trim();

    if (!trimmed) {
        return "El correo es obligatorio";
    }

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmed)) {
        return "Ingrese un correo válido";
    }

    return null;
};

export const validatePassword = (value: string): string | null => {

    if (!value.trim()) {
        return "La contraseña es obligatoria";
    }

    if (value.length < 6) {
        return "La contraseña debe tener mínimo 6 caracteres";
    }

    if (value.length > 100) {
        return "La contraseña no puede superar los 100 caracteres";
    }

    return null;
};

export const validateRole = (
    value: string
): string | null => {

    if (!value) {
        return "Debe seleccionar un rol";
    }

    return null;
};

export const validateOptionalPassword = (
    value?: string
): string | null => {

    // 🔹 Si viene vacío, se permite
    if (!value || !value.trim()) {
        return null;
    }

    if (value.length < 6) {
        return "La contraseña debe tener mínimo 6 caracteres";
    }

    if (value.length > 100) {
        return "La contraseña no puede superar los 100 caracteres";
    }

    return null;
};