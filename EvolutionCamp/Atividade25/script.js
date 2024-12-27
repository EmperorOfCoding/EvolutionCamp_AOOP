
function timeOfDay(time = new Date()) {

    let hours = time.getHours()

    if (hours >= 6 && hours < 12) {

        return alert("Morning")
    }

    else if (hours >= 12 && hours < 18) {

        return alert("Afternoon")
    }

    else {

        return alert("Evening")
    }

}


let specific_time = new Date();
specific_time.setHours(6, 0, 0, 0)
timeOfDay(specific_time);





