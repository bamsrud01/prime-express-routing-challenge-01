/*    Express    */

var express = require('express'); //  require imports the 'express' module
var bodyParser = require('body-parser');  //  When calling methods from this, it returns a function that knows how to turn stuff into JS objects.
var path = require('path');   //  Don't need to install, built-in to node

var app = express();    //  This is a common expression when using express

/*  The get method will listen specifically for GET requests.  It needs to know:
  1.  What is the path?  In this case, '/'
  2.  What should it do when it gets the request?  This is called the handler.  It is the second parameter.
      It takes a request, and sends a response
*/

//  Middleware function, gets executed on each request
app.use(function(req, res, next){
  console.log('Got a request!');
  next();
});

//  Middleware for parsing the body and turning it into a JS object
app.use(bodyParser.urlencoded({extended: true}));

//  POST requests must be after the bodyParser stuff

app.post('/', function(req, res){
  console.log(req.body);
  res.sendStatus(200);    //  Sends no content, but instead an HTTP status mode
});

//  This is a route
app.get('/', function (req, res){
  console.log('Received a request at', new Date());

  var filename = path.join(__dirname, 'public/views/index.html');   //__dirname is a global variable, represents the directory that the file lives in.
  console.log('filename: ', filename);
  res.sendFile(filename);
});

//  This is another route
app.get('/kittens', function(req, res){
  console.log(req.query);   //  This will return an object showing any query parameters on this request
  if (req.query.age > 2) {
    res.send('MEOW!');
  } else {
    res.send('meow');
  }
});

//  We will create song objects.
var songs = [];         //  This array will hold whatever songs are created

app.post('/songs', function(req, res){
  console.log('req.body:', req.body);
  songs.push(req.body);
  console.log('songs', songs);
  res.sendStatus(200);
});

//  Now we will add a route to look up the array
app.get('/songs', function(req, res){
  res.send(songs);
});

//  For static files.  It doesn't require path.join(__dirname, ...)  It is middleware for serving static files
app.use(express.static('public'));

app.listen(3000);










//
