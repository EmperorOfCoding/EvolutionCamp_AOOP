
function convertTemperature(temperature, unit) {

    if (unit === "C") {

        let F = (temperature * 9 / 5) + 32;

        alert(`
            Original Temperature: ${temperature}
            Converted Temperature: ${F}  
            `)
    }

    else if (unit === "F") {

        let C = (temperature - 32) * 5 / 9;

        alert(`
            Original Temperature: ${temperature}
            Converted Temperature: ${C}  
            `)
    }



}

convertTemperature(212, "F");
