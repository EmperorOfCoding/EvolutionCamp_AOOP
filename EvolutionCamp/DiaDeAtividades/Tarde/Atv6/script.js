
car = {

    model: "Ford",
    year: 2024,
    method: function () {

        return `This is a car with model: ${this.model} and was made in ${this.year}`
    }
}

console.log(car.model);
car.year = 2020;
console.log(car.year)

for (let prop in car) {

    console.log(`Propriedade: ${prop}\n`)
}

let car_array = [

    {

        model: "Ford",
        year: 2024,
    },

    {

        model: "Toyota",
        year: 2024,
    },

    {

        model: "Chevrolet",
        year: 2024,
    },

    {

        model: "Nissan",
        year: 2024,
    },
]

for (let car of car_array) {

    console.log(`Modelo: ${car.model}, Ano: ${car.year}`)
}

delete car.model
console.log(car)

function MeuConstrutor(model, year, method) {

    this.model = model;
    this.year = year;
    this.method = method;
}

let carro = new MeuConstrutor("Ford", 2024, function () { return `This is a car with model: ${this.model} and was made in ${this.year}` });
console.log(carro.method())
