const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

next.addEventListener("click", () => {
    changeSlides(1);
})

prev.addEventListener("click", () => {
    changeSlides(-1);
})

let slideIndex = 1;
showSlides(slideIndex);

function changeSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelector(".slides");
    let caption = document.querySelector("#caption");

    if (n > slides.length) { slideIndex = 1 };
    if (n < 1) { slideIndex = slides.length };

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
    caption.innerHTML = slides[slideIndex - 1].alt;
}