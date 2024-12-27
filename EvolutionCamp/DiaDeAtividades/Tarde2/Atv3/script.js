//Manipulacao de Objetos

class Car {
    constructor(model, year, color, engine, owner) {

        this.model = model;
        this.year = year;
        this.color = color;
        this.engine = { type: engine.type, horsepower: engine.horsepower };
        this.odometer = 0;
        this.trips = 0;
        this.owner = { name: owner.name, age: owner.age, address: owner.address };
    };

    //Alterar cor do veiculo e verificar se o carro é considerado novo (menos de 3 anos)

    alterarCorVeiculo(color) {

        return this.color = color;
    }

    carroEhNovo() {

        if (this.year < 3) {

            return "This car is new!"
        }

        else {
            return "This car is not new!"
        }
    }

    compareYear(car1, car2) {

        if (car1.year > car2.year) {

            return `The car ${car1.model} is newer than the ${car2.model}!`;
        }

        else {

            return `The car ${car2.model} is newer than the ${car1.model}!`
        }
    }


    comparePower(car1, car2) {

        if (car1.engine.horsepower > car2.engine.horsepower) {
            return `The car ${car1.model} has a greater power than the ${car2.model}!`;
        }

        else {

            return `The car ${car2.model} has a greater power than the ${car1.model}!`;

        }
    }

    registerTrip() {

        this.trips++;
    }

    updateOdometer(newOdometer) {

        if (newOdometer < this.odometer) {

            return "Error: New odometer value cannot be less than the current value.";
        }

        else {

            this.odometer = newOdometer;
            this.registerTrip();
            return `Odometer updated to ${newOdometer} km. Trip count: ${this.trips}`;
        }
    }

    showOwnerInfo() {

        return `Owner: ${this.owner.name}, Age: ${this.owner.age}, Address: ${this.owner.address} `;
    }

    transferCarToNewOwner(newOwner) {


        this.owner = {

            name: newOwner.name,
            age: newOwner.age,
            address: newOwner.address
        };

        return `Ownership of this car ${this.model} has been transferred to ${newOwner.name}, Age: ${newOwner.age}, Address: ${newOwner.address}.`
    }

}
