import {fToKelvin, toFahrenheit} from '/Fahrenheit.js';
import {cToKelvin, toCelsius} from '/Celsius.js';

document.getElementById("btn").addEventListener("click", function() {
    let chosen = document.getElementById("conversion").value;
    let num = Number(document.getElementById("num").value);
    let result;
    let type;
    if (num == "") { // error checking
        document.getElementById("num").style.background = "#FFCCCC";
        document.getElementById("results").innerHTML = `<p>Please enter a number</p>`;
    } else {
        document.getElementById("num").style.background = "#FFFFFF00"; // resets number field back to white (transparent)
        if (chosen == "fah-to-cel") {
            result = toCelsius(num);
            type = "C";
        } else if (chosen == "fah-to-kel") {
            result = fToKelvin(num);
            type = "K";
        } else if (chosen == "cel-to-kel") {
            result = cToKelvin(num);
            type = "K";
        } else if (chosen == "cel-to-fah") {
            result = toFahrenheit(num);
            type = "F";
        }
        let rounded = result.toFixed(2); 
        document.getElementById("results").innerHTML = `<p>Result: ${rounded}&#176 ${type}</p>`;
    }
});