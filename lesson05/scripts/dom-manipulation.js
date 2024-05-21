// Manipulate elements in DOM

// First, select the element
const link = document.querySelector("a");

// Can change text or link
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

// Selecting new element
const sect = document.querySelector("section");

// Can create new elements and add (append) them
const para = document.createElement("p");
para.textContent = "We hope you enjoy the ride.";

sect.appendChild(para);

const text = document.createTextNode(
    " - the premier source for web development knowledge.",
);

const linkPara = document.querySelector("p");
linkPara.appendChild(text);

// Move elements around
sect.appendChild(linkPara);

// Remove elements
// sect.removeChild(linkPara);

// linkPara.remove();

// linkPara.parentNode.removeChild(linkPara);


// Manipulate CSS
// para.style.color = "white";
// para.style.backgroundColor = "black";
// para.style.padding = "10px";
// para.style.width = "250px";
// para.style.textAlign = "center";

// Set class name 'highlight' to para (which allows CSS to work)
para.setAttribute("class", "highlight");