
const burger = document.getElementById("burger");
const list = document.getElementById("list");

burger.addEventListener('click', () => {
  list.classList.toggle('active');
});
