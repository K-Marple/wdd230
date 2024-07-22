const vehicleURL = "https://k-marple.github.io/wdd230/scoots/data/rentals.json";
const vehicleCard = document.querySelector("#vehicles");

async function getVehicleInfo(vehicleURL) {
    const response = await fetch(vehicleURL);
    const data = await response.json();
    console.log(data);
    displayVehicles(data.rentalOptions);
}

const displayVehicles = (rentals) => {
    rentals.forEach((rental) => {
        let type = document.createElement("div");

        type.textContent = rental.type;
        console.log(type);

        let vehicle = document.createElement("p");

        vehicleCard.appendChild(type);


    });
}

getVehicleInfo();