
function Car(brand, model) {

    this.brand = brand,
        this.model = model,
        this.info = function getCarInfo() {

            alert(`This car is a ${this.brand} ${this.model}.`)
        };
}

const myCar = new Car("Ford", "Sedan");
myCar.info();


function Book(title, author, year) {

    this.book_title = title,
        this.book_author = author,
        this.book_year = year,
        this.book_info = function getBookInfo() {

            alert(`The book "${this.book_title}" was written by ${this.book_author} and published in ${this.book_year}.`);
        }
}


const myBook = new Book("Uma Nova Forma de Viver", "Nassim Taleb", 2023);
myBook.book_info();
