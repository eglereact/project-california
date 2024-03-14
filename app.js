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

// select gold or silver

const goldBtn = document.querySelector(".gold");
const silverBtn = document.querySelector(".silver");
const material = document.querySelector(".material");
const materialPrice = document.querySelector(".material-price");

silverBtn.addEventListener("click", () => {
  silverBtn.classList.add("active-btn");
  goldBtn.classList.remove("active-btn");
  material.textContent = "Silver";
  materialPrice.textContent = "270";
});

goldBtn.addEventListener("click", () => {
  goldBtn.classList.add("active-btn");
  silverBtn.classList.remove("active-btn");
  material.textContent = "Gold";
  materialPrice.textContent = "520";
});
