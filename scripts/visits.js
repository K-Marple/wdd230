// calucate and store the number of visits to the site
// create display variable
const displayVisits = document.querySelector(".visits");

// get the value already stored if any, if not make the variable 0
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// if first visit or display number of visits
if (numVisits = 0) {
    displayVisits.textContent = "Welcome to my page!";
} else {
    displayVisits.textContent = numVisits;
}

// add to numVisits by one
numVisits++;

// store visits in localStorage (key=numVisits-ls) (ls=localStorage)
localStorage.setItem("numVisits-ls", numVisits);