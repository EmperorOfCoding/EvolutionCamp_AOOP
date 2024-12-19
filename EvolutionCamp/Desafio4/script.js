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


let catalogo = [livro1, livro2, livro3, livro4, livro5];

alert(`Bem vindo a Biblioteca Digital, Escolha uma das Opcoes para prosseguir:
    1 - Exibir todos os títulos disponiveis 
    2 - Adicionar um novo livro ao catálogo
    3 - Editar o nome do autor de um livro ja existente no catálogo 
    4 - Procurar um livro especifico no catálogo
    5 - Contar quantos livros existem no catálogo
    `)

let user_input = parseInt(prompt("Type a Number: "))

switch (user_input) {

    case 1:
        let titles = ExibirTodosOsTitulos();
        alert(`Títulos disponíveis:\n${titles.join("\n")}`);
        break;

    case 2:

        let titlee = prompt("Type the book's title: ").trim();
        let actor = prompt("Type the author's name: ").trim();
        let genre = prompt("Type the genre's name: ").trim();
        let data = parseInt(prompt("Type the year of publication: "));
        let pagees = parseInt(prompt("Type the number of pages: "));
        AdicionarNovoLivro(titlee, actor, genre, data, pagees);
        break;


    case 3:

        let new_actor = prompt("Type the new author's name: ").trim();
        let index = parseInt(prompt("Type the index of the book: "));
        EditarNomeDeAutor(new_actor, index);
        break;


    case 4:

        let index_input = parseInt(prompt("Type the index of the book: "));
        MostrarInfoLivroEspecifico(index_input);
        break;


    case 5:
        ContarLivrosCatalogo();
        break;

    default:
        alert("Invalid Option. Please choose a number between 1 and 5.");
        break;

}

function ExibirTodosOsTitulos() {

    let titles = []

    for (book of catalogo) {

        titles.push(book.titulo);

    }

    return titles;
}

function AdicionarNovoLivro(title, author, genre, data, pages) {

    let new_book = {

        titulo: title,
        autor: author,
        genero: genre,
        anoPublicacao: data,
        paginas: pages

    };

    catalogo.push(new_book);
    alert("Book added sucessfully!")
}

function EditarNomeDeAutor(new_author, index) {

    if (index >= 0 && index < catalogo.length) {

        catalogo[index].autor = new_author;
        alert("Author updated sucessfully")
    }

    else {
        alert("Invalid Index!")
    }

}

function MostrarInfoLivroEspecifico(index) {

    if (index >= 0 && index < catalogo.length) {

        let book = catalogo[index]
        alert(`Título: ${book.titulo}\nAutor: ${book.autor}\nGênero: ${book.genero}\nAno de Publicação: ${book.anoPublicacao}\nPáginas: ${book.paginas}`)

    }

    else {

        alert("Invalid Index!");

    }
}

function ContarLivrosCatalogo() {

    alert(`There are ${catalogo.length} books in the catalog`);

}