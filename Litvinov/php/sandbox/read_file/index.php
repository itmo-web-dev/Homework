<?php
/**
 * Created by PhpStorm.
 * User: sid
 * Date: 31.05.2017
 * Time: 0:28
 */

$f = fopen("visits.txt", "a+");
fwrite($f, date("Y-m-d H:i:s") . "\n");
fwrite($f, $_SERVER["REMOTE_ADDR"] . "\n");
fwrite($f, $_SERVER["HTTP_REFERER"] . "\n");
fclose($f);

?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <title>Наш сайт</title>
    <meta charset='utf-8'>
</head>
<body>
   <h1> Это главная страница сайта</h1>
   Мы <a href="visits.php"> следим </a> за ее посещаемостью!
   <br/><br/>
   На нас ссылаются два сайта: <a href="site1.html">раз</a>, <a href="site2.html">два</a>

</body>
</html>
