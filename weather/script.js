function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '191dcf0013a517e93f2220b2adb8470f';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const weatherData = `
         <div class="div"> <h2 class="h2">Weather in ${data.name}</h2>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Description: ${data.weather[0].description}</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p><div>
        `;
            document.getElementById('weatherData').innerHTML = weatherData;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weatherData').innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
        });
}
