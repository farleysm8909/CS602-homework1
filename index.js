import {fToKelvin, toFahrenheit} from '/Fahrenheit.js';
import {cToKelvin, toCelsius} from '/Celsius.js';

document.getElementById("btn").addEventListener("click", function() {
    let chosen = document.getElementById("conversion").value;
    let num = Number(document.getElementById("num").value);
    let result;
    if (chosen == "fah-to-cel") {
        result = toCelsius(num);
    } else if (chosen == "fah-to-kel") {
        result = fToKelvin(num);
    } else if (chosen == "cel-to-kel") {
        result = cToKelvin(num);
    } else if (chosen == "cel-to-fah") {
        result = toFahrenheit(num);
    }
    document.getElementById("results").innerHTML = `<p>Result: ${result}</p>`;
});