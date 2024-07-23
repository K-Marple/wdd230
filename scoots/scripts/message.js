const container = document.querySelector("#high-cont");
const message = document.querySelector("#high");
const button = document.querySelector("#clsbtn");

const todayURL = "https://api.openweathermap.org/data/2.5/weather?lat=20.49&lon=-86.96&units=imperial&appid=c8cf089950baf27bae6d0edf10e833ff";

async function highAPI() {
    try {
        const response = await fetch(todayURL);
        if (response.ok) {
            const data = await response.json();
            displayTodayHigh(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayTodayHigh(data) {
    message.innerHTML = `Today's High in Cozumel: ${Math.round(data.main.temp_max)} &deg;F`;
}

button.addEventListener("click", () => {
    container.classList.toggle("closed");
})

highAPI();