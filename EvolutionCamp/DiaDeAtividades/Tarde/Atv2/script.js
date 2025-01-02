//Calculadora Simples

function calculadoraSimples(num1, num2, operation) {

    if (operation !== "+" && operation !== "-" && operation !== "/" && operation !== "*" && operation !== "%") {

        return alert("Insira um método de operacao válido, ex: '+', '-', '/', '*', '%' ");
    }

    if (operation === "+") {

        return alert(`A soma entre ${num1} e ${num2} é = ${num1 + num2}`);
    }

    else if (operation === "-") {

        return alert(`A subtracao entre ${num1} e ${num2} é = ${num1 - num2}`);
    }

    else if (operation === "/") {

        return alert(`A divisao entre ${num1} e ${num2} é = ${num1 / num2}`);
    }

    else if (operation === "*") {

        return alert(`O produto entre ${num1} e ${num2} é = ${num1 * num2}`);
    }

    else {
        return alert(`O resto entre ${num1} e ${num2} é = ${num1 % num2}`);
    }
}

let input1 = parseInt(prompt("Digite o primeiro número: "));
let input2 = parseInt(prompt("Digite o segundo número: "));
let input3 = prompt("Digite um operador, ex: '+', '-', '/', '*', '%'").toLowerCase().trim();


calculadoraSimples(input1, input2, input3);