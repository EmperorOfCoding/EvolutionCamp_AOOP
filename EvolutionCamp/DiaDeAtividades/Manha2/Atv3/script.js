//Ordenacao de Números
function numerosOrdenados(arr) {

    if (!Array.isArray(arr)) {

        return "Insira um array válido!"
    }

    return arr.sort((a, b) => a - b);
}

alert(numerosOrdenados([5, 2, 1, 5, 7]));