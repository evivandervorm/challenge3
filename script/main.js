function getAPIdata() {

	// construct request
	var request = 'https://api.openweathermap.org/data/2.5/weather?q=washington,us&appid=0f5210e54863817fb3ac8483a2447158';

	// get current weather
	fetch(request)

	// parse response to JSON format
	.then(function(response) {
		return response.json();
	})

	// do something with response
	.then(function(response) {
		// show full JSON object
		console.log(response);
		document.getElementById('weer').innerHTML = '</br>' + 'Windsnelheid: ' + response.wind.speed + ' m/s ' + '</br>' + 'Windrichting: ' + response.wind.deg + ' deg ' + '</br>' + response.weather[0].description + '</br>' +  Math.floor(response.main.temp - 273.15) + "&#176;C";
		//document.getElementById('weer').innerHTML = response.weather[0].description;

	});
}

// init data stream
getAPIdata();
