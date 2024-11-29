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

// Scroll---------------

// Oxirgi skroll qiymatini saqlash
let lastScrollY = window.scrollY;

const scrollHeader = () => {
  const header = document.getElementById("header");

  // Agar skroll pastga bo'lsa - transform qo'shiladi (yashirinadi)
  if (window.scrollY > lastScrollY && window.scrollY >= 120) {
    header.classList.add("transform");
  }
  // Agar skroll yuqoriga bo'lsa - transform olib tashlanadi (ko'rinadi)
  else {
    header.classList.remove("transform");
  }

  // Joriy skroll joylashuvini yangilash
  lastScrollY = window.scrollY;
};

// Skroll eventini tinglash
window.addEventListener("scroll", scrollHeader);