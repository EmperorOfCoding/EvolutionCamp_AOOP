//Fatorial de um Numero
function calcularFatorial(N) { //5

    if (!Number.isInteger(N)) {

        return "Insira um valor inteiro!";
    }

    else if (N == 0) {

        return 0;
    }

    else if (N === 1) {

        return 1;
    }

    else {

        let b = 2;
        let a = 1;
        let resultado = 0;

        while (b <= N) { //b = 2

            if (b === 2) {

                resultado = a * b; //1 * 2 = 2
                b++; //b vai passar a ser 3
            }

            else {

                resultado *= b;
                b++;
            }


        }

        return resultado;
    }
}


console.log(calcularFatorial(5));