export const COUNTRY_NAME_MIN_LENGTH = 2;
export const COUNTRY_NAME_MAX_LENGTH = 30;

export const validateCountryName = (name: string): string | null => {

    const normalized = name.trim();

    if (!normalized) {
        return "El nombre es obligatorio";
    }

    if (normalized.length < COUNTRY_NAME_MIN_LENGTH) {
        return `El nombre debe tener al menos ${COUNTRY_NAME_MIN_LENGTH} caracteres`;
    }

    if (normalized.length > COUNTRY_NAME_MAX_LENGTH) {
        return `El nombre no puede superar los ${COUNTRY_NAME_MAX_LENGTH} caracteres`;
    }

    // Solo letras, espacios y tildes
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (!regex.test(normalized)) {
        return "El nombre solo puede contener letras";
    }

    return null;
};

export const normalizeCountryName = (name: string): string => {
    return name
        .replace(/\s+/g, " ")
        .trim();
};