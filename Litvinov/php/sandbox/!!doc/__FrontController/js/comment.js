$(document).ready(function () {
    console.log('wewew.js');

    jQuery('#comment_form').submit(function (event) {
        event.preventDefault();
        var comment = document.getElementById('comment').value;
        jQuery.ajax({
            type: 'post',
            url: '/addComment',
            data: {
                comment: comment
            },
            success: function (resp) {
                console.log(resp);
                if (resp === 'add') {
                    //Добавляем комментарий
                }
            },
            error: function (resp) {
                console.log(resp);
            }

        });
    });

});