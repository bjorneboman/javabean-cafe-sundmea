// Berättar var burgaren hamnar i HTML-filen
const burger = document.getElementById("burger");
// Berättar var listan hamnat i HTML-filen
const list = document.getElementById("list");

// När jag trycker på knappen så skall både burgaren och listan öppnas
burger.addEventListener("click", () => {
  list.classList.toggle("open");
});