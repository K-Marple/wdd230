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

function openTab(tab, element, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.background = "";
    }

    document.getElementById(tab).style.display = "block";

    element.style.background = color;
}

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

        image.setAttribute("src", rental.vehicles.image);
        image.setAttribute("alt", rentals.vehicles.name);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "259");
        image.setAttribute("height", "194");

        vehicle.innerHTML = rental.vehicles.name;
        size.innerHTML = `Occupancy: ${rental.vehicles.occupancy}`;
        other.innerHTML = `Notes: ${rental.vehicles.other}`;

        rental.vehicles.price.forEach((cost) => {
            let headRow = document.createElement("tr");
            let res = document.createElement("th");
            let walk = document.createElement("th");

            let dayRow = document.createAttribute("tr");
            let halfR = document.createAttribute("td");
            let fullR = document.createElement("td");
            let halfW = document.createAttribute("td");
            let fullW = document.createElement("td");

            let costRow = document.createAttribute("tr");
            let costHR = document.createElement("td");
            let costFR = document.createElement("td");
            let costHW = document.createElement("td");
            let costFW = document.createElement("td");

            res.innerHTML = "Reservation";
            res.setAttribute("colspan", "2");
            walk.innerHTML = "Walk-In";
            walk.setAttribute("colspan", "2");

            halfR.innerHTML = "Half Day (3hrs)";
            fullR.innerHTML = "Full Day";
            halfW.innerHTML = "Half Day (3hrs)";
            fullW.innerHTML = "Full Day";

            costHR.innerHTML = cost.reservation.half;
            costFR.innerHTML = cost.reservation.full;
            costHW.innerHTML = cost.walkIn.half;
            costFW.innerHTML = cost.walkIn.full;

            headRow.appendChild(res);
            headRow.appendChild(walk);

            dayRow.appendChild(halfR);
            dayRow.appendChild(fullR);
            dayRow.appendChild(halfW);
            dayRow.appendChild(fullW);

            costRow.appendChild(costHR);
            costRow.appendChild(costFR);
            costRow.appendChild(costHW);
            costRow.appendChild(costFW);

            price.appendChild(headRow);
            price.appendChild(dayRow);
            price.appendChild(costRow);
        });

        content.appendChild(image);
        content.appendChild(vehicle);
        content.appendChild(size);
        content.appendChild(other);
        content.appendChild(price);

        vehicleCard.appendChild(content);
    });

}

getVehicleInfo(vehicleURL);