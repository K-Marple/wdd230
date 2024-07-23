const vehicleURL = "https://k-marple.github.io/wdd230/scoots/data/rentals.json";
const vehicleCard = document.querySelector(".tabcontent");

async function getVehicleInfo(vehicleURL) {
    const response = await fetch(vehicleURL);
    const data = await response.json();
    console.log(data);
    displayVehicles(data.rentalOptions);
}

const typeS = document.querySelector("#scooter");
const typeA = document.querySelector("#allterrain");
const typeJ = document.querySelector("#jeep")

const displayVehicles = (rentals) => {
    typeS.textContent = rentals[0].type;
    typeA.textContent = rentals[1].type;
    typeJ.textContent = rentals[2].type;

    rentals.forEach((rental) => {
        let image = document.createElement("img");
        let vehicle = document.createElement("h4");
        let size = document.createElement("p");
        let other = document.createElement("p");
        let price = document.createElement("table");

        image.setAttribute("src", rental.image);
        image.setAttribute("alt", rentals.name);
        image.setAttribute("loading", "lazy");
        image.setAttribute("")

        vehicleCard.appendChild(image);
        vehicleCard.appendChild(vehicle);
        vehicleCard.appendChild(size);
        vehicleCard.appendChild(other);
        vehicleCard.appendChild(price);
    });
}

getVehicleInfo(vehicleURL);