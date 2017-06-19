
<section class="all_goods col-md-offset-3 col-xs-offset-2">

<h1>Товары</h1>
<!--    <div class="row">-->
      <?php foreach ($goods_data as $key => $value):?>
       <div class="good col-md-6  col-xs-4">
        <h2>
            <?php echo $goods_data[$key]['title']; ?>
        </h2>
        <p>
            <?php echo $goods_data[$key]['description']; ?>
        </p>
        <a href="/description/<?php echo''.$goods_data[$key]['id'];?>">Подробнее</a>
        </div>
    <?php endforeach;?>    
<!--    </div>-->
</section>
