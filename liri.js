var fs = require('fs');

if (process.argv[2]==="my-tweets"){
  var Twitter = require('twitter');
  var keys = require('./keys.js')

    var client = new Twitter({
      consumer_key: keys.twitterKeys.consumer_key,
      consumer_secret: keys.twitterKeys.consumer_secret,
      access_token_key: keys.twitterKeys.access_token_key,
      access_token_secret: keys.twitterKeys.access_token_secret
    });

    var path  = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
    var params = 'KnoerzerKevin'

    client.get(path, params, function(error, tweets, response){
      if (error){
        console.log(error)
      }
      for (i=0;i<tweets.length;i++){
        console.log(tweets[i].text)
      }
    });
}

if (process.argv[2]==="spotify-this-song"){

}

if (process.argv[2]==="movie-this"){

}

if (process.argv[2]==="do-what-it-says"){

}
