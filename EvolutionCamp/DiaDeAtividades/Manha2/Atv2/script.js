
function contarLetrasRepetidas(string) {

    let frequencia = {}

    for (let letra of string) {

        if (frequencia[letra]) {

            frequencia[letra]++;
        }

        else {

            frequencia[letra] = 1
        }
    }

    return frequencia;

}



console.log(contarLetrasRepetidas("banana"))