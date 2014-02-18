var express = require('express');

var app = express();

app.use(express.static(__dirname + '/html'));

app.get('/', function(req, res) {
	res.render('index.html');
});

app.get('/api/Messages', function(req, res) {
	res.json({"Messages":
		[{"User": "Atom", "Message": "Hey!"},
		{"User": "Dekel", "Disgaea": "Disgaea"}]
	});
});

app.listen(8000);