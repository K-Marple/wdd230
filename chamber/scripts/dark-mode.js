// dark mode
const root = document.querySelector(":root");
const modeBtn = document.querySelector("#switch");
const body = document.querySelector("body");

modeBtn.addEventListener("click", function () {
    root.classList.toggle("dark");
    body.classList.toggle("dark");
});