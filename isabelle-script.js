const burger = document.getElementById("burger");
const menu = document.getElementById("list");

/* Toggle menu */
burger.addEventListener("click", () => {
  menu.classList.toggle("open");
  menu.style.backgroundColor = "red";
});

/* Close menu on escape */
document.body.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    menu.classList.remove("open");
  }
});

/* Close menu on click outside menu */
window.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && !burger.contains(event.target)) {
    menu.classList.remove("open");
  }
});
