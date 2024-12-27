//Crie uma funcao que conta o número de caracteres de uma string
function contarCaracteres(string) {

    if (!string) {

        return alert("Insira um texto válido")
    }

    let caracteres = string.split('');
    return (alert(`O número de caracteres de letras é: ${caracteres.length}`))

}

contarCaracteres("")