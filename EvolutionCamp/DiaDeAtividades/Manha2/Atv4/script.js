//Reverso de uma String
function inverterString(string) {

    let array_invertido = string.split("").reverse().join("");

    return alert(`String Invertida: "${array_invertido}"`);

}

inverterString("banana")