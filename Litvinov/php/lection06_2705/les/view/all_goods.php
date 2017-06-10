<?php foreach ($data as $key => $value):?>
<h3><? echo $data[$key]['title']?></h3>
<p><? echo $data[$key]['description']?></p>
<a href="/description?id=<? echo "".$data[$key]['id'];?>">Подробнее</a>
<?php endforeach; ?>

