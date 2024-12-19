//Available Colors
let array = ['red', 'blue', 'green', 'yellow', 'purple'];

let color1 = prompt("Type the first color: ").toLowerCase();
let color2 = prompt("Type the second color: ").toLowerCase();
let color3 = prompt("Type the third color: ").toLowerCase();

let user_Colors = [color1, color2, color3];

let availableColors = user_Colors.filter((color) => array.includes(color));

if (availableColors.length > 0) {

    alert(`Colors that are available: ${availableColors.join(", ")}`);
}

else {

    alert("There are no matching colors!")

}

let matching_Colors = user_Colors.filter((color) => array.includes(color));
alert(`You have ${matching_Colors.length} colors available`);


