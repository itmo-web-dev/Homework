<?php
/**
 * Created by PhpStorm.
 * User: sid
 * Date: 06.06.2017
 * Time: 19:30
 */
<?php

class Router
{
public static $instance;
public static function getinstance()
{
if(!(self::$instance instanceof self))
{
self::$instance = new self();
}
return self::$instance;
}

protected $controller;
protected $action;
protected $params;

private function __construct()
{
$uri = $_SERVER['REQUEST_URI'];
var_dump($uri);
$uri_parts = explode('/', trim($uri, '/'));
var_dump($uri_parts);

$this->controller = !empty($uri_parts[0]) ? 
ucfirst($uri_parts[0]) . 'Controller':
'IndexController'; //всего Router
var_dump($this->controller);
}
}