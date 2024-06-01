// set copyright year
const year = new Date();
const copyrightYear = year.getFullYear();

document.getElementById("copyrightYear").innerHTML = copyrightYear;

// last modified
let lastMod = new Date(document.lastModified);

document.getElementById("lastModified").innerHTML = lastMod;
