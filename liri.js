var fs = require('fs');
var keys = require('./keys.js');

//*******************************TWITTER****************************************

if (process.argv[2]==="my-tweets"){
  var Twitter = require('twitter');

    var client = new Twitter({
      consumer_key: keys.twitterKeys.consumer_key,
      consumer_secret: keys.twitterKeys.consumer_secret,
      access_token_key: keys.twitterKeys.access_token_key,
      access_token_secret: keys.twitterKeys.access_token_secret
    });

    var path  = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
    var params = 'KnoerzerKevin';

    client.get(path, params, function(error, tweets, response){
      if (error){
        console.log(error)
      }
      for (i=0;i<tweets.length;i++){
        console.log(' ')
        console.log(tweets[i].text)
        console.log('*******************************************************')
        console.log(' ')
      }
    });
};

//******************************* SPOTIFY **************************************

if (process.argv[2]==="spotify-this-song"){
  var spotify = require('spotify');

  spotify.search({ type: 'track', query: process.argv[3] }, function(error, data) {
    if (error) {
        console.log('Error occurred: ' + error);
        return;
    };
    if (data.tracks.items.length == 0){
      var path = "https://api.spotify.com/v1/tracks/7GhIk7Il098yCjg4BQjzvb"
      spotify.get(path, function(error, data) {
        var rick = require('./rickRoll.js')
        console.log(' ')
        console.log('Artist name: ', data.artists[0].name)
        console.log('Track name: ', data.name)
        console.log("Rick Roll'd try again!");
        console.log(rick)

      });
    };
    // console.log(data.tracks)
    for (j=0;j<data.tracks.items.length;j++){
      var num = j+1;
      console.log(' ');
      console.log('Result #'+num);
      console.log('Artist name: ', data.tracks.items[j].artists[0].name);
      console.log('Track name: ', data.tracks.items[j].name);
      console.log('Link to the song: ', data.tracks.items[j].href);
      console.log('Album name: ', data.tracks.items[j].album.name);
      console.log('**************************************************************************************************************')
      console.log(' ');
    };
  });

};

if (process.argv[2]==="movie-this"){
  var request = require('request')
  var query = process.argv[3];
  var search = 'http://www.omdbapi.com/?t='+query+'&y=&plot=short&r=json&tomatoes=true';
  request.get(search, function(error, data, body){

    jsonBody = JSON.parse(body);

    if(jsonBody.Error){
      var nobody = "Mr. Nobody";
      search = 'http://www.omdbapi.com/?t='+nobody+'&y=&plot=short&r=json&tomatoes=true';
      request.get(search, function(error, data, body){
        jsonBody = JSON.parse(body);
        console.log(' ');
        console.log("YOUR SEARCH "+process.argv[3]+" GOT NO RESPONSE, BUT YOU SHOULD CHECK OUT THIS MOVIE INSTEAD ABOUT IMMORTALITY AND CHOICES. IT'S VERY NUANCED AND IT HAS JARED LETO, HE'S PRETTY COOL");
        console.log('The title is: ', jsonBody.Title);
        console.log('The year it came out: ', jsonBody.Year);
        console.log('IMDB Rating: ', jsonBody.imdbRating);
        console.log('Released country: ', jsonBody.Country);
        console.log('Language: ', jsonBody.Language);
        console.log('Plot: ', jsonBody.Plot);
        console.log('Actors: ', jsonBody.Actors);
        console.log('Tomatoe Rating: ', jsonBody.tomatoMeter);
        console.log('Tomatoe URL: ', jsonBody.tomatoURL);
        console.log('**************************************************************************************************************');
        console.log(' ');
      });
    }else{
      console.log(' ');
      console.log('The title is: ', jsonBody.Title);
      console.log('The year it came out: ', jsonBody.Year);
      console.log('IMDB Rating: ', jsonBody.imdbRating);
      console.log('Released country: ', jsonBody.Country);
      console.log('Language: ', jsonBody.Language);
      console.log('Plot: ', jsonBody.Plot);
      console.log('Actors: ', jsonBody.Actors);
      console.log('Tomatoe Rating: ', jsonBody.tomatoMeter);
      console.log('Tomatoe URL: ', jsonBody.tomatoURL);
      console.log('**************************************************************************************************************');
      console.log(' ');
    };
  });
};

if (process.argv[2]==="do-what-it-says"){
  
}
