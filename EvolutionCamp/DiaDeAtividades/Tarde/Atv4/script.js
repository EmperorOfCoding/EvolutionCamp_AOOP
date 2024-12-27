//Contar Ocorrencias de um Elemento
function contarOcorrencias(arr) { //[5, 6, 5, 5, 8, 9]


    if (!Array.isArray(arr)) {

        return "Insira um array válido!";
    }

    frequencia = {}

    for (let num of arr) {

        if (frequencia[num]) {

            frequencia[num]++;
        }

        else {
            frequencia[num] = 1;
        }
    }

    return Object.entries(frequencia);
}

let resultado = contarOcorrencias([5, 6, 5, 5, 8, 9]);

let mensagem = "Contagem de números\n";

for (let [num, count] of resultado) {

    mensagem += `${num}: ${count}\n`
}

alert(mensagem);
