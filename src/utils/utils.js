export const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export function format_price(price) {
    return price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })

}

export function get_date() {
    // Crear una nueva instancia de Date que represente la fecha y hora actuales
    const fechaActual = new Date();

    // Obtener los componentes de la fecha y hora
    const anio = fechaActual.getFullYear();
    const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // Sumar 1 al mes porque comienza desde 0
    const dia = fechaActual.getDate().toString().padStart(2, '0');
    const horas = fechaActual.getHours().toString().padStart(2, '0');
    const minutos = fechaActual.getMinutes().toString().padStart(2, '0');
    const segundos = fechaActual.getSeconds().toString().padStart(2, '0');

    // Construir la cadena de fecha y hora en el formato deseado
    const fechaYHoraFormateada = `${anio}/${mes}/${dia} ${horas}:${minutos}:${segundos}`;

    return (fechaYHoraFormateada);

}