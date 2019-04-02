function getAPIdata() {

	// construct request
	var request = 'https://api.thecatapi.com/v1/images/search';

	// get current kitty
	fetch(request)

	// parse response to JSON format
	.then(function(response) {
		return response.json();
	})

	// do something with response
	.then(function(response) {
		// show full JSON object
		console.log(response);
		document.getElementById('foto').src= response[0].url;

	});
}

// init data stream
getAPIdata();
