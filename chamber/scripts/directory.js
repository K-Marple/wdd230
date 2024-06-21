const directoryURL = "https://k-marple.github.io/wdd230/chamber/data/members.json";

const directory = document.querySelector("#directory");

async function getMemberData(directoryURL) {
    const response = await fetch(directoryURL);
    const data = await response.json();

    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let company = document.createElement("h2");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");
        let logo = document.createElement("img");

        company.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;

        logo.setAttribute("src", member.image);
        logo.setAttribute("alt", `${member.name} logo`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "500");
        logo.setAttribute("height", "500");

        website.setAttribute("href", member.website);
        website.textContent = member.website;

        card.appendChild(logo);
        card.appendChild(company);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        directory.appendChild(card);
    });
}

getMemberData(directoryURL);