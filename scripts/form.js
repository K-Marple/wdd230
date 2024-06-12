// Confirm passwords match
const pw1 = document.querySelector("#pass");
const pw2 = document.querySelector("#pass2");
const message = document.querySelector("#errormessage");

pw2.addEventListener("focusout", checkSame);

function checkSame() {
    if (pw1.value !== pw2.value) {
        message.textContent = "Passwords do not match!";
        message.style.visibility = "show";
        message.style.background = "#DD6971";
        message.style.padding = "1rem";
        pw2.style.background = "#DD6971";
        pw2.value = "";
        pw2.focus();
    } else {
        message.style.display = "none";
        pw2.style.background = "#fff";
        pw2.style.color = "#000";
    }
}

// Check email is valid
document.addEventListener("DOMContentLoaded", function () {
    // Function for form submission
    function handleSubmit(event) {

        // Prevent default submission
        event.preventDefault();

        // Access elements
        let formtar = event.target;
        let formData = new FormData(formtar);

        // Display element values
        for (let pair of formData.entries()) {
            console.log(pair[0] + ": " + pair[1]);
        }
    }

    const form = document.querySelector("form");
    form.addEventListener("submit", handleSubmit);
});

// Range
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rate");

range.addEventListener("change", displayRatingValue);
range.addEventListener("input", displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}