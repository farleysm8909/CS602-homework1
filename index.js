import {fToKelvin, toFahrenheit} from '/fahrenheit.js';
import {cToKelvin, toCelsius} from '/celsius.js';

document.getElementById("btn").addEventListener("click", function() {
    let chosen = document.getElementById("conversion").value;
    let num = document.getElementById("num").value;
    let result;
    let type;
    if (num == "") { // error checking
        document.getElementById("num").style.background = "#FFCCCC";
        document.getElementById("results").innerHTML = `<p>Please enter a number</p>`;
    } else {
        num = Number(num);
        document.getElementById("num").style.background = "#FFFFFF"; // resets number field back to white
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
        document.getElementById("results").innerHTML = `<p>Result: ${rounded}&#176${type}</p>`;
    }
});