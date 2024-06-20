const baseURL = "https://k-marple.github.io/wdd230/";
const linksURL = "https://k-marple.github.io/wdd230/data/links.json";

const activities = document.getElementById("activities");

async function getLinks(linksURL) {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}

const displayLinks = (weeks) => {
    weeks.forEach((weekData) => {
        let list = document.createElement("li");

        list.textContent = `${weekData.lesson}: `;


        weekData.links.forEach((linkData, linkLength) => {
            let link = document.createElement("a");

            link.setAttribute("href", linkData.url);
            link.textContent = linkData.title;

            list.appendChild(link);

            if (linkLength + 1 < weekData.links.length) {
                link.innerHTML = `${link.innerHTML} ~`;
            }
        });

        activities.appendChild(list);
    });
}

getLinks(linksURL);