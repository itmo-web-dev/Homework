jQuery(document).ready(function(){
    'use strict';

    jQuery('form#comment_form').submit(function(event){

        var comment = jQuery('#comment').val();

        event.preventDefault();

        jQuery.ajax({
            url: '/addComments',
            type: 'post',
            data: {
                comment: comment
            },
            success: function(response){
                console.log(response);
                if (response === 'add') {
                    console.log("ADD COMMENT")
                } else {
                    console.log("ОШИБКА ДОБАВЛЕНИЯ КОММЕНТАРИЯ");
                }
            },
            error: function (response) {
                console.log("Error", response);
            }
        });

    });

});
