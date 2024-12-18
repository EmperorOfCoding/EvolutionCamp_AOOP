//Sum of Numbers
let sum = 0
let numbers = [4, 6, 5, 2, 7, 8];

for (let i = 0; i <= numbers.length; i++) {

    sum += i;
}

console.log(`The sum is: ${sum}`);


//List Object Properties
let car = {

    model: "Electric",
    name: "Turbo",
    engine: "V8",
    active: true
}

for (let property in car) {

    console.log(`Car property: ${car[property]}`);
}


//Print All Items in a String Array
let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {

    alert(`Fruit Name: ${fruit}`);
};