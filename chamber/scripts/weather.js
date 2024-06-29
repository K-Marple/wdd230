const currentTemp = document.querySelector("#temperature");
const icon = document.querySelector("#weather-icon");
const desc = document.querySelector("#caption");
const wind = document.querySelector("#wind-speed");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=36.82&lon=-119.70&units=imperial&appid=c8cf089950baf27bae6d0edf10e833ff";

async function weatherAPI() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayWeather(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)} &deg;F`;
    wind.innerHTML = data.wind.speed;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let icondesc = data.weather[0].description;
    icon.setAttribute("src", iconsrc);
    icon.setAttribute("alt", icondesc);
    function capital(icondesc) {
        icondesc = icondesc.split(" ");
        for (var i = 0, x = icondesc.length; i < x; i++) {
            icondesc[i] = icondesc[i][0].toUpperCase() + icondesc[i].substr(1);
        }
        return icondesc.join(" ");
    }
    desc.textContent = capital(icondesc);
}

weatherAPI();