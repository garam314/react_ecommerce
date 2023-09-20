export const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export function format_price(price) {
    return price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })

}