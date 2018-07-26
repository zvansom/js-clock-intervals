const currentTime = new Date();
const currentSeconds = currentTime.getSeconds();
const currentMinutes = currentTime.getMinutes();
const currentHours = currentTime.getHours() > 12 ? currentTime.getHours() - 12 : currentTime.getHours();

let setTime = currentSeconds + (currentMinutes * 60) + (currentHours * 3600);

function secondRotation(seconds) {
  return (seconds / 60) * 360;
}

function minuteRotation(minutes) {
  return (minutes / 60) * 360;
}

function hourRotation(hours) {
  return (hours / 12) * 360;
}

function updateDOM() {
  const secondHandAngle = secondRotation(setTime);
  const minuteHandAngle = minuteRotation(setTime / 60);
  const hourHandAngle = hourRotation(setTime / 3600);

  const secondHand = document.getElementById('second');
  secondHand.style.transform = "rotate(" + secondHandAngle + "deg)";
  const minuteHand = document.getElementById('minute');
  minuteHand.style.transform = "rotate(" + minuteHandAngle + "deg)";
  const hourHand = document.getElementById('hour');
  hourHand.style.transform = "rotate(" + hourHandAngle + "deg)";
}

function incrementTime() {
  setTime++;
  updateDOM();
}

let timer = window.setInterval(incrementTime, 1000);
