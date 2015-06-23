var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongojs = require('mongojs');

var app = express();
var db = mongojs('birds', ["sightings"])
var port = 8787;

app.use(bodyParser.json());
app.use(cors());


app.get('/api/sightings', function(req, res) {
	res.send('you got it')
})

app.post('/api/sightings', function(req, res) {
	res.send('it posted')
})

app.put('/api/sightings', function(req, res) {
	res.send('you put it')
})

app.delete('/api/sightings', function(req, res) {
	res.send('you delteted it')
})


app.listen(port, function(req, res) {
	console.log('listening on port ' + port);
})	