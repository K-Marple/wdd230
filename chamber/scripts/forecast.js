const high1 = document.querySelector("#day1-high");
const low1 = document.querySelector("#day1-low");
const high2 = document.querySelector("#day2-high");
const low2 = document.querySelector("#day2-low");
const high3 = document.querySelector("#day3-high");
const low3 = document.querySelector("#day3-low");

const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=36.82&lon=-119.70&units=imperial&appid=c8cf089950baf27bae6d0edf10e833ff";

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
    const dailyHigh = [];
    let highTemps = [];
    let lowTemps = [];

    data.list.forEach((temp) => {
        let highs = temp.main.temp_max;
        let lows = temp.main.temp_min;
        let dates = temp.dt_txt;
        days = dates.substr(8, 2);

        dailyHigh[0] = highs;
        dailyHigh[1] = lows;
        dailyHigh[2] = dates;
        dailyHigh[3] = days;

        days = dailyHigh[3];
        let highTemp = dailyHigh[0];
        let lowTemp = dailyHigh[1];

        if (days == "29") {
            highTemps.push(highTemp);
            lowTemps.push(lowTemp);

            let htotal = 0
            for (t in highTemps) {
                htotal += highTemps[t];
            }
            const highAvg = htotal / highTemps.length;
            high1.innerHTML = `${Math.round(highAvg)} &deg;F`;

            let ltotal = 0
            for (t in lowTemps) {
                ltotal += lowTemps[t];
            }
            const lowAvg = ltotal / lowTemps.length;
            low1.innerHTML = `${Math.round(lowAvg)} &deg;F`;
        }


    })

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



    low1.innerHTML = `${Math.round()} &deg;F`;
}

forecastAPI();