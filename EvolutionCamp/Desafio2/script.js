
let livro1 = {

    titulo: "Rápido e Devagar: Duas Formas de Pensar",
    autor: "Victor Martins",
    genero: "Desenvolvimento Pessoal",
    anoPublicacao: 2025,
    paginas: 202
};

let livro2 = {

    titulo: "O Poder do Agora",
    autor: "Victor Martins",
    genero: "Desenvolvimento Pessoal",
    anoPublicacao: 2024,
    paginas: 202
};

let livro3 = {

    titulo: "Antifragil",
    autor: "Victor Martins",
    genero: "Desenvolvimento Pessoal",
    anoPublicacao: 2021,
    paginas: 202
};

let livro4 = {

    titulo: "Essencialismo",
    autor: "Victor Martins",
    genero: "Desenvolvimento Pessoal",
    anoPublicacao: 2022,
    paginas: 202
};

let livro5 = {

    titulo: "Arte Da Guerra",
    autor: "Victor Martins",
    genero: "Ficcao Cientifica",
    anoPublicacao: 2020,
    paginas: 202
};


let catalogo = [];
catalogo.push(livro1, livro2, livro3, livro4, livro5);
//console.log(catalogo)

//Caca ao Tesouro
let caca_ao_tesouro = catalogo.some((livro) => livro === "Ficcao Cientifica");
//alert(caca_ao_tesouro);

//Garantia de Autoria
let garantiaDeAutoria = catalogo.every((livro) => (

    "titulo" in livro &&
    "autor" in livro &&
    "genero" in livro &&
    "anoPublicacao" in livro &&
    "paginas" in livro
));
console.log(garantiaDeAutoria);

//Pedido Especial
let livro_Encontrado = catalogo.find((livro) => livro.titulo === "Antifragil")
console.log(`Livro encontrado! ${livro_Encontrado.titulo}`);

//Encontrar Posicao
let titulo_posicao = catalogo.findIndex((livro) => livro.titulo === "O Poder do Agora");
console.log(titulo_posicao);

//Organizar por ano de publicacao, de forma ordenada.

let lista_ordenada = catalogo.slice().sort((a, b) => a.anoPublicacao - b.anoPublicacao);
console.log(lista_ordenada);
