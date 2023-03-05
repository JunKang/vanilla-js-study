const API_KEY = "f4d1b4b839fa474671930be528798b08";

const localWeatherSpan = document.querySelector("#local-weather");
const hawaiiWeatherSpan = document.querySelector("#hawaii-weather");

function getWeather(lat, lon, span) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  const result = fetch(url).then((response) => {
    if (response.status === 200) {
      response.json().then((data) => {
        let cityName = data.name;
        const weatherStr = data.weather[0].description;
        const temp = data.main.temp;

        if (cityName === "") {
          cityName = "Hawaii";
        }

        span.innerHTML = `${weatherStr} in ${cityName} / ${temp}°C`;
      });
    } else {
      console.log(`Fail to get weather API. status code = ${response.status}`);
    }
  });
}

function getHawaiiWeather() {
  const lat = 19.8968;
  const lon = 155.5828;

  getWeather(lat, lon, hawaiiWeatherSpan);
}

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  getWeather(lat, lon, localWeatherSpan);
}

function onGeoFail() {
  localWeatherSpan.innerHTML = "";
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail);
getHawaiiWeather();
