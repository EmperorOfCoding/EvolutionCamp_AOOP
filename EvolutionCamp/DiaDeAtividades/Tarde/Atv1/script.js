//Filtrar Numeros Pares
function retornarNumerosPares(arr) {

    if (!Array.isArray(arr)) {

        alert("Coloque um Array!");
    }

    let numeros_pares = arr.filter((num) => num % 2 === 0);

    return alert(numeros_pares);
}


retornarNumerosPares([5, 6, 2, 4, 8, 10]);