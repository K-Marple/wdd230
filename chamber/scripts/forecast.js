const card = document.querySelector("#forecast-card");

const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=36.82&lon=-119.70&units=imperial&appid=c8cf089950baf27bae6d0edf10e833ff";

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

function getDailyForecast(data) {
    let dailyTemps = [];
    const date = new Date();
    const findDay = (1000 * 60 * 60 * 24);

    data.list.forEach((temp, index) => {
        const tempDay = new Date(temp.dt_txt)
        const dayChange = tempDay - date;
        const days = dayChange / findDay;

        if (dailyTemps[days] == null) {
            dailyTemps[days] = {};
        }

        if (dailyTemps[days].date == null) {
            dailyTemps[days].date = tempDay;
        }

        if (dailyTemps[days].icon == null) {
            dailyTemps[days].icon = `https://openweathermap.org/ing/wn/${temp.weather[0].icon}.png`;
        }

        if (dailyTemps[days].high == null) {
            dailyTemps[days].high = 0;
        }

        if (dailyTemps[days].low == null) {
            dailyTemps[days].low = 1000;
        }

        dailyTemps.high = Math.max(temp.main.temp, dailyTemps[days].high);
        dailyTemps.low = Math.min(temp.main.temp, dailyTemps[days].low);
    })

    return dailyTemps;
}

function displayForecast(data) {
    let forecast = getDailyForecast(data);
    console.log(forecast);

    for (let x = 1; x < 4; x++) {
        let info = forecast[x];
        console.log(info);

        const day = document.createElement("div");
        const date = document.createElement("p")
        const high = document.createElement("p");
        const low = document.createElement("p");
        const icon = document.createElement("img");

        let forecastDay = info.date.toLocalDateString("en-US", { weekday: "long", month: "long", day: "numeric" });

        date.textContent = forecastDay;
        high.innerHTML = `High: ${info.high} &deg;F`;
        low.innerHTML = `Low: ${info.low} &deg;F`;

        icon.setAttribute("src", info.icon);
        icon.setAttribute("alt", "Weather Icon");

        day.appendChild(date);
        day.appendChild(icon);
        day.appendChild(high);
        day.appendChild(low);

        card.appendChild(day);
        console.log(card);
    }
}

// highTemps.forEach((hvalue) => {
//     let h = hvalue;
//     console.log(h);

//     for (let v in h) {
//         highVal = h[v];
//     }
//     console.log(highVal);
// });

// let highVal = 0;
// for (let v in hvalue) {
//     highVal += hvalue[v];
// }
// console.log(highVal);

// lowTemps.forEach((lvalues) => {
//     let l = lvalues;
//     console.log(l);
// });

// low1.innerHTML = `${Math.round()} &deg;F`;

forecastAPI();