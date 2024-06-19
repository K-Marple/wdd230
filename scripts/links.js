const baseURL = "https://k-marple.github.io/wdd230/";
const linksURL = "https://k-marple.github.io/wdd230/data/links.json";

const activities = document.getElementById("activities");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

getLinks();

const displayLinks = (lessons) => {
    lessons.forEach((lessonData) => {
        let list = document.createElement("li");
        list.textContent = `${lessonData.lesson}: `;
    });
}