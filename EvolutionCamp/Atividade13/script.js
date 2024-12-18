let secret_number = 7;
let guess = prompt("Guess the secret number: ");

if (guess > 7) {

    alert("Too high!");
}

else if (guess == 7) {

    alert("Correct!");
}

else {

    alert("Too low!");
}