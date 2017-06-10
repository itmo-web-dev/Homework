$(document).ready(function(){

	function authUser(event){
		event.preventDefault();
		var login = jQuery('#login').val();
		console.log (login);
		var pwd = jQuery('#pwd').val();
		jQuery.ajax({
			type: 'post',
			url: '/login',
			data: {
				login: login,
				pwd: pwd
			},
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
