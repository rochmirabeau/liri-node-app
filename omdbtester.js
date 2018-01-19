var omdb = require('./omdb.js')
var movie = process.argv[2] || 'Mr. Nobody'
console.log(omdb.getMovie(movie))
