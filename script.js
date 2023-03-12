//  =============== Setup elements
const mobileMenu = document.getElementsByClassName("menu")[0];
const mobileLinks = document.getElementsByClassName("links")[0];
const modalLayer = document.getElementsByClassName("layer")[0];

//  =============== Events
mobileMenu.addEventListener("click", () => {
  mobileLinks.classList.toggle("active");
  mobileLinks.classList.contains("active")
    ? (mobileMenu.src = "images/icon-close.svg")
    : (mobileMenu.src = "images/icon-hamburger.svg");
  mobileLinks.classList.contains("active")
    ? (modalLayer.style.display = "block")
    : (modalLayer.style.display = "none");
});

modalLayer.addEventListener("click", () => {
  mobileLinks.classList.remove("active");
  mobileMenu.src = "images/icon-hamburger.svg";
  modalLayer.style.display = "none";
});
