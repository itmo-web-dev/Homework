<!DOCTYPE html>
<html lang="ru">
<head>
    <title>Главная</title>
    <meta charset="utf-8"> 
    <script src="https://code.jquery.com/jquery.min.js"></script>
</head>
<body>

	<ul>
		<li><a href="/index">Главная</a></li>
		<li><a href="/login">Войти</a></li>
		<?php if ($auth): ?>
		<li><a href="?exit=exit">выйти</a></li>
		<?php endif; ?>

	</ul>

	<?php include $contentView; ?>



</body>
</html>