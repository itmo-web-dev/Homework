;(function (){
	'use strict';
	$(document).ready(function(){
jQuery('#comment_form').submit(function(event){
	event.preventDefault();
	jQuery.ajax({
		type: post,
		url: '../add_comments.php',
		data: {tst: 'tst'},
		success: function(resp) {
			console.log(resp);
		}
	});
});
	});
}());