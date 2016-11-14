console.log('Start');
(function(){
	var app = {
		username : null,
		password : null,

		init : function(){
			app.listeners();
		},
		listeners : function(){
			$('#submit').on('click', app.recupValueInput);
			// $('#submit').on('click',function(event){
			// 	event.preventDefault();
			// });
			app.sendToServer();
		},
		recupValueInput : function(){
			var username = $('#userName').val();
			var password = $('#password').val();
			console.log(username);
			console.log(password);
		},
		sendToServer : function(){
			$.ajax({
				type : 'POST',
				data : {
					username : 'username',
					password : 'password',
				}, 
				url : '/login',
				success : function(){
					console.log('success');
				},
				error : function(){
					console.log('error');
				}
			});
		},



	}


	app.init();
})();