
class SistemaEletronico {
    constructor() {

        this.cedulas = [

            { valor: 2 },
            { valor: 5 },
            { valor: 10 },
            { valor: 20 },
            { valor: 50 },
            { valor: 100 },
        ]

    }

    SacarValor(valor) {

        const resultado = [];

        const cedulas_Ordenadas = this.cedulas.sort((a, b) => b.valor - a.valor);

        for (const cedula of cedulas_Ordenadas) {

            const quantidade = Math.floor(valor / cedula.valor)

            if (quantidade > 0) {

                resultado.push({ valor: cedula.valor, quantidade })
                valor -= quantidade * cedula.valor;
            }
        }

        if (valor > 0) {

            console.log("Nao é possivel sacar o valor exato com as cédulas disponiveis");
            return null
        }

        return resultado;
    }
}

const sistema = new SistemaEletronico();
const saque = sistema.SacarValor(186)
console.log(saque)

