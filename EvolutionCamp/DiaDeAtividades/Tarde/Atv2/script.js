//Calculadora Simples
class CalculadoraSimples {

    constructor(num1, num2) {

        this.num1 = num1,
            this.num2 = num2
    };

    somarNumero() {

        return this.num1 + this.num2;
    }

    subtrairNumero() {

        return this.num1 - this.num2;
    }

    dividirNumero() {

        return this.num1 / this.num2;
    }

    produtoNumero() {

        return this.num1 * this.num2;
    }

    restoNumero() {

        return this.num1 % this.num2;
    }
}

const calculadora = new CalculadoraSimples(5, 5)
alert(calculadora.somarNumero());
alert(calculadora.subtrairNumero());
alert(calculadora.dividirNumero());
alert(calculadora.produtoNumero());
alert(calculadora.restoNumero());