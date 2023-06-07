const menu = document.querySelector(".menu");
const inicio = document.querySelector(".inicio");
menu.addEventListener("click", function(){
    inicio.classList.toggle("open");
})