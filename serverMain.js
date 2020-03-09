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

module.exports = main();