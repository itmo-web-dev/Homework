$(document).ready(function(){

	jQuery('#comment_form').submit(function(event){
		event.preventDefault();
		var comment = document.getElementById('comment').value;
		jQuery.ajax({
			type: 'post',
			url: '/addComment',
			data: {comment: comment},
			success: function(resp) {
				console.log(resp);
				if (resp === "add") {
//					добавляем комментарий
				}
			},
			error: function(resp) {
				console.log(resp);
			}

		});
	});

});