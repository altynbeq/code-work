"use strict";

var daysEl = document.getElementById('days');
var hoursEl = document.getElementById('hours');
var minutesEl = document.getElementById('minutes');
var secondsEl = document.getElementById('seconds');
var newYears = "1 Jan 2022";

function counter() {
  var newYearDate = new Date(newYears);
  var currentDate = new Date();
  var totalSeconds = (newYearDate - currentDate) / 1000;
  var days = Math.floor(totalSeconds / 3600 / 24);
  var hours = Math.floor(totalSeconds / 3600) % 24;
  var minutes = Math.floor(totalSeconds / 60) % 60;
  var seconds = Math.floor(totalSeconds) % 60;
  console.log(seconds, minutes, hours, days);
  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
}

function formatTime(time) {
  return time < 10 ? "0".concat(time) : time;
}

counter();
setInterval(counter, 1000);