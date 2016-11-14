console.log('Start');
(function(){
	var app = {

		init : function(){
			app.listeners();
			
		},
		listeners : function(){
			$('#submit').on('click', app.recupValueInput);
			// $('#submit').on('click',function(event){
			// 	event.preventDefault();
			// });
		},
		recupValueInput : function(){
			var username = $('#userName').val();
			var password = $('#password').val();
			console.log(username);
			console.log(password);
		}



	}

















	app.init();
})();