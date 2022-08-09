function getRandom(min, max)){
  min = Math.ceil(0);
  max = Math.floor(255);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let r = getRandom(0, 255);
let g = getRandom(0, 255);
let b = getRandom(0,255);

let body =document.querySelector("body")
body.onmouseover = function() {
  body.style.backgroundColor("rgb(getRandom(0, 255),getRandom(0, 255),getRandom(0, 255))")
}