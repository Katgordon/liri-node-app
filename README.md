# liri-node-app
LIRI is a _Language_ Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.
Liri.js can take in one of the following commands:

   * `concert-this`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`
   Liri will respond back with an appropriate response to what the user inputted. Her response will be  either the concert this, spotify this, movie this, and do what it says.

    If the user selects 'concert-this' and puts a band in it will show the user where the band's upcoming shows are.
    'Name of the venue'
    'Venue location'
    'Date of the Event (use moment to format this as "MM/DD/YYYY")'
    
    If the user types in 'spotify-this-song' followed by the song name it will pull up information using the spotify api and will tell the user about the song. 
    'Artist'
    'Song'
    'Preview'
    'Album'
    
    If the user types in 'movie-this' followed by the name of the movie it will tell the user information about the movie such as
    'Title of the movie'
    'Year the movie came out'
    'IMDB Rating of the movie'
    'Rotten Tomatoes Rating of the movie'
    'Country where the movie was produced'
    'Language of the movie'
    'Plot of the movie'
    'Actors in the movie'
    
    If the user types in 'do-what-it-says', then LIRI will choose one of her functions to display.


