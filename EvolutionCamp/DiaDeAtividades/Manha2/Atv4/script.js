//Reverso de uma String
function inverterString(string) {

    if (typeof string !== "string") {

        return "Insira uma string válida!"
    }

    return string.split("").reverse().join("");
}


alert(inverterString("cacau"))