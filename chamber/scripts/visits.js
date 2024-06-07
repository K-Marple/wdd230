// create variables
const displayVisits = document.querySelector(".visits");

//get stored value
let dateVisit = Date(window.localStorage.getItem("dateLastVisit"));

const lastVisit = localStorage.getItem(dateVisit);

// if statement
if (!lastVisit) {
    displayVisits.textContent = "Welcome! Let us know if you have any questions.";
    console.log(`dateVisit: ${dateVisit}`);
    console.log(`lastVisit: ${lastVisit}`);
} else if (lastVisit > Date.now()) {
    const lastVisitDate = Date.parse(lastVisit);
    displayVisits.textContent = "Back so soon! Awesome!";
    console.log(`lastVisitDate: ${lastVisitDate}`);
} else {
    const today = new Date();
    console.log(`today: ${today}`);

    const elapseTime = today - lastVisitDate;
    const daysAgo = Math.floor(elapseTime / (1000 * 60 * 60 * 24));

    displayVisits.textContent = `You last visited ${daysAgo} days ago.`;
}

// store dates in localStorage (key=dateVisit-ls) (ls=localStorage)
localStorage.setItem("dateLastVisit", dateVisit);