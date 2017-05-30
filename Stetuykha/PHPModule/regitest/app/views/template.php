<!DOCTYPE html>
	<html lang="ru">
<head>
	<title>Главная</title>
	<meta charset="utf-8">
	<style type="text/css">
		ul {
			margin: auto;
			padding: auto;
			width: 1000px;
			list-style-type: none;
		}
		li {
			background-color: black;
			padding: 40px;
			display: inline;
		}
		a {
			line-height: 4em;
			font-family: courier;
			font-weight: 900;
			font-size: 2em;
			color: white;
			text-decoration: none;
			background-color: black;
		}
		div {
			margin: auto;
			padding: auto;
			width: 1000px;
		}
		* {
			font-family: courier;
		}
		h1, p {
			line-height: 4em;
			font-weight: 900;
			background-color: black;
			color: white;
			text-align: center;
		}
		textarea {
			background-color: black;
			font-size: 1.4em;
			color: white;
			outline: none;
			resize: none;
			width: 500px;
			height: 200px;
		}
		button {
			background-color: black;
			color: white;
			font-weight: 900;
			border: none;
			height: 50px;
			width: 500px;
			font-size: 1em;
		}
		.forma {
			margin: auto;
			width: 500px;
			padding: auto;
		}
	</style>
	<script src='app/views/js/jquery-3.2.1.js'></script>
	<script src='app/views/js/comment.js'></script>
</head>
<body>
<ul>
	<li><a href='/'>ГЛАВНАЯ</a></li>
	<?php if(is_session()): ?>
		<li><a href='/lk'>ЛИЧНЫЙ КАБИНЕТ</a></li>
		<li><a href='/?exit=exit'>ВЫЙТИ</a></li>
	<?php else: ?>
		<li><a href='/login'>ВОЙТИ</a></li>
	<?php endif; ?>
</ul>

<? include $contentView; ?>

</body>
</html>