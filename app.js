const start = document.querySelector(".fa-play");
const pause = document.querySelector(".fa-pause");
let circle = document.querySelector('#circle');
const timer = document.querySelector('.time-display');
const timeInput = document.querySelector('.time-input');
// user input for time
let hourInput = document.querySelector('.hour-in');
let minsInput = document.querySelector('.mins-in');
let secsInput = document.querySelector('.secs-in');
console.log(hourInput.value*3600, +minsInput.value*60, +secsInput.value);
// total time
let totalTime = (+hourInput.value)*3600 + (+minsInput.value) * 60 + (+secsInput.value);
console.log(totalTime)
// time in hour, mins and secs
let hoursDisplay = totalTime / 3600;
console.log(hoursDisplay)
let minutesDisplay = hoursDisplay / 60;
let secondsDisplay = minutesDisplay / 60; 
let hourMins = document.querySelector('.hour-mins');
let secs = document.querySelector('.secs');
hourMins.textContent = totalTime/hoursDisplay + ":" ;

secs.textContent = secsInput.value;

function reduceTime(time){
  time -= 1
}
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
