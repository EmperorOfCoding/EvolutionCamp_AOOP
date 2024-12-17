let fruits = ["apple", "banana", "cherry"];

fruits.push("orange");
console.log(fruits)

fruits.shift();
console.log(fruits);

fruits.unshift("kiwi");
console.log(fruits);

let removedFruit = fruits.pop();
console.log(fruits);
console.log(removedFruit);

//Mostrando Array:

alert("Fruits: " + JSON.stringify(fruits) + "\nRemoved Fruit: " + JSON.stringify(removedFruit));

