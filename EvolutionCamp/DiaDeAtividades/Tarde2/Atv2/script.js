//Calcular Imposto
function CalcularImposto(valor) { //salario = 5000


    if (!Number.isInteger(valor)) {

        return alert("Este valor nao é valido, por favor insira um número real")
    }


    if (valor >= 1000 && valor < 1001) {

        salario_imposto = valor * 0.95;
        return alert(`Receita depois dos impostos: ${salario_imposto}`);
    }

    else if (valor >= 1001 && valor <= 5000) {

        salario_imposto = valor * 0.90;
        return alert(`Receita depois dos impostos: ${salario_imposto}`);
    }

    else {

        return alert(`Nenhum imposto foi aplicado por conta do saldo!`);
    }
}

CalcularImposto(800);