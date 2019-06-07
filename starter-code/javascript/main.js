var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime() {}

function printMinutes() {
  var minute = chronometer.getMinutes;
}

function printSeconds() {}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {
  btnLeft.classList.replace("start", "stop");
  btnLeft.textContent = "STOP";
}
function setSplitBtn() {
  btnRight.classList.replace("split", "reset");
  btnRight.textContent = "RESET";
}

function setStartBtn() {
  btnLeft.classList.replace("stop", "start");
  btnLeft.textContent = "START";
}

function setResetBtn() {
  btnRight.classList.replace("reset", "split");
  btnRight.textContent = "SPLIT";
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.classList.contains("start")) {
    setStopBtn();
  } else if (btnLeft.classList.contains("stop")) {
    setStartBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  setStopBtn();
  setSplitBtn();
  if (btnRight.classList.contains("reset")) {
    btnRight.classList.add("split");
    btnRight.classList.remove("reset");
  } else if (btnRight.classList.contains("split")) {
    btnRight.classList.add("reset");
    btnRight.classList.remove("split");
  }
});
