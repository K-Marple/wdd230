// get temperature and wind speed
const temp = document.getElementById("temperature").innerHTML;
const speed = document.getElementById("wind-speed").innerHTML;

// check specification limits of <=50 for temp and >3.0 for speed
if (temp <= "50" && speed > "3.0") {
    // calculate and display windchill
    document.getElementById("windchill").innerHTML =
        (35.74 + (0.6215 * temp) - (35.75 * speed ** 0.16) +
            (0.4275 * temp * speed ** 0.16));
} else {
    document.getElementById("windchill").innerHTML = "N/A";
};