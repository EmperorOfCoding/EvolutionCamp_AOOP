
let person = {

    name: "Victor",
    age: 19,
    greeting: function Introduce() {

        alert(`Hi, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

person.greeting();