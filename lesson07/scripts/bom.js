// Declare 3 const variables that reference input, button, and list
const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

// Create function to run when Add Chapter button is clicked
button.addEventListener("click", () => {
    // Check that the input is not blank with if block, otherwise provide a message or do nothing and focus on input
    if (input.value != "") {
        // Create a li element and  a delete button, populate li and button textContent
        const listItem = document.createElement("li");
        const deleteBtn = document.createElement("button");
        listItem.textContent = input.value;
        deleteBtn.textContent = "❌";

        // Append li element to unordered list in HTML and append delete button to li element
        list.appendChild(listItem);
        listItem.appendChild(deleteBtn);

        // Create function to delete li element when delete button is clicked
        deleteBtn.addEventListener("click", () => {
            list.removeChild(listItem);
        });

        // Send focus to input element
        input.focus();

        // Change input to blank to clean up the interface for user
        input.value = "";
    }

    else {
        input.focus();
    }
});