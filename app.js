// footer language button functionality

const footerLangBtn = document.querySelector(".footer-btn");
const langbox = document.querySelector(".btn-box");

footerLangBtn.addEventListener("click", () => {
  langbox.classList.toggle("show-lang-btn");
});
