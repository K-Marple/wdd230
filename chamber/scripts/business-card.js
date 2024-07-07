const businessURL = "https://k-marple.github.io/wdd230/chamber/data/members.json";
const businessCard = document.querySelector(".business-card");

async function getBusiness(businessURL) {
    const response = await fetch(businessURL);
    const data = await response.json();
    console.log(data.members);
    displayBusiness(data.members);
}

const displayBusiness = (members) => {
    members.forEach((business) => {
        console.log(business);
        if (business.memberLevel == "Silver") {
            let busiCard = document.createElement("div");
            let busiName = document.createElement("h2");
            let busiDesc = document.createElement("p");

            busiName.textContent = business.name;
            busiDesc.textContent = business.description;

            console.log(busiName);
            console.log(busiDesc);

            busiCard.appendChild(busiName);
            busiCard.appendChild(busiDesc);

            businessCard.appendChild(busiCard);
        }
    })

}

getBusiness(businessURL);