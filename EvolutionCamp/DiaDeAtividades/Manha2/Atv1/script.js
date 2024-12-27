//Soma de todos os números
function somarNumeros(arr) {

    if (!Array.isArray(arr)) {

        alert("Insira um array válido!");

    }

    let sum = 0;

    for (let i of arr) {

        sum += i;
    }

    return alert(`A soma de todos os numeros do array é: ${sum} `);
}

somarNumeros([5, 5, 5, 6])