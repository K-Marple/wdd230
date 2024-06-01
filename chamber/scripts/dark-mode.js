// dark mode
const modeBtn = document.querySelector("#switch");
const body = document.querySelector("body");

modeBtn.addEventListener("click", function () {
    body.classList.toggle("dark");
});