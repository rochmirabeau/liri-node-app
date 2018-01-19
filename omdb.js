// var movie = process.argv[2] || "Mr. Nobody"

var request = require("request");

//rewritten as a function

function getMovie(movie) {
	if (!movie) {
		movie = "Mr. Nobody"
	}

	request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {

			// If the request is successful (i.e. if the response status code is 200)
			if (!error && response.statusCode === 200) {

			// Parse the body of the site and recover just the imdbRating
			// (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
			var result = "Title: " + JSON.parse(body).Title + "\n" +
					"Year: " + JSON.parse(body).Year +  "\n" +
					"IMDB Rating: " + JSON.parse(body).imdbRating +  "\n" +
					"Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value +  "\n" +
					"Country: " + JSON.parse(body).Country +  "\n" +
					"Lang: " + JSON.parse(body).Language +  "\n" +
					"Plot: " + JSON.parse(body).Plot +  "\n" +
					"Actors: " + JSON.parse(body).Actors  ;
			console.log(result)
			return result
				   

			}
			});

}

module.exports = {
   getMovie: getMovie
}
