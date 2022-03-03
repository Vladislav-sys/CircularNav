let button = document.querySelector(".btn");
let menu = document.querySelector(".menu");

button.addEventListener("click" , function(){
    menu.classList.toggle("active");
});