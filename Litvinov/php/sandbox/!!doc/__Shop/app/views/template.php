<!DOCTYPE html>
<html lang="ru">
<head>
    <title>Главная</title>
    <meta charset="utf-8"> 
    <script src="https://code.jquery.com/jquery.min.js"></script>
</head>
<body>

	<ul>
		<li><a href="/">Главная</a></li>
	<li><a href="/logout">Выйти</a></li>
		<li><a href="/login">Войти</a></li>
		<li><a href="/acc">Личный кабинет</a></li>

	</ul>

	<?php include $contentView; ?>

	<script src='/js/comment.js'> </script>
	<script src="/js/auth.js"></script>
	<script src="/js/jquery-3.2.1.min.js"></script>
</body>
</html>