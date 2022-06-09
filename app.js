let slider = document.querySelectorAll(".slider");
let right= document.querySelector(".right");
let left = document.querySelector(".left")
let position = 0;
function activateslide() {
  for (let x = 0; x < slider.length; x++) {
    // slider[x].style.display = "none";
  }
  position++;
  if(position > slider.length){
    position =1
  }
  slider[position-1].style.display = "block"
}
setInterval(()=>{
activateslide()
},5000);

right.addEventListener("click", function() {
position = position + 1
for(x=0; x < slider.length;x++){
slider[x].style.display = "none"
}
if(position > slider.length){
position = 1
}
slider[position -1].style.display = "block"

})
left.addEventListener("click",function (){
position = position - 1;

if(position < 1){

position = slider.length
}

for(let x = 0; x < slider.length; x++){
slider[x].style.display = "none"
}
slider[position-1].style.display = "block"
})
