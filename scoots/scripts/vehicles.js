const vehicleURL = "https://k-marple.github.io/wdd230/scoots/data/rentals.json";
const vehicleCard = document.querySelector(".tabcontent");

async function getVehicleInfo(vehicleURL) {
    const response = await fetch(vehicleURL);
    const data = await response.json();
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
        let content = document.createElement("div");
        let image = document.createElement("img");
        let vehicle = document.createElement("h4");
        let size = document.createElement("p");
        let other = document.createElement("p");
        let price = document.createElement("table");

        image.setAttribute("src", rental.image);
        image.setAttribute("alt", rentals.name);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "259");
        image.setAttribute("height", "194");

        vehicle.innerHTML = rental.name;
        size.innerHTML = `Occupancy: ${rental.occupancy}`;
        other.innerHTML = `Notes: ${rental.other}`;

        let row1 = document.createElement("tr");
        let reservation = document.createElement("th");
        let walkin = document.createElement("th");
        let row2 = document.createElement("tr");
        let cell1 = document.createElement("td");
        let cell2 = document.createElement("td");
        let cell3 = document.createElement("td");
        let cell4 = document.createElement("td");
        let row3 = document.createElement("tr");
        let cell5 = document.createElement("td");
        let cell6 = document.createElement("td");
        let cell7 = document.createElement("td");
        let cell8 = document.createElement("td");

        reservation.textContent = `Reservation`;
        walkin.textContent = `Walk-In`;

        cell1.textContent = `Half Day`;
        cell2.textContent = `Full Day`;
        cell3.textContent = `Half Day`;
        cell4.textContent = `Full Day`;

        cell5.textContent = rental.price;
        cell6.textContent = rental.price;
        cell7.textContent = rental.price;
        cell8.textContent = rental.price;

        console.log(rental.price);


        row1.appendChild(reservation);
        row1.appendChild(walkin);

        row2.appendChild(cell1);
        row2.appendChild(cell2);
        row2.appendChild(cell3);
        row2.appendChild(cell4);

        row3.appendChild(cell5);
        row3.appendChild(cell6);
        row3.appendChild(cell7);
        row3.appendChild(cell8);

        price.appendChild(row1);
        price.appendChild(row2);
        price.appendChild(row3);

        content.appendChild(image);
        content.appendChild(vehicle);
        content.appendChild(size);
        content.appendChild(other);
        content.appendChild(price);

        vehicleCard.appendChild(content);
    });
}

getVehicleInfo(vehicleURL);