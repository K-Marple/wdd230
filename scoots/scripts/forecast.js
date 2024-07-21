const tmwTemp = document.querySelector("#tmw-temp");
const tmwHumid = document.querySelector("#tmw-humid");
const tmwIcon = document.querySelector("#tmw-icon");
const tmwDesc = document.querySelector("#tmw-desc");

const forecastURL = "api.openweathermap.org/data/2.5/forecast?lat=20.49&lon=-86.96&units=imperial&appid=c8cf089950baf27bae6d0edf10e833ff";

async function forecastAPI() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayForecast(data) {
    tmwTemp.innerHTML = `${Math.round(data.main.temp)} &deg;F`;
    tmwHumid.innerHTML = data.main.humidity;
    const tmwIconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    tmwIcon.setAttribute("src", tmwIconsrc);
    tmwIcon.setAttribute("alt", desc);
    tmwDesc.textContent = `${capitalize(desc)}`;
}

forecastAPI();