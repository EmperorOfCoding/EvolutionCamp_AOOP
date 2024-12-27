//Fatorial de um Numero
function calcularFatorial(num) {

    let fatorial = 1

    for (let i = num; i > 1; i--) {

        fatorial *= i
    }

    return alert(`O fatorial de ${num} é: ${fatorial}`)

}

calcularFatorial(5)