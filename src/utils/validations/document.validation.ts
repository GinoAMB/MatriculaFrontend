export const DOCUMENT_NAME_MIN_LENGTH = 2;
export const DOCUMENT_NAME_MAX_LENGTH = 30;

export const validateDocumentName = (
    name: string
): string | null => {

    const normalized = name.trim();

    if (!normalized) {
        return "El nombre es obligatorio";
    }

    if (normalized.length < DOCUMENT_NAME_MIN_LENGTH) {
        return `El nombre debe tener al menos ${DOCUMENT_NAME_MIN_LENGTH} caracteres`;
    }

    if (normalized.length > DOCUMENT_NAME_MAX_LENGTH) {
        return `El nombre no puede superar los ${DOCUMENT_NAME_MAX_LENGTH} caracteres`;
    }

    // Solo letras y espacios
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (!regex.test(normalized)) {
        return "El nombre solo puede contener letras";
    }

    return null;
};

export const normalizeDocumentName = (
    name: string
): string => {

    return name
        .replace(/\s+/g, " ")
        .trim()
        .toUpperCase();
};