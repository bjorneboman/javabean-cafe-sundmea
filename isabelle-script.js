const burger = document.getElementById("burger");
const menu = document.getElementById("list");

burger.addEventListener("click", () => {
  menu.classList.toggle("open");
});
