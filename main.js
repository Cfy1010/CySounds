const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
const logoImage = document.querySelector(".logo img");

menuBtn.addEventListener("click", function(){
  menuBtn.classList.toggle("active");
  nav.classList.toggle("active");
});

