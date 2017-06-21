jQuery(document).ready(function(){
    'use strict';
    function getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    var user_cookie = getCookie('user_id');

    if (user_cookie !== undefined) {
        jQuery("#login_btn").click(function(){
            window.location = "/account";
        });
    } else {
        jQuery("#login_btn").click(function(){
            jQuery("#auth_modal").modal();
        });
    }

    // jQuery("#login_btn").click(function(){
    //     jQuery("#auth_modal").modal();
    // });

    jQuery("#reg_btn").click(function(){
        jQuery("#reg_modal").modal();
    });

    jQuery('form#auth_form').submit(function(event){

        var login = jQuery('#login').val();
        var pwd = jQuery('#pwd').val();

        var auth_data = {
            login: login,
            pwd: pwd
        };
        event.preventDefault();

        jQuery.ajax({
            url: '/accountLogin',
            type: 'post',
            data: auth_data,
            success: function(response){
                console.log(response);
                if (response === 'ok') {
                    window.location = "/account";

                } else {
                    console.log("Вывести пользователю сообщение об ошибке авторизации");  // TODO Вывести пользователю сообщение об ошибке авторизации
                }
            },
            error: function (response) {
                console.log("Error", response);
            }
        });

    });

    jQuery("#logout").click(function () {
        jQuery.ajax({
            url: '/accountLogout',
            type: 'post',
            success: function(response){
                console.log(response);
                if (response === 'logout') {
                    window.location = "/";
                }
            },
            error: function (response) {
                console.log("Error", response);
            }
        });
    });
});