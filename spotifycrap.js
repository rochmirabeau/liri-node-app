
// spotify comm // spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
// spotify comm // 	if ( err ) {
// spotify comm // 		console.log('Error occurred: ' + err);
// spotify comm // 		return;
// spotify comm // 	}
// spotify comm // 
// spotify comm // 	console.log('Spotify Search data: ' + JSON.stringify(data)) 
// spotify comm // });
// spotify comm // //
// spotify comm // ;
// spotify comm // 
// spotify comm // var SpotifyWebApi = require('spotify-web-api-node');
// spotify comm // 
// spotify comm // // credentials are optional
// spotify comm // var spotifyApi = new SpotifyWebApi({
// spotify comm // 	clientId : '4e4f6589825446d494d57baf5c605abc',
// spotify comm // 	clientSecret : '4d19aa49ae004fa8bdf0e4be2d0320cc',
// spotify comm // 	redirectUri : 'http://www.example.com/callback'
// spotify comm // });
// spotify comm // 
// spotify comm // 
// spotify comm // spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
// spotify comm // 	.then(function(data) {
// spotify comm // 		console.log('Artist albums', data.body);
// spotify comm // 	}, function(err) {
// spotify comm // 		console.error(err);
// spotify comm // 	});
// spotify comm // 
// spotify comm // var scopes = ['user-read-private', 'user-read-email'],
// spotify comm // 	redirectUri = 'https://example.com/callback',
// spotify comm // 	clientId = '4e4f6589825446d494d57baf5c605abc',
// spotify comm // 	state = 'Arizona';
// spotify comm // 
// spotify comm // // // Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
// spotify comm // //  var spotifyApi = new SpotifyWebApi({
// spotify comm // //    redirectUri : redirectUri,
// spotify comm // //      clientId : clientId
// spotify comm // //      });
// spotify comm // 
// spotify comm // // Create the authorization URL
// spotify comm // var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);
// spotify comm // 
// spotify comm // // https://accounts.spotify.com:443/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice
// spotify comm // console.log(authorizeURL);
// spotify comm // 
// spotify comm // 
// spotify comm // 
// spotify comm // // Create the api object with the credentials
// spotify comm // 
// spotify comm // // Retrieve an access token.
// spotify comm // spotifyApi.clientCredentialsGrant()
// spotify comm // 	.then(function(data) {
// spotify comm // 		console.log('The access token expires in ' + data.body['expires_in']);
// spotify comm // 		console.log('The access token is ' + data.body['access_token']);
// spotify comm // 
// spotify comm // 		// Save the access token so that it's used in future calls
// spotify comm // 		spotifyApi.setAccessToken(data.body['access_token']);
// spotify comm // 	}, function(err) {
// spotify comm // 		console.log('Something went wrong when retrieving an access token', err);
// spotify comm // 	});
