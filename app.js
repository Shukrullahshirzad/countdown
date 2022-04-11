const start = document.querySelector(".fa-play");
const pause = document.querySelector(".fa-pause");
let circle = document.querySelector('#circle');
const timer = document.querySelector('.time-display');
const timeInput = document.querySelector('.time-input');
const hourEl = document.querySelector('.hour-in');
const minsEl = document.querySelector('.mins-in');
const secsEl = document.querySelector('.secs-in');
let interval;
let stop = false;
// user input for time
start.addEventListener("click",(e)=>{
  pause.classList.remove("hide");
  start.classList.add("hide");
  timeInput.classList.add('hide');
  timer.classList.remove('hide');
  //get user input values
  let hourInput = +(hourEl.value);
  let minsInput = +(minsEl.value);
  let secsInput = +(secsEl.value);
// total time
  let totalTime = (hourInput*3600) + (minsInput * 60) + (secsInput);
  starterTimer(totalTime)
})

function starterTimer(totalTime){
  interval = setInterval(()=>{
    totalTime--;
    updateInputs(totalTime);
  }, 1000)
}
function updateInputs(seconds){
  let hoursDisplay = Math.floor(seconds / 3600);
  let minutesDisplay = Math.floor((seconds % 3600)/60);
  let secondsDisplay = Math.floor((seconds % 3600)%60) %60 ;
  let hour = document.querySelector('.hour');
  let mins =  document.querySelector('.mins');
  let secs = document.querySelector('.secs');
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
}
// time in hour, mins and secs







// // display time 
  
  
  

// pause.addEventListener("click",(e)=>{
//   pause.classList.add("hide");
//   start.classList.remove("hide");
// })
