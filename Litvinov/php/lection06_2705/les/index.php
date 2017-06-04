<?php
require_once __DIR__ . '/models/goods.php';
require_once __DIR__ . '/models/auth_user.php';
require_once __DIR__ . '/controllers/controllers.php';


function runController(){
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $action = trim($uri, '/') ?: 'index';
    $action = $action . 'Action';
    if (!function_exists($action)) {
        echo $action;

        header($_SERVER["SERVER_PROTOCOL"] . ' 404 Not Found');
        exit('404 Not Found');
    }
    $action();
}
runController();

