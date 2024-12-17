alert("Olá, bem vindo a biblioteca digital da AOOP!")

//Declarando um catálogo vazio (Array)
catalogo = [];

//Adicionando livros ao catálogo
catalogo.push("Essencialismo", "Arte da Guerra", "Gladiadores", "O Poder do Agora", "Startup Enxuta");

//Removendo o primeiro livro do catálogo
catalogo.shift();

//Procurar livro no catálogo
if (catalogo.includes("Essencialismo")) {

    console.log("Este livro nao está presente em nosso Catálogo!");
}

else {
    console.log("Este livro foi encontrado!");
}

//Substituir título por outro
let index = catalogo.indexOf("Arte da Guerra");

if (index !== -1) {

    catalogo[index] = "Pensando Rápido e Devagar";
}
console.log(catalogo);

//Listar os tres primeiros livros do Catálogo
let tres_primeiroslivros = catalogo.slice(0, 3);
console.log(tres_primeiroslivros);

//Dividir o titulo de um livro em palavras
let livro = "Gladiadores";
let palavras_livro = livro.split("");
console.log(palavras_livro);

//Adicionar um livro no comeco do catálogo
catalogo.unshift("Viva o Agora");
console.log(catalogo);

//Contar o número de livros no catalogo
let qntd_livros = catalogo.length;
console.log(qntd_livros);

//Exibir o titulo do primeiro livro do catalogo
let titulo = catalogo[0];
console.log(titulo);
