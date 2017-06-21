$(document).ready(function(){
    console.log('auth.js');
    
        function authUser(event) {
            event.preventDefault();
            var login = jQuery('#login').val();
            var pwd = jQuery('#pwd').val();
            var data = {
                login: login_data,
                pwd: pwd
            };
            var login_data = 'login_data' + JSON.stringify(data);
            jQuery.ajax({
               type: "post",
                url: '/account/login',
                data: login_data,
                success: function(resp) {
                    
                    if (resp === "login") {
                        //переключиться на др. страницу с пом. js личный кабинет
                        console.log(resp);
                        jQuery(location).attr('href','/');
                        
                    }
                },
                error: function(resp) {
                    console.log(resp);
                }
            });
        }
        jQuery('#auth_form').submit(authUser);
})