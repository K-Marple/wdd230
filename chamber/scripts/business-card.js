const businessURL = "https://k-marple.github.io/wdd230/chamber/data/members.json";
const businessCard = document.querySelector(".business-card");

async function getBusiness(businessURL) {
    const response = await fetch(businessURL);
    const data = await response.json();

    displayBusiness(data.members);
}

function displayBusiness(business) {
    let businesses = [
        business.filter(level => business.memberLevel == "Silver"),
        business.filter(level => business.memberLevel == "Gold")
    ]

    let cards = [];

    let cardNum = 0
    while (cardNum < 3) {
        let randomBusiness = getRandomBusiness(businesses);
        let randomCard = getRandomBusiness(randomBusiness);

        if (!cards.includes(randomCard)) {
            cards.push(randomCard);

            cardNum++;
        }
    }
}

function createCard(business) {
    let busiCard = document.createElement("div");
    let busiName = document.createElement("h2");
    let busiLogo = document.createElement("img");
    let busiDesc = document.createElement("p");

    busiName.textContent = business.name;
    busiDesc.textContent = business.description;

    busiLogo.setAttribute("src", business.image);
    busiLogo.setAttribute("alt", `${business.name} logo`);
    busiLogo.setAttribute("loading", "lazy");
    busiLogo.setAttribute("width", "500");
    busiLogo.setAttribute("height", "500");

    busiCard.appendChild(busiLogo);
    busiCard.appendChild(busiName);
    busiCard.appendChild(busiDesc);

    businessCard.appendChild(busiCard);
}

function getRandomBusiness(busi) {
    const random = Math.floor(Math.random() * busi.length);
    const randomBusi = busi[random];
    return randomBusi;
}

getBusiness(businessURL);