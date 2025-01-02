//Verificador de Palíndromos
function verificarPalindromo(string) { //pera

    let string_normal = string; //pera

    let string_inversa = string.split("").reverse().join(""); //arep

    if (string_normal === string_inversa) {

        return (`É palindromo!: ${string_normal} = ${string_inversa}`);
    }

    else {
        return (`Nao é palindromo!: ${string_normal} !== ${string_inversa}`);
    }
}

console.log(verificarPalindromo("gagau"));