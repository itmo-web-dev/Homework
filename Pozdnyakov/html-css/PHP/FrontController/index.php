<?php
/*require_once __DIR__ . '/app/core/Router.php';
require_once __DIR__ . '/app/models/goods_model.php';
require_once __DIR__ . '/app/models/auth_model.php';
require_once __DIR__ . '/app/controllers/controllers.php';
require_once __DIR__ . '/app/controllers/IndexController.php';



function runController() {
	$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
//	var_dump($uri); 
	

	$action = trim($uri, '/') ?: 'index'; //gooddesc
	$action = $action . 'Action'; //gooddescAction
//	var_dump($action);

	if (!function_exists($action)) {
		header($_SERVER['SERVER_PROTOCOL'] . '404 Not Found');
		exit('404 Not Found');
	}

	$action(); //loginAction()

}
session_start();
$router = Router::getinstance();
var_dump($router);
$router->run();*/

require_once __DIR__ . '/vendor/autoload.php';
session_start();
$urls = file_get_contents('urls.json'); //файл json
//$urls = file_get_contents('C:\OpenServer\domains\FrontController\urls.json'); //файл json

$app = new \Sky\Frame\App($urls);

//var_dump($app);

$app->run();
//runController();

