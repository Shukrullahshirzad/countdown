const start = document.querySelector(".fa-play");
const pause = document.querySelector(".fa-pause");
let circle = document.querySelector('#circle');
function animate(){
  circle.style.transition = "animate 9s linear forwards"
}
console.log(circle)
start.addEventListener("click",(e)=>{
  pause.classList.remove("hide");
  start.classList.add("hide");
  animate();
})
pause.addEventListener("click",(e)=>{
  pause.classList.add("hide");
  start.classList.remove("hide");
})
