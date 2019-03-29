require("dotenv").config();

//my variables
var keys = require("./keys.js");
var moment = require('moment');
var fs = require('fs');
var axios = require('axios');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var input = process.argv.slice(3).join("+");




//have liri recognize command
console.log(command);

runLiri(command);

function runLiri(command) {

  if (command === "concert-this") {
    concertThis(input);
  }
  if (command === "spotify-this-song") {
    spotifyThis(input);
  }
  if (command === "movie-this") {
    movieThis(input);
  }
  if (command === "do-what-it-says") {
    doIt();
  }
}


function concertThis(input) {

  console.log(input);
  axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp").then(
    function (response) {
      response.data.forEach(concert => {
        console.log(concert.venue.name)
        console.log(concert.venue.city + ", " + concert.venue.region)
        console.log(concert.datetime)
        console.log("---------------------------")
      })
     
    }
  );
}


function spotifyThis(input) {

    //the sign by ace of bass//
    

  if (!input) {
    input = "The Sign";
  }
  spotify.search({ type: 'track', query: input }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err); //error
    }
    console.log("\n---------------------------------------------------\n")
    console.log("Artist: " + data.tracks.items[0].artists[0].name)
    console.log("Song: " + data.tracks.items[0].name)
    console.log("Preview: " + data.tracks.items[3].preview_url)
    console.log("Album: " + data.tracks.items[0].album.name);
    console.log("\n---------------------------------------------------\n")

  });
}


function movieThis(input) {

  if (!input) {
    movie = "mr nobody";
  }
//  all the omdb stuff
//   * Title of the movie.
//   * Year the movie came out.
//   * IMDB Rating of the movie.
//   * Rotten Tomatoes Rating of the movie.
//   * Country where the movie was produced.
//   * Language of the movie.
//   * Plot of the movie.
//   * Actors in the movie.

  axios.get("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy").then(
    function (response) {

      console.log("\n---------------------------------------------------\n")
      console.log("Title: " + response.data.Title);
      console.log("Year: " + response.data.Year);
      console.log("IMDB Rating: " + response.data.imdbRating);
      console.log("Rotten Tomatoes: " + response.data.Ratings[1]);
      console.log("Country: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Movie Plot: " + response.data.Plot);
      console.log("Actors: " + response.data.Actors);
      console.log("\n---------------------------------------------------\n")
    }
  )
};

function doIt() {

  fs.readFile("random.txt", "utf8", function (error, data) {
    var arr = data.split(",");
    var task = arr[0];
    var input = arr[1].split('"').join('');

console.log(arr);
console.log(task);
console.log(input);

    if (error) {
      return console.log(error);
    }

    if (task === "concert-this"){
      concertThis(input);
    }
    if (task === "spotify-this-song"){
      spotifyThis(input);
    }
    if (task === "movie-this"){
      movieThis(input);
    }

  });
}


