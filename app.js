console.log('Start');
(function(){
	var app = {
		username : null,
		password : null,

		init : function(){
			app.listeners();
		},
		listeners : function(){
			$('#submit').on('submit', app.sendToServer);
			// $('#submit').on('click',function(event){
			 //	event.preventDefault();
			 //});
			 app.sendToServer();
			},
			recupValueInput : function(){
				console.log(username);
				console.log(password);
			},
			sendToServer : function(){
				app.username = $('#userName').val();
				app.password = $('#password').val();
				$.ajax({
					type : 'POST',
					data : {
						username : app.username,
						password : app.password,
					}, 
					url : '/login',
					success : function(){
						console.log('success');
					},
					error : function(){
						console.log('error');
					}
				});
			}


			
		}


		app.init();
	})();