	<div>
<h1><? echo $current_good['title']; ?></h1>
<p><? echo $current_good['description']; ?></p> 
</div>
	<?php if($auth): ?>
		<div class = 'forma'>
	<form id='comment_form'>
		<textarea title='Comments'></textarea><br/>
		<button type='submit'>Отправить комментарий</button>
	</form>
		</div>
	<?php else: ?>
		<p>Войдите, чтобы оставлять комментарии!</p>
	<?php endif; ?>