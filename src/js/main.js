window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.classList.toggle("header_sticky", window.scrollY > 0);
});

const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger");
burger.addEventListener("click", () => {
    burger.classList.toggle("active");
  nav.classList.toggle("active");

  

});