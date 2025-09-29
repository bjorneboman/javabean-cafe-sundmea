const burger = document.getElementById("burger");
const menu = document.getElementById("list");

burger.addEventListener("click", () => {
  menu.classList.toggle("open");
});

document.body.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    menu.classList.remove("open");
  }
});
