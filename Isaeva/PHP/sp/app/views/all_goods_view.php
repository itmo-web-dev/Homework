<div class="container-fluid col-md-5 col-md-offset-5 col-sm-offset-5 ">
<h1>Товары</h1>
</div>
<br><br><br>
<?php foreach ($goods_data as $key => $value):?>
<div class="padding-less first-row">
<div class="container-fluid col-md-4 col-sm-6">
<div class="thumbnail">
	<h1 class="text-center"><?php echo $goods_data[$key]['title']; ?></h1>
	<img class="goods img-rounded" src="app/views/style/img/<?php echo $goods_data[$key]['preview']; ?>"><br><br>
	<p class="text-center"><?php echo $goods_data[$key]['description']; ?></p>
	<p><a class = "btn btn-block btn-success" role="button" href="/description/<?php echo''.$goods_data[$key]['id'];?>">Подробнее</a></p>
	</div>
</div>
</div>
<?php endforeach;?>

