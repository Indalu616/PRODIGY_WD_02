const timeCont = document.querySelector(".time-displayer");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const milSec = document.querySelector(".mil-sec");

let id = null;
let millisec = 0;
let sec = 0;
let min = 0;
let hour = 0;

// pausing function
pauseBtn.addEventListener("click", () => {
  clearInterval(id);
});

// reset function
resetBtn.addEventListener("click", () => {
  clearInterval(id);
  millisec = 0;
  sec = 0;
  min = 0;
  hour = 0;
  document.title = "Stopwatch";
  timeCont.innerHTML = "00:00:00";
  milSec.innerHTML = "000";
});

// start function
startBtn.addEventListener("click", () => {
  if (id != null) {
    clearInterval(id);
  }
  id = setInterval(displayTime, 10);
});

// display time function
function displayTime() {
  millisec += 10;
  if (millisec == 1000) {
    millisec = 0;
    sec += 1;
    if (sec == 60) {
      min += 1;
      sec = 0;
      if (min == 60) {
        hour += 1;
        min = 0;
      }
    }
  }

  let hr = hour < 10 ? "0" + hour : hour;
  let m = min < 10 ? "0" + min : min;
  let s = sec < 10 ? "0" + sec : sec;
  let ms =
    millisec < 10
      ? "00" + millisec
      : millisec < 100
      ? "0" + millisec
      : millisec;
  timeCont.innerHTML = `${hr}:${m}:${s}`;
  document.title = `${hr}:${m}:${s}`;
  milSec.innerHTML = `${ms}`;
}
