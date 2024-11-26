var typed = new Typed(".text", {
  strings: [
    "Programmer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 2000,
  loop: true,
});
let close = document.querySelector(".close");
let menu_bar = document.querySelector(".menu_bar");
let menu = document.querySelector(".menu");

menu_bar.addEventListener("click", () => {
  menu.classList.add("active_btn");
});
close.addEventListener("click", () => {
  menu.classList.remove("active_btn");
});
