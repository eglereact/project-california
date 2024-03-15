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

// show hide sidebar
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const sidebarContainer = document.querySelector(".sidebar-container");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
  sidebarContainer.classList.add("show-bg");
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
  sidebarContainer.classList.remove("show-bg");
  document.body.style.overflow = "auto";
});

// Hide the sidebar if screen width is 960px or larger
const checkScreenWidth = () => {
  let screenWidth = window.innerWidth; // Get the width of the window

  if (screenWidth >= 960) {
    sidebar.style.display = "none";
    sidebarContainer.style.display = "none";
    document.body.style.overflow = "auto";
  } else {
    sidebar.style.display = "block";
    sidebarContainer.style.display = "block";
    document.body.style.overflow = "hidden";
  }
};

checkScreenWidth();
window.addEventListener("resize", checkScreenWidth);
