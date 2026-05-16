export const ROLE_NAME_MIN_LENGTH = 3;

export const validateRoleName = (name: string): string | null => {

    const normalized = name.trim();

    if (!normalized) {
        return "El nombre es obligatorio";
    }

    if (normalized.length < ROLE_NAME_MIN_LENGTH) {
        return `El nombre debe tener al menos ${ROLE_NAME_MIN_LENGTH} caracteres`;
    }

    return null;
};

export const normalizeRoleName = (name: string): string => {
    return name.trim().toUpperCase();
};