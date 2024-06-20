const fetchWeatherData = async (city) => {
	const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=c`;
  
	const options = {
	  method: 'GET',
	  headers: {
		'x-rapidapi-key': '8e12796496msha1abcd4cfcd81c6p165fafjsnb7724921747f',
		'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
	  }
	};
  
	try {
	  const response = await fetch(url, options);
  
	  if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	  }
  
	  const data = await response.json();
  
	  if (data && data.location && data.current_observation && data.forecasts) {
		document.getElementById("cityName").innerText = data.location.city;
		document.getElementById("temperature").innerText = data.current_observation.condition.temperature + ' °C';
		document.getElementById("humidityPct1").innerText = data.current_observation.atmosphere.humidity + ' %';
		document.getElementById("humidityPct2").innerText = data.current_observation.atmosphere.humidity + ' %';
		document.getElementById("cloudPct").innerText = data.current_observation.atmosphere.visibility + ' km';
		document.getElementById("maxTemp").innerText = data.forecasts[0].high + ' °C';
		document.getElementById("minTemp").innerText = data.forecasts[0].low + ' °C';
		document.getElementById("windSpeed").innerText = data.current_observation.wind.speed + ' km/h';
		document.getElementById("windDegree").innerText = data.current_observation.wind.direction + ' °';
	  } else {
		console.error("Incomplete data returned from Yahoo Weather API", data);
	  }
	} catch (error) {
	  console.error("Error fetching weather data:", error);
	}
  };
  
  document.addEventListener("DOMContentLoaded", () => {
	fetchWeatherData("Delhi");
  
	document.querySelector("form").addEventListener("submit", (event) => {
	  event.preventDefault();
	  const city = document.querySelector("input[type='search']").value;
	  fetchWeatherData(city);
	});
  });
  