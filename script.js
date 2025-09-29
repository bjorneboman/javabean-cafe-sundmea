const el = document.querySelector("#burger");
const list = document.querySelector("#list");



el.addEventListener("click", () => {
    list.classList.toggle("open");
});
