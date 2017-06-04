<?php

require_once __DIR__ . '/app/models/goods_model.php';
require_once __DIR__ . '/app/models/auth_model.php';
require_once __DIR__ . '/app/controllers/controllers.php';



function runController() {
	$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

	$action = trim($uri, '/') ?: 'index'; // addComment
	$action = $action . 'Action'; // addCommentAction

	if (!function_exists($action)) {
		header($_SERVER['SERVER_PROTOCOL'] . '404 Not Found');
		exit('404 Not Found');
	}

	$action(); // addCommentAction()

}

session_start();
runController();
