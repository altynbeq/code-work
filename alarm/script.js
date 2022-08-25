//import current time, selectors and alarm button
const selectMenu = document.querySelectorAll('select'),
    currentTime = document.querySelector('h1'),
    alarmBttn = document.querySelector('button'),
    timeDisp = document.querySelector('.time');
var alarmTime, ringMusic = new Audio("./Alarm.mp3"),
    isAlarmSet = false;

// display hours
for (let i = 12; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`
    selectMenu[0].firstElementChild.insertAdjacentHTML('afterend', option);
}
//display min
for (let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`
    selectMenu[1].firstElementChild.insertAdjacentHTML('afterend', option)
}

//display current time
setInterval(() => {
    let date = new Date;
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let ampm = "PM";

    if (hour > 12) {
        hour = hour - 12
        ampm = "PM"
    }
    hour = hour == 0 ? hour == 12 : hour;
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    currentTime.innerText = `${hour}:${min}:${sec} ${ampm}`

    if (alarmTime == `${hour}:${min}:${ampm}`) {
        ringMusic.play();
        ringMusic.loop = true;
    }
}, 1000)

function setAlarm() {
    // if alarm is set
    if (isAlarmSet) {
        alarmTime = '';
        ringMusic.pause();
        timeDisp.classList.remove("disable");
        alarmBttn.innerHTML = "Set Alarm"
        return isAlarmSet = false;
    }

    let time = `${selectMenu[0].value}:${selectMenu[1].value}:${selectMenu[2].value}`;

    alarmTime = time;

    //ask for proper time 
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AMPM")) {
        return alert("Please select proper time...")
    }
    isAlarmSet = true;
    timeDisp.classList.add("disable");
    alarmBttn.innerHTML = 'Reset alarm';
}

//alarm button
alarmBttn.addEventListener('click', setAlarm);