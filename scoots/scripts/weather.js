const curTemp = document.querySelector("#cur-temp");
const curHumid = document.querySelector("#cur-humid");
const curIcon = document.querySelector("#cur-icon");
const curDesc = document.querySelector("#cur-desc");

const tmwTemp = document.querySelector("#tmw-temp");
const tmwHumid = document.querySelector("#tmw-humid");
const tmwIcon = document.querySelector("#tmw-icon");
const tmwDesc = document.querySelector("#tmw-desc");

const currentURL = "https://api.openweathermap.org/data/2.5/weather?lat=20.49&lon=-86.96&units=imperial&appid=c8cf089950baf27bae6d0edf10e833ff";
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=20.49&lon=-86.96&units=imperial&appid=c8cf089950baf27bae6d0edf10e833ff";

async function currentAPI() {
    try {
        const response = await fetch(currentURL);
        if (response.ok) {
            const data = await response.json();
            displayCurrent(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayCurrent(data) {
    curTemp.innerHTML = `${Math.round(data.main.temp)} &deg;F`;
    curHumid.innerHTML = data.main.humidity;
    const curIconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    curIcon.setAttribute("src", curIconsrc);
    curIcon.setAttribute("alt", desc);
    curDesc.textContent = `${capitalize(desc)}`;
}

async function forecastAPI() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function getForecast(data) {
    let tmwData = [];
    const date = new Date();

    data.list.forEach((temps) => {
        const tempDay = new Date(temps.dt_txt);
        const dayChange = tempDay - date;
        const days = dayChange / (1000 * 60 * 60 * 24);

        if (tmwData[days] == null) {
            tmwData[days] = {};
        }

        if (tmwData[days].date == null) {
            tmwData[days].date = tempDay;
        }

        if (tmwData[days].icon == null) {
            tmwData[days].icon = `https://openweathermap.org/img/w/${temps.weather[0].icon}.png`;
        }

        if (tmwData[days].desc == null) {
            tmwData[days].desc = `${temps.weather[0].description}`;
        }

        if (tmwData[days].temp == null) {
            tmwData[days].temp = `${temps.main.temp}`;
        }

        if (tmwData[days].humid == null) {
            tmwData[days].humid = `${temps.main.humidity}`;
        }
    });

    return tmwData;
}

function displayForecast(data) {
    let forecast = getForecast(data);
    console.log(forecast);

    for (let x = 1; x < 2; x++) {
        console.log(x);
        let info = forecast(x);
        console.log(info);
    }
    // tmwTemp.innerHTML = `${Math.round(data.main.temp)} &deg;F`;
    // tmwHumid.innerHTML = data.main.humidity;
    // const tmwIconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    // let desc = data.weather[0].description;
    // tmwIcon.setAttribute("src", tmwIconsrc);
    // tmwIcon.setAttribute("alt", desc);
    // tmwDesc.textContent = `${capitalize(desc)}`;
}

function capitalize(desc) {
    desc = desc.split(" ");
    for (var i = 0, x = desc.length; i < x; i++) {
        desc[i] = desc[i][0].toUpperCase() + desc[i].substr(1);
    }
    return desc.join(" ");
}

currentAPI();
forecastAPI();