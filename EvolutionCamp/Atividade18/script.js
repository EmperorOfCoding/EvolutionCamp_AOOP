//1 - Iterar sobre numeros de 1 a 10 usando for loop (printar apenas os numeros que sao pares), use "continue para skipar os numeros que nao sao pares"
for (let i = 0; i <= 10; i++) {

    if (i === 0) {
        continue
    }

    else if (i % 2 == 0) {

        //alert(i);
    }

    else if (i % 2 !== 0) {

        continue
    }
};


//1 - Voce tem um array de numeros e quer parar assim que encontrar o número 7
let numbers = [2, 5, 1, 4, 6, 7];

for (let i = 0; i <= numbers.length; i++) {

    //alert(i)

    if (i === 7) {

        break;
    }
}


//1 - Iterar sobre um array de numeros e contar quantos numeros pares há dentro desse array e calcular a soma de todos esses numeros pares, se a soma exceder 50. Pare a execucao e mostre "Stopped early!". Se o loop completar antes de exceder 50, mostre a quantidade de numeros pares e a soma total dos numeros pares.
let numbers2 = [1, 5, 4, 8, 10, 12, 16, 20, 60, 6];
let contar_pares = 0;
let sum_even = 0;

for (let i = 0; i < numbers2.length; i++) {

    if (numbers2[i] % 2 == 0) {

        contar_pares++;
        sum_even += numbers2[i];

        if (sum_even > 50) {

            alert("Stopped early!");
            break;
        }

        else {


            continue;

        }
    }

    else {
        continue;
    }
}

if (sum_even <= 50) {

    alert(`O número de pares é ${contar_pares}`)
    alert(`A soma total de numeros pares é ${sum_even}`)
}






