//Ask for a Password
password = "secret";

while (input != "secret") {

    var input = prompt("Type a password: ").toLowerCase();
}

alert("Access Granted!");


//Guess the Number
let guess_flag = false;

while (guess_flag === false) {

    let guess_input = prompt("Type a guess number: ");

    if (Number(guess_input) === 7) {

        guess_flag = true;
        break;

    }
};
alert("You've guessed the right number.")




