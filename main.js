let days = document.querySelector("#days span");
let hours = document.querySelector("#hours span");
let minutes = document.querySelector("#minutes span");
let seconds = document.querySelector("#seconds span");

let countdown = setInterval(cd, 1000);

function cd() {
  seconds.innerHTML--;
  if (seconds.innerHTML <= 0) {
    if (minutes.innerHTML != 0) {
      seconds.innerHTML = 60;
    } else {
      seconds.innerHTML = 0;
    }
    minutes.innerHTML--;
  }
  if (minutes.innerHTML <= 0) {
    if (hours.innerHTML != 0) {
      minutes.innerHTML = 60;
    } else {
      minutes.innerHTML = 0;
    }
    hours.innerHTML--;
  }
  if (hours.innerHTML <= 0) {
    if (days.innerHTML != 0) {
      hours.innerHTML = 24;
    } else {
      hours.innerHTML = 0;
    }
    days.innerHTML--;
  }
  if (days.innerHTML <= 0) {
    days.innerHTML = 0;
  }
}
