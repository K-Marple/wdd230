// set copyright year
const year = new Date();
const copyrightYear = year.getFullYear();

document.getElementById("copyrightYear").innerHTML = copyrightYear;

// last modified
let lastMod = new Date(document.lastModified);

document.getElementById("lastModified").innerHTML = lastMod;


// set up hamburger menu
const hamMenu = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

// button clicking
hamMenu.addEventListener('click', () => {
    navigation.classList.toggle('closed');
    hamMenu.classList.toggle('closed');
});