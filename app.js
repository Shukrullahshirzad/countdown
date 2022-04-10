const start = document.querySelector(".fa-play");
const pause = document.querySelector(".fa-pause");
let circle = document.querySelector('#circle');
const timer = document.querySelector('.time-display');
const timeInput = document.querySelector('.time-input');
let hourInput = document.querySelector('.hour-in');
let minsInput = document.querySelector('.mins-in');
let secsInput = document.querySelector('.secs-in');
let hourMins = document.querySelector('.hour-mins');
let secs = document.querySelector('.secs');
hourMins.textContent = hourInput.value + ":" + minsInput.value;
secs.textContent = secsInput.value;
start.addEventListener("click",(e)=>{
  pause.classList.remove("hide");
  start.classList.add("hide");
  timeInput.classList.add('hide');
  timer.classList.remove('hide');
})
pause.addEventListener("click",(e)=>{
  pause.classList.add("hide");
  start.classList.remove("hide");
})
