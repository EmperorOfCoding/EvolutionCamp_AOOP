//Verificador de Palíndromos
function verificarSePalindromo(string) {

    if (typeof string !== "string") {

        return "Insira uma string válida!";
    }

    const string_normal = string.toLowerCase().replace(/\s+/g, "");

    const string_inversa = string.split("").reverse().join("");

    if (string_normal === string_inversa) {

        return "É palíndromo";
    }

    else {

        return "Nao é palindromo";
    }

}


alert(verificarSePalindromo("feijao"));
alert(verificarSePalindromo("radar"));