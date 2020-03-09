/*
const app = require('./app');

app.set('port', process.env.PORT || 8080); 

const server = app.listen(app.get('port'), () => {
    console.log('Listening on ${ server.address().port }');
});
*/

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const routes = require('./routes/index');
const session = require('express-session');
const http = require('http')
const util = require('util');
const dns = require('dns');
const os = require('os');


var server = http.createServer((function(request, response) {
    response.writeHead(200, {"Content-type": "text/plain"});

    response.end("Hello world\n");
}));

async function main()
{
  let serverAddress = (await util.promisify(dns.lookup)(os.hostname())).address;
  console.log('Listening on: ' + serverAddress);

  server.listen(80, serverAddress);
}

main();
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