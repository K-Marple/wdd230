// regular expression to check the applicant's position
const pos = document.querySelector("#position");

let pattern = /^[A-Za-z\-\040]{7,}$/;
let check = pattern.test(pos);

if (check) {
    console.log(pos);
} else {
    console.log("string does not match or there is an error");
}

// save date that the form was completed
let joinDate = document.querySelector("#date");
const submit = document.querySelector("#submit");

submit.addEventListener("click", () => {
    joinDate = Date.now();
    console.log(`Join Date: ${joinDate}`);
});
