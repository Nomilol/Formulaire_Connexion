var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('Coucou');
});

app.listen(2222, function(){
	console.log('Héhé, ça marche');
});