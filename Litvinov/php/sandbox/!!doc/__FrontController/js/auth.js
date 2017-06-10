$(document).ready(function(){
    console.log('auth.js');
    
        function authUser(event) {
            event.preventDefault();
            var login = jQuery('#login').val();
            var pwd = jQuery('#pwd').val();
            jQuery.ajax({
               type: "post",
                url: '/login',
                data: {
                    login: login,
                    pwd: pwd
                },
                success: function(resp) {
                    
                    if (resp === "ok") {
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