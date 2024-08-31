const axios = require('axios');

// Replace with your actual OpenWeatherMap API key
const apiKey = '7d5c97a945ea40662e1fff090876e18f'; // <-- Insert your valid API key here
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';

async function getWeather(city) {
    try {
        const response = await axios.get(baseUrl, {
            params: {
                q: city,
                appid: apiKey,
                units: 'metric' // Use 'imperial' for Fahrenheit
            }
        });

        const data = response.data;
        console.log(`Weather in ${data.name}, ${data.sys.country}:`);
        console.log(`Temperature: ${data.main.temp}°C`);
        console.log(`Weather: ${data.weather[0].description}`);
        console.log(`Humidity: ${data.main.humidity}%`);
        console.log(`Wind Speed: ${data.wind.speed} m/s`);
    } catch (error) {
        console.error(`Error fetching weather data: ${error.message}`);
    }
}

// Replace 'London' with the city you want to fetch weather for
const city = 'London';
getWeather(city);
