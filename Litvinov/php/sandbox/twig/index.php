<?php
/**
 * Created by PhpStorm.
 * User: sid
 * Date: 20.06.2017
 * Time: 19:41
 */

// echo "Hello world";


require_once 'vendor/autoload.php';
require_once 'PDOConnect.php';

Twig_Autoloader::register();

$dns = DBOrm::getInstance('localhost', 'twig', 'root', '');
$results = DBOrm::getAllCustomers($dns);

$loader = new Twig_Loader_Filesystem('templates');

$twig = new Twig_Environment($loader);
// $twig = new Twig_Environment($loader, array('cache'=>'cache'));

$template = $twig->loadTemplate('index.html');
$title = "название страницы";
print_r($results);

echo $template->render(array(
     'title' => $title
));
