<h1>Товары</h1>
	<?php foreach ($goods_data as $key => $value):?>
	<div>
		<h1><?php echo $goods_data[$key]['title']; ?></h1>
		<p><?php echo $goods_data[$key]['description']; ?></p>
		<a href="/description?id=<?php echo''.$goods_data[$key]['id'];?>">Подробнее</a>
	</div>
	<?php endforeach;?>