//Contagem de Letras Repetidas
function contarLetrasRepetidas(string) {

    let contagem = {};

    for (let letra of string) {

        if (contagem[letra]) {

            contagem[letra]++;
        }

        else {

            contagem[letra] = 1
        }
    }

    let repetidas = Object.entries(contagem).filter(([letra, count]) => count > 1);

    return Object.fromEntries(repetidas);
}

let resultado = contarLetrasRepetidas("abobora");

let mensagem = "Contagem de letras:\n";

for (letra in resultado) {

    mensagem += `${letra}: ${resultado[letra]}\n`
}

alert(mensagem);

