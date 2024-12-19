//Fruit Selector
let input = prompt("Type the name of a fruit: ").toLowerCase();

switch (input) {

    case "apple":
        alert("Apples are red or green.");
        break;

    case "banana":
        alert("Bananas are yellow and sweet.");
        break;

    case "melon":
        alert("Melons are green and red.");
        break;
};


//Student's Call
let students = ["Victor Martins", "Andre Ribeiro", "Joao Rafael"];
let user_nameinput = parseInt(prompt("Type a Number from 1 to 3 - Options: [Victor, Andre, Joao]"));
let hisname = "";
let words = [];
let letters = [];

switch (user_nameinput) {

    case 1:
        hisname = students[0];
        break;

    case 2:
        hisname = students[1];
        break;

    case 3:
        hisname = students[2];
        break;

    default:
        alert("Invalid option. Please type a number between 1 and 3");
        break;
}

if (hisname) {

    words = hisname.split(" ")
    letters = hisname.split("")

    let first_name = words[0];

    alert(`The first name is ${first_name} and the number of characters of the entire name is: ${letters.length}`);
}
