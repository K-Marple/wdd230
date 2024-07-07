// dark mode
const modeBtn = document.querySelector("#switch");
const main = document.querySelector("main");

modeBtn.addEventListener("click", () => {
    main.classList.toggle("dark");
});