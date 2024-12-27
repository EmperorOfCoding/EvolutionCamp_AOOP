//Crie uma funcao que receba 3 numeros e retorne o maior deles

function qualOMaior(num1, num2, num3) {

    if (typeof num1 !== "number" || typeof num2 !== "number" || typeof num3 !== "number") {

        return alert(`Insira os 3 números no parametro e que eles sejam números reais!`);
    }

    if (num1 > num2 && num1 > num3) {

        return alert(`O número ${num1} é o maior!`);
    }

    else if (num2 > num1 && num2 > num3) {

        return alert(`O número ${num2} é o maior!`);
    }

    else if (num3 > num1 && num3 > num2) {

        return alert(`O número ${num3} é o maior!`);
    }

    else {

        return alert(`Todos os números sao iguais!`);
    }

}

qualOMaior(7, 5, 10)
