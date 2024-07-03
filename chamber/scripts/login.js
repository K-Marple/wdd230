const login = document.getElementById("login");
const modal = document.getElementById("login-modal");
const closeBtn = document.querySelector(".close");

login.addEventListener("click", () => {
    modal.style.display = "block";
})

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
})