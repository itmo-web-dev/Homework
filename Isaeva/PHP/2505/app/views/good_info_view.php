
<!DOCTYPE html>
<html lang="ru">
<head>
 <title>Главная</title>
 <meta charset="utf-8"> 
 <script src="/2505/js/jquery-3.2.1.min.js"></script>

</head>
<body>
<ul>
	<li><a href = 'index.php'>Главная</a></li>
	<li><a href = 'auth.php'>Войти</a></li>
	<?php if($auth): ?>
	<li><a href="?exit=exit">Выйти</a></li>
	<? endif; ?>
</ul>
	
 <div>
 <h1><?php echo $current_good['title']; ?></h1>
 <p><?php echo $current_good['description']; ?></p> 
 </div>
 
 <?php if ($auth):?>
 <form id="comment form">
	 <textarea title="Комментарий"></textarea>
	 <button type="submit">Оставить комментарий</button>
 </form>

<?php else:?>
<p>ВЫ не можете оставлять комментарии</p>
<? endif; ?>

<script src="/2505/js/comments.js"></script>
</body>
</html>