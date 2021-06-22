
function mainFunction() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var format = "AM"
    if (hour > 12) {
        hour -= 12;
        format = "PM"
    }
    sec = updateTime(sec); //add 0 before one digit time.

    document.querySelector('h1').innerText = hour + " : " + min + " : " + sec + " " + format; //Digital Clock

    //Analog Clcok rotating hands
    document.querySelector('#shand').style.transform = "rotate(" + (sec * 6) + "deg)";
    document.querySelector('#mhand').style.transform = "rotate(" + (min * 6) + "deg)";
    document.querySelector('#hhand').style.transform = "rotate(" + (hour * 30) + "deg)";

    var secDash = dash(sec, 60, 280);
    var secGap = gap(sec, 60, 280)
    document.querySelector('#seconds').style.strokeDasharray = secDash + "," + secGap; //

    var minDash = dash(min, 60, 250);
    var minGap = gap(min, 60, 250)
    document.querySelector('#minutes').style.strokeDasharray = minDash + "," + minGap;

    var hourDash = dash(hour, 12, 220);
    var hourGap = gap(hour, 12, 220)
    document.querySelector('#hours').style.strokeDasharray = hourDash + "," + hourGap;
}

// Calculate the circulart path of clock hand
function dash(time, div, r) {
    return (2 * Math.PI * r) * (time / div);
}
//Calculate the anti clockwise gap between clock hands and 12.
function gap(time, div, r) {
    if (div === 60) {
        return (2 * Math.PI * r) * (60 - time / div);
    } else {
        return (2 * Math.PI * r) * (12 - time / div);
    }
}
//Add 0 before one digit number
function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }

}
//Plays the tik tik sound of clock hands
function playSound(type) {
    const clockSound = new Audio(type);
    clockSound.play();
}
function calling() {
    playSound('clockSound.mp3')
}

setInterval(mainFunction, 1000);
setInterval(calling, 1000);


