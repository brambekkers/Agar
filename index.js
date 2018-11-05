const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const World = require('./server/world.js')

const world = new World(io)

// Host static files.
app.use(express.static('client'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});