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
    autor: "Christiane Ferreira",
    genero: "Desenvolvimento Pessoal",
    anoPublicacao: 2021,
    paginas: 202
};

let livro4 = {

    titulo: "Essencialismo",
    autor: "Victor Martins",
    genero: "Guerra",
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
    1 - Verificar se um livro existe no catálogo
    2 - Adicionar um novo livro ao catálogo
    3 - Remover um livro do catálogo
    4 - Procurar um livro especifico no catálogo
    5 - Trazer todos os livros relacionados a determinado genero
    6 - Trazer todos os livros relacionados a determinado autor
    7 - Sair do Sistema
    `)

let user_input = parseInt(prompt("Type a Number: "))

switch (user_input) {

    case 1:
        let book_title = prompt("Type the book's name to check if he exists: ").trim();
        VerificarSeLivroExiste(book_title);
        break;


    case 2:
        let titlee = prompt("Type the book's title: ").trim();
        let author = prompt("Type the author's name: ").trim();
        let genre = prompt("Type the genre's name: ").trim();
        let data = parseInt(prompt("Type the year of publication: "));
        let pagees = parseInt(prompt("Type the number of pages: "));

        if (!titlee || !author || !genre || isNaN(data) || isNaN(pagees)) {

            alert("Todos os campos são obrigatórios. Por favor, tente novamente.");
        }

        else {

            AdicionarNovoLivro(titlee, author, genre, data, pagees);
        }

        break;


    case 3:
        let book_ToRemove = prompt("Type the book's name to delete it: ").trim();
        RemoverLivro(book_ToRemove);
        break;

    case 4:
        let index_input = parseInt(prompt("Type the index of the book: "));
        MostrarInfoLivroEspecifico(index_input);
        break;


    case 5:
        let book_gender = prompt("Type the book gender: ").trim();
        MostrarLivrosRelacionadosAGenero(book_gender);
        break;


    case 6:
        let book_author = prompt("Type the book author: ").trim();
        MostrarLivrosRelacionadosAAutor(book_author);
        break;

    case 7:
        SairDoSistema();
        break;


    default:
        alert("Invalid Option. Please choose a number between 1 and 7.");
        break;

}


function VerificarSeLivroExiste(title) {

    let book = catalogo.find((book) => book.titulo === title);

    if (book) {

        alert(`That book exists in our catalog! ${title}`);
    }

    else {
        alert(`We don't have ${title} this book in our catalog!`);
    }
}

function AdicionarNovoLivro(title, author, genre, data, pages) {

    let new_book = {

        titulo: title,
        autor: author,
        genero: genre,
        anoPublicacao: data,
        paginas: pages,

    };

    catalogo.push(new_book);

    alert(`Book ${title} added sucessfully!`)

    alert(JSON.stringify(catalogo, null, 2));
}

function RemoverLivro(title) {

    title = title.trim().toLowerCase()

    let updatedCatalog = catalogo.filter((book) => book.titulo.toLowerCase().trim() !== title());

    if (updatedCatalog.length === catalogo.length) {

        alert(`O livro "${title}" não foi encontrado no catálogo.`);
    }

    else {

        catalogo.length = 0;
        catalogo.push(...updatedCatalog);
        alert("Book Removed Sucessfully!")
        alert(JSON.stringify(catalogo, null, 2));

    }

}

function MostrarInfoLivroEspecifico(index) {

    if (index >= 0 && index < catalogo.length) {

        let book = catalogo[index]
        return alert(`Título: ${book.titulo}\nAutor: ${book.autor}\nGênero: ${book.genero}\nAno de Publicação: ${book.anoPublicacao}\nPáginas: ${book.paginas}`)

    }

    else {

        return alert("Invalid Index!");

    }
}

function MostrarLivrosRelacionadosAGenero(gender) {

    let gender_books = catalogo.filter((book) => book.genero.toLowerCase() === gender.toLowerCase());

    if (gender_books.length > 0) {

        alert(`Livros do gênero "${gender}":\n` + JSON.stringify(gender_books, null, 2));

    }

    else {
        alert(`Nenhum livro do gênero "${gender}" foi encontrado.`);
    }

}

function MostrarLivrosRelacionadosAAutor(author) {

    let author_books = catalogo.filter((book) => book.autor.toLowerCase() === author.toLowerCase());

    if (author_books.length > 0) {

        alert(`Livros do autor "${author}":\n` + JSON.stringify(author_books, null, 2));

    }

    else {

        alert(`Nenhum livro do autor "${author}" foi encontrado.`);
    }
}

function SairDoSistema() {

    return alert("System shutting down");
}



