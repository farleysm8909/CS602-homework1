function cToKelvin(cel) {
    const kel = cel + 273.15;
    return kel;
}

function toCelsius(fah) {
    const cel = (fah - 32) * (5/9);
    return cel;
}

export {cToKelvin, toCelsius};