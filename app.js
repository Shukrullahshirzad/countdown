const start = document.querySelector(".fa-play");
const pause = document.querySelector(".fa-pause");
let circle = document.querySelector('#circle');
const timer = document.querySelector('.time-display');
const timeInput = document.querySelector('.time-input');
// user input for time
let hourInput = document.querySelector('.hour-in');
let minsInput = document.querySelector('.mins-in');
let secsInput = document.querySelector('.secs-in');
// total time
let totalTime = (+hourInput.value)*3600 + (+minsInput.value) * 60 + (+secsInput.value);
// time in hour, mins and secs
let hoursDisplay = Math.floor(totalTime / 3600);
let minutesDisplay = Math.floor((totalTime % 3600)/60);
let secondsDisplay = Math.floor((totalTime % 3600)%60) %60 ; 

let hour = document.querySelector('.hour');
let mins =  document.querySelector('.mins');
let secs = document.querySelector('.secs');

// display time 
if(hoursDisplay < 10){
  hour.textContent = "0"+ hoursDisplay + ":" ;
}
else{
  hour.textContent = hoursDisplay + ":" ;
}
if(minutesDisplay< 10){
  mins.textContent = "0"+ minutesDisplay;
}
else{
  mins.textContent = minutesDisplay;
}
if(secondsDisplay< 10){
  secs.textContent = "0"+ secondsDisplay;
}
else{
  secs.textContent = secondsDisplay;
}

setTimeout(updateTime(totalTime), 1000)
function updateTime(time){
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
