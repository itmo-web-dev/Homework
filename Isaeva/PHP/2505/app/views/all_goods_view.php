<!DOCTYPE html>
<html lang="ru">
<head>
 <title>Главная</title>
 <meta charset="utf-8"> 

</head>
<body>

<ul>
	<li><a href = 'index.php'>Главная</a></li>
	<li><a href = 'auth.php'>Войти</a></li>
</ul>

 <h1>Товары</h1>

 <?php foreach ($goods_data as $key => $value):?>
 <div>
 <h1><?php echo $goods_data[$key]['title']; ?></h1>
 <p><?php echo $goods_data[$key]['description']; ?></p>
 <a href="goods_info.php?id=<?php echo''.$goods_data[$key]['id'];?>">Подробнее</a>
 </div>
 <?php endforeach;?>

</body>
</html>