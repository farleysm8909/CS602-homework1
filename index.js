import {fToKelvin, toFahrenheit} from '/Fahrenheit.js';
import {cToKelvin, toCelsius} from '/Celsius.js';

let chosen = document.getElementById("conversion").value;
let num = document.getElementById("num").value;
let result;

function convert(chosen, num) {
    if (chosen == "fah-to-cel") {
        result = toCelsius(num);
    } else if (chosen == "fah-to-kel") {
        result = fToKelvin(num);
    } else if (chosen == "cel-to-kel") {
        result = cToKelvin(num);
    } else if (chosen == "cel-to-fah") {
        result = toFahrenheit(num);
    }
    return result;
}