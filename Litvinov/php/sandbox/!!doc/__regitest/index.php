<?php

require_once __DIR__.'/app/models/goods_models.php';
require_once __DIR__.'/app/models/auth_model.php';
require_once __DIR__.'/app/controllers/controller.php';

function runController() {
	$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
	$action = trim($uri, '/') ?: 'index';
	$action = $action.'Action';
	if(!function_exists($action)) {
		header($_SERVER['SERVER_PROTOCOL'] . '404 NOT FOUND');
		exit('404 NOT FOUND');
	}
	$action();
}

runController();

// $goods_data = getAllGoods();
// include __DIR__.'/app/views/all_goods_view.php';
