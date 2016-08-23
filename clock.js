var SECONDS = 0;
var MINUTES = 0;
var HOURS = 0;

document.addEventListener("DOMContentLoaded", function() {
  setInterval(tick, 0);
});

function tick() {
  SECONDS++;
  if (SECONDS === 60) {
    SECONDS = 0;
    MINUTES++;
    if (MINUTES === 60) {
      MINUTES = 0;
      HOURS++;

      if (HOURS === 12) {
        HOURS = 0;
      }
    }
  }

  rotateClock();
}

function rotateClock() {
  second.style.transform = "rotate(" + degreesSeconds(SECONDS) + "deg)";
  minute.style.transform = "rotate(" + degreesMinutes(MINUTES) + "deg)";
  hour.style.transform = "rotate(" + degreesHours(HOURS) + "deg)";
}

function degreesSeconds(seconds) {
  return seconds / 60 * 360;
}

function degreesMinutes(minutes) {
  return minutes / 60 * 360;
}

function degreesHours(hours) {
  return hours / 12 * 360;
}
