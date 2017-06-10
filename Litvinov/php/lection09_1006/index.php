<?php
/**
 * Created by PhpStorm.
 * User: sid
 * Date: 10.06.2017
 * Time: 13:21
 */

require_once __DIR__.'../vendor/autoload.php';

$url = file_get_contents('../urls.json');
$app = new \Sky\Frame\App($urls);
$app->run()

