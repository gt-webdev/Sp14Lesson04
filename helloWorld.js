var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('Welcome to WebDev. Best club in ccorgs.');
	res.end();
}).listen(8000);