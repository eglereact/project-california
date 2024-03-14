// footer language button functionality

const footerLangBtn = document.querySelector(".footer-btn");
const langbox = document.querySelector(".btn-box");

footerLangBtn.addEventListener("click", () => {
  langbox.classList.toggle("show-lang-btn");
});

// menu language button functionality

const menuLangBtn = document.querySelector(".menu-lang-btn");
const menuBtnBox = document.querySelector(".menu-btn-box");

menuLangBtn.addEventListener("click", () => {
  menuBtnBox.classList.toggle("menu-btn-show");
});

// on hover submenu stays on screen
const submenu = document.querySelector(".submenu");

submenu.addEventListener("mouseenter", () => {
  submenu.classList.add("active");
});

submenu.addEventListener("mouseleave", () => {
  submenu.classList.remove("active");
});
