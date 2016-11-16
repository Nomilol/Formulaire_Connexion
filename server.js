var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended : false}));

app.use(express.static(__dirname+ '/public'));
app.use(bodyParser());

app.listen(2222, function(){
	console.log('Héhé, ça marche');
});


app.post('/login',function(req, res){
	var userName = 'Nomilol';
	var password = 'jaune';
	if(req.body.username === userName && req.body.password === password){
		res.sendFile(__dirname+'/public/newPage.html');
	}else{
		res.send('Nom d\'utilisateur ou mot de passe incorrect');
	}
});  
