console.log("js")
document.addEventListener("DOMContentLoaded", function() {
  console.log("dom")
  var seconds = 0;
  var minutes = 0;
  var hours = 0;

  setInterval(function() {
    second.style.transform = "rotate(" + seconds++ + "deg)";
  }, 10)
  setInterval(function() {
    minute.style.transform = "rotate(" + minutes++ + "deg)";
  }, 50)
  setInterval(function() {
    hour.style.transform = "rotate(" + hours++ + "deg)";
  }, 100)
});
