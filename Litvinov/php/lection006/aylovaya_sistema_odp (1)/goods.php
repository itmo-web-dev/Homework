<!DOCTYPE html>
<html lang="en">
<head>
    <title>Title</title>
    <meta charset="utf-8"> 
</head>
<body>
	<h1>Товары</h1>
	<?php include "goods_info.php";?>
	<?php foreach ($data as $key => $value):?>
	<div>
		<h1><?php echo $data[$key]['title']; ?></h1>
		<p><?php echo $data[$key]['description']; ?></p>
		<a href="goods_desc.php?id=<?php echo''.$data[$key]['id'];?>">Подробнее</a>
	</div>
	<?php endforeach;?>


</body>
</html>

