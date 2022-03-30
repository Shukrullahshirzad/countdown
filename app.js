const start = document.querySelector(".fa-play");
const pause = document.querySelector(".fa-pause");


start.addEventListener("click",(e)=>{
  pause.classList.remove("hide");
  start.classList.add("hide");
})
pause.addEventListener("click",(e)=>{
  pause.classList.add("hide");
  start.classList.remove("hide");
})
