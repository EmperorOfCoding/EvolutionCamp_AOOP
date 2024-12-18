//Login Validation
let input_password = prompt("Type your password:");
let input_username = prompt("Type your username:");

if (input_username === "admin" && input_password === "1234") {

    alert("Access granted!");
}

else {
    alert("Access denied!");
}


//Weekend Planner
let day = prompt("Type the today's day name: ").toLowerCase();

if (day === "saturday" || day === "sunday") {

    alert("It's the weekend! Time to relax!");
}

else if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {

    alert("It's a weekday. Back to work!");
}

else {
    alert("Your day does not exist");
}



