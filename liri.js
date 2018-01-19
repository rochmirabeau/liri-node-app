var Twitter = require("twitter");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var request = require('request');
var omdb = require("./omdb.js");
var command = process.argv[2]
var search = process.argv.filter (x => process.argv.indexOf(x) > 2).join(" ")

//console.log(search)


//Twitter Section
var client = new Twitter({
	consumer_key: keys.twitterKeys.consumer_key,
	consumer_secret: keys.twitterKeys.consumer_secret,
	access_token_key: keys.twitterKeys.access_token_key,
	access_token_secret: keys.twitterKeys.access_token_secret,
});


var params = {screen_name: 'wopbot'};
function getTweets() { client.get('statuses/user_timeline', params, function(error, tweets, response) {
			if (!error) {
			
			console.log(tweets);
			}
			console.log(error)
			}) } 

// end Twitter Section

//Spotify Section
var spotify = new Spotify({
  id: keys.spotifyKeys.id,
  secret: keys.spotifyKeys.secret 
});
 
function getSong(search) {
if (search === undefined) {search = 'All The Small Things'}
 spotify.search({ type: 'track', query: search}, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

var result = JSON.stringify(data.tracks.items[0], null, 2)

console.log(JSON.stringify(data.tracks.items[0], null, 2)); 
});
 }
// end Spotify Section

//OMDB Section

function getFilm(search) {

	omdb.getMovie(search)

}
// end OMDB Section


switch (command) {

case  'my-tweets':
	getTweets();
  break;
case  'spotify-this-song':
	getSong(search);
  break;
case  'movie-this':
	getFilm(search);
  break;
case  'do-what-it-says':
  break;
case 'HELP':
	console.log("Options: \n my-tweets \n spotify-this-song SONGNAME \n movie-this MOVIENAME \n do-what-it-says")
default:
	console.log("Enter a command, type 'node liri.js HELP' if need be")
  break;
}
