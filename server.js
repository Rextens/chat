/*
const app = require('./app');

app.set('port', process.env.PORT || 8080); 

const server = app.listen(app.get('port'), () => {
    console.log('Listening on ${ server.address().port }');
});
*/

var app = require('express')();
var http = require('http');
var io = require('socket.io')(http);


const server = http.createServer((req, res) => {
  res.end('hello world');
  console.log(req, res);
});

server.listen(80, (await require('util').promisify(require('dns').lookup)(require('os').hostname())).address);

/*
app.get('/', function(req, res){
  res.sendFile(__dirname+ '/index.html')
});

io.on('connection', function(socket) {
  socket.on('chat message', function(msg) {
    console.log('message:' + msg)
  });

  console.log('a user connected');

  socket.on('disconnect', function() {
    console.log('user disconnect');
  });

});
*/


/*
http.listen(3000, function() {
  console.log('listening on *:3000');
});
*/