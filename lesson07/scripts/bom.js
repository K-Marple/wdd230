// Declare 3 const variables that reference input, button, and list
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Enhancement - assign results of chaptersArray to function getChaptersList
let chaptersArray = getChaptersList() || [];

// Enhancement - populate list of chapters
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// Create function to run when Add Chapter button is clicked
button.addEventListener("click", () => {
    // Check that the input is not blank with if block, otherwise provide a message or do nothing and focus on input
    if (input.value != "") {
        // Enhancement - call displayList with input value and push it into chaptersArray
        displayList(input.value);
        chaptersArray.push(input.value);

        // Enhancement - update localStorage with new array
        setChaptersList();

        // Clear input and send focus back to it
        input.value = "";
        input.focus();
    }
});

// Enhancement - create displayList function with parameter of item
function displayList(item) {
    // Create a li element and  a delete button, populate li and button textContent
    const listItem = document.createElement("li");
    const deleteBtn = document.createElement("button");
    listItem.textContent = item;
    deleteBtn.textContent = "❌";

    // Enhancement
    deleteBtn.classList.add("delete");

    // Append li element to unordered list in HTML and append delete button to li element
    list.appendChild(listItem);
    listItem.appendChild(deleteBtn);

    // Create function to delete li element when delete button is clicked
    deleteBtn.addEventListener("click", () => {
        list.removeChild(listItem);

        // Enhancement
        deleteChapter(listItem.textContent);

        // Send focus to input element
        input.focus();
    });
}

// Enhancement - create setChaptersList
function setChaptersList() {
    localStorage.setItem("favList", JSON.stringify(chaptersArray));
}

// Enhancement - create getChaptersList
function getChaptersList() {
    return JSON.parse(localStorage.getItem("favList"));
}

// Enhancement - create deleteChapter
function deleteChapter(chapter) {
    // Get rid of the X at the end of the chapter string
    chapter = chapter.slice(0, chapter.length - 1);

    // Redifine chaptersArray to return all but chapter to be removed
    chaptersArray = chaptersArray.filter((item) => item !== chapter);

    // Call setChaptersList to update localStorage
    setChaptersList();
}