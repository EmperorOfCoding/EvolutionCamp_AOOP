//Criar uma funcao que recebe um numero e retorna se ele é "par" ou "impar"
function parOuImpar(num) {

    if (num) {

        if (num % 2 === 0) {

            return alert(`O número "${num}" é par!`);
        }

        else {

            return alert(`O número "${num}" é impar!`);
        }
    }

    else {
        return alert("Insira um número válido!");
    }

}


parOuImpar(6);