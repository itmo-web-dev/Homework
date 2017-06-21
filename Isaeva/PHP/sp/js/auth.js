$(document).ready(function(){

	function authUser(event){
		event.preventDefault();
		var login = jQuery('#login').val();
		console.log (login);
		var pwd = jQuery('#pwd').val();
		
	var data = {
				login: login,
				pwd: pwd
			};
	
	var login_data = 'login_data=' + JSON.stringify(data);
	
		jQuery.ajax({
			type: 'post',
			url: '/account/login',
			data: login_data,
			success: function(resp) {
				 console.log(resp);
				if (resp === "ok") {
					// console.log(resp);
					window.location = '/';
				} 
			},
			error: function(resp) {
				console.log(resp);
			}
		});
	}

	jQuery('#auth_form').submit(authUser);

});
