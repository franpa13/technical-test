/**
 * formateo de fechas (utilidades que puedan llegar a servir mas adelante)
 */

/**
 * Formatea una fecha al formato español (Argentina)
 */
export const formatSpanishDate = (date: Date): string => {
    return date.toLocaleDateString("es-AR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
}

/**
 * Formatea una fecha con hora
 */
export const formatSpanishDateTime = (date: Date): string => {
    return date.toLocaleDateString("es-AR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
}

/**
 * Formatea una fecha en formato largo
 */
export const formatSpanishLongDate = (date: Date): string => {
    return date.toLocaleDateString("es-AR", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
}

/**
 * Obtiene la diferencia de tiempo relativa (ej: "hace 2 horas")
 */
export const getRelativeTime = (date: Date): string => {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return "hace un momento";
    if (diffInSeconds < 3600) return `hace ${Math.floor(diffInSeconds / 60)} minutos`;
    if (diffInSeconds < 86400) return `hace ${Math.floor(diffInSeconds / 3600)} horas`;
    if (diffInSeconds < 2592000) return `hace ${Math.floor(diffInSeconds / 86400)} días`;

    return formatSpanishDate(date);
}

/**
 * Valida si una fecha es hoy
 */
export const isToday = (date: Date): boolean => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
}

/**
 * Valida si una fecha es de esta semana
 */
export const isThisWeek = (date: Date): boolean => {
    const today = new Date();
    const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
    return date >= startOfWeek;
}