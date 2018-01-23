var Twitter = require("twitter");
var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var request = require('request');
var omdb = require("./omdb.js");
var command = process.argv[2]
var search = process.argv.filter (x => process.argv.indexOf(x) > 2).join(" ").trim()

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

var results = tweets.map(alltweets => new Object ({date : alltweets.created_at, text : alltweets.text}))
			
			console.log(JSON.stringify(results, null, 2))
			return;
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
console.log(search)

if (search === "") {search = "Slum Village Go Ladies"}
//I know you guys wanted the sign but this song is way better
 spotify.search({ type: 'track', query: search}, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

var firstResult = [data.tracks.items[0]]
var song = firstResult.map(item => new Object({
	Artist: item.album["artists"][0]["name"],
	Title: item.name, 
	Album: item.album["name"],
	Link: item.preview_url}))
// var song = firstResult.map(result => new Object ({Link: firstResult.href}))
console.log(song)
// console.log(JSON.stringify(data.tracks.items[0], null, 2)); 
});
 }
// end Spotify Section

//OMDB Section

function getFilm(search) {

	omdb.getMovie(search)

}
// end OMDB Section


// read file section


function getRandom() {


fs.readFile("./random.txt", 'utf8' , (err, data) => {
  if (err) throw err;
  console.log(data);
  var execute = data.trim().split(',')
  command = execute[0].slice(2)
  search = execute[1]

  run()
});

}

// end read file section

function run() {

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
	getRandom();
  break;
case 'HELP':
	console.log("Options: \n my-tweets \n spotify-this-song SONGNAME \n movie-this MOVIENAME \n do-what-it-says")
default:
	console.log("Enter a command, type 'node liri.js HELP' if need be")
  break;
}
}
run()
