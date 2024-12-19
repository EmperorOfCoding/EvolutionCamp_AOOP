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
    genero: "Harmonia",
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


//1 - Criando Arrays de generos que irao armazenar seus respectivos livros

let desenvolvimento_pessoal = [];
let ficcao_cientifica = [];
let harmonia = [];

//2 - Iterando sobre cada livro no array [catalogos] e pegando o livro e armazenando em seu respectivo array de genero
for (let livro of catalogo) {

    switch (livro.genero) {

        case "Desenvolvimento Pessoal":
            desenvolvimento_pessoal.push(livro);
            break;

        case "Ficcao Cientifica":
            ficcao_cientifica.push(livro);
            break;

        case "Harmonia":
            harmonia.push(livro);
            break;
    }
}

//3 - Ordenar alfabeticamente esses livros dentro de seus respectivos generos.
desenvolvimento_pessoal.sort((a, b) => a.titulo.localeCompare(b.titulo));
ficcao_cientifica.sort((a, b) => a.titulo.localeCompare(b.titulo));
harmonia.sort((a, b) => a.titulo.localeCompare(b.titulo));


//Mostrar a quantidade de livros de cada genero e seus respectivos titulos de livros em seguida
console.log(`Há ${desenvolvimento_pessoal.length} livros dentro do Genero Desenvolvimento Pessoal:
            ${desenvolvimento_pessoal.map((livro) => livro.titulo).join(", ")}

            Há ${ficcao_cientifica.length} livros dentro do Genero Desenvolvimento Pessoal:
            ${ficcao_cientifica.map((livro) => livro.titulo).join(", ")}

            Há ${harmonia.length} livros dentro do Genero Desenvolvimento Pessoal:
            ${harmonia.map((livro) => livro.titulo).join(", ")}

            
                                                                                                        `)











