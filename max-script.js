const burger = document.getElementById("burger");
const list = document.getElementById("list");

// Toggles the menu to show or hide, displays button as X or burger
burger.addEventListener("click", () => {
  list.classList.toggle("open");
  burger.classList.toggle("active");
});
