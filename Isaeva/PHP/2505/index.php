<?php

require_once __DIR__ . '/app/models/goods_model.php';

$goods_data = getAllGoods();
//var_dump($goods_data);

include __DIR__ . '/app/views/all_goods_view.php';