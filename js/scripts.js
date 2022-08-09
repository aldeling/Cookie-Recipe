
/* window.onload = function() {

function getRandom(min, max){
  min = Math.ceil(0);
  max = Math.floor(255);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let r = getRandom(0, 255).toString();
let g = getRandom(0, 255).toString();
let b = getRandom(0,255).toString();
let rgb = "rgb(".concat(r, g, b).concat(")");

let body =document.querySelector("body");

body.onmouseover = function() {
  body.style.backgroundColor= "rgb";
};

}; */

window.onload = function() {

  function getRandom(min, max){
    min = Math.ceil(0);
    max = Math.floor(255);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  let r = getRandom(0, 255).toString();
  let g = getRandom(0, 255).toString();
  let b = getRandom(0,255).toString();
  let rgb = "rgb(".concat(r, g, b).concat(")");
  
  let body =document.querySelector("body");
  
  body.onclick = function() {
    body.style.backgroundColor= "rgb";
  };
  
  };