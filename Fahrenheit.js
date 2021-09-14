function fToKelvin(fah) {
    const kel = (fah-32) * (5/9) + 273.15;
    return kel;
}

function toFahrenheit(cel) {
    const fah = (cel*1.8) + 32;
    return fah;
}

export {fToKelvin, toFahrenheit};