const temperature = document.querySelector("#temp");
const icon = document.querySelector("#temp-icon");
const description = document.querySelector("figcaption");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=35.36&lon=-119.06&units=imperial&appid=c8cf089950baf27bae6d0edf10e833ff";

async function weatherAPI() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayWeather(data) {
    temperature.innerHTML = `${Math.round(data.main.temp)} &deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let descript = data.weather[0].description;
    icon.setAttribute("src", iconsrc);
    icon.setAttribute("alt", descript);
    function capital(descript) {
        descript = descript.split(" ");
        for (var i = 0, x = descript.length; i < x; i++) {
            descript[i] = descript[i][0].toUpperCase() + descript[i].substr(1);
        }
        return descript.join(" ");
    }
    description.textContent = `${capital(descript)}`;
}

weatherAPI();