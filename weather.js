const axios = require('axios');

const apiKey = 'YOUR_API_KEY_HERE';
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

// Accept city name from command-line arguments
const city = process.argv[2] || 'London'; // Default to 'London' if no argument provided
getWeather(city);
