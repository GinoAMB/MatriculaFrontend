export const RELIGION_NAME_MIN_LENGTH = 2;
export const RELIGION_NAME_MAX_LENGTH = 30;

export const validateReligionName = (
    name: string
): string | null => {

    const normalized = name.trim();

    if (!normalized) {
        return "El nombre es obligatorio";
    }

    if (normalized.length < RELIGION_NAME_MIN_LENGTH) {
        return `El nombre debe tener al menos ${RELIGION_NAME_MIN_LENGTH} caracteres`;
    }

    if (normalized.length > RELIGION_NAME_MAX_LENGTH) {
        return `El nombre no puede superar los ${RELIGION_NAME_MAX_LENGTH} caracteres`;
    }

    // Solo letras y espacios
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (!regex.test(normalized)) {
        return "El nombre solo puede contener letras";
    }

    return null;
};

export const normalizeReligionName = (
    name: string
): string => {

    const normalized = name
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase();

    return normalized.charAt(0).toUpperCase() + normalized.slice(1);
};