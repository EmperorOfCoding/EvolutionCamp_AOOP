let fruits = ["apple", "banana", "cherry"];

fruits.push("orange");
alert(fruits)

fruits.shift();
alert(fruits);

fruits.unshift("kiwi");
alert(fruits);

let removedFruit = fruits.pop();
alert(fruits);
alert(removedFruit);

//Mostrando Array:

alert("Fruits: " + JSON.stringify(fruits) + "\nRemoved Fruit: " + JSON.stringify(removedFruit));

