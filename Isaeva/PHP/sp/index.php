<?php
//require_once __DIR__ . '/app/core/Router.php';
//require_once __DIR__ . '/app/models/goods_model.php';
//require_once __DIR__ . '/app/models/auth_model.php';
//require_once __DIR__ . '/app/Controllers/Controllers.php';
//require_once __DIR__ . '/app/Controllers/IndexController.php';
//
//
//function runController() {
//	$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
//
//	$action = trim($uri, '/') ?: 'index'; // addComment
//	$action = $action . 'Action'; // addCommentAction
//
//	if (!function_exists($action)) {
//		header($_SERVER['SERVER_PROTOCOL'] . '404 Not Found');
//		exit('404 Not Found');
//	}
//
//	$action(); // addCommentAction()
//
//}
//
//session_start();
//$router = Router::getInstance();
////var_dump($router);
//$router->run();
////runController();

//require_once __DIR__ . '/vendor/autoload.php';
////$routes = file_get_contents('urls.json'); //файл json
////$app = new \Sky\Frame\App($routes);
////$app->run();
//$urls = file_get_contents('urls.json');
//$app = new \Sky\Frame\App($urls);
//$app->run();

require_once __DIR__ . '/vendor/autoload.php';
$urls = file_get_contents('config.json');
$app = new \Sky\Frame\App($urls);
$app->run();

