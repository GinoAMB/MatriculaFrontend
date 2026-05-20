export const SCHOOL_TERM_YEAR_MIN = 2000;
export const SCHOOL_TERM_YEAR_MAX = 2100;

export const validateSchoolTermYear = (
    year: number
): string | null => {

    if (!year) {
        return "El año es obligatorio";
    }

    if (year < SCHOOL_TERM_YEAR_MIN) {
        return `El año debe ser mayor o igual a ${SCHOOL_TERM_YEAR_MIN}`;
    }

    if (year > SCHOOL_TERM_YEAR_MAX) {
        return `El año debe ser menor o igual a ${SCHOOL_TERM_YEAR_MAX}`;
    }

    return null;
};

export const validateSchoolTermStartDate = (
    date: string
): string | null => {

    if (!date) {
        return "La fecha de inicio es obligatoria";
    }

    return null;
};

export const validateSchoolTermEndDate = (
    startDate: string,
    endDate: string
): string | null => {

    if (!endDate) {
        return "La fecha de fin es obligatoria";
    }

    if (startDate && endDate) {

        const inicio = new Date(startDate);
        const fin = new Date(endDate);

        if (fin <= inicio) {
            return "La fecha de fin debe ser mayor a la fecha de inicio";
        }
    }

    return null;
};

export const isSchoolTermExpired = (
    endDate: string
): boolean => {

    return new Date() > new Date(endDate);
};