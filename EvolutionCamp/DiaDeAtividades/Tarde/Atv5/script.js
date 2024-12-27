//Fibonnaci
//0, 1, 1, 2, 3, 5, 8, 13
function enesimoNumeroFibonnaci(n) {

    if (!Number.isInteger(n)) {

        return alert("Insira um número inteiro!")
    }

    if (n === 0) return alert(0)
    if (n === 1) return alert(1)

    let a = 0, b = 1;

    for (let i = 2; i <= n; i++) {

        let temp = a + b;
        a = b;
        b = temp;
    }

    return alert(b);
}


enesimoNumeroFibonnaci(4)

