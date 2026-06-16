const apiKey = "1b4d3d287d226a0f36cf45f8f0afb96c";

async function getWeather() {

    const city =
        document.getElementById("cityInput").value;

    if(city === "") {
        alert("Please enter a city name");
        return;
    }

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);

        const data = await response.json();

        if(data.cod !== 200) {
            alert("City not found");
            return;
        }

        document.getElementById("cityName")
            .innerText = data.name;

        document.getElementById("temperature")
            .innerText = data.main.temp + " °C";

        document.getElementById("condition")
            .innerText = data.weather[0].main;

        document.getElementById("humidity")
            .innerText =
                "Humidity: " +
                data.main.humidity +
                "%";

        const icon =
            data.weather[0].icon;

        document.getElementById("weatherIcon")
            .src =
            `https://openweathermap.org/img/wn/${icon}@2x.png`;

    }
    catch(error) {

        console.log(error);

        alert("Something went wrong");

    }
}

document
    .getElementById("searchBtn")
    .addEventListener("click", getWeather);