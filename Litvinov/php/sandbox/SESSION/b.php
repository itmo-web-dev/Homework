<?php
/**
 * Created by PhpStorm.
 * User: sid
 * Date: 30.05.2017
 * Time: 1:33
 */

session_start();

if (!isset($_SESSION["username"]) && isset($_COOKIE['username']))
    $_SESSION['username'] = $_COOKIE['username'];

$username = $_SESSION['username'];

if ($username == null){
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <title>Страница Б</title>
    <meta charset='utf-8'>
</head>
<body>

<h1> Страница "А" </h1>
 <a href="a.php"А</a> и <b>Б</b> сидели на трубе
<br/>
<br/>
вы вошли как <b><?php echo $username; ?><b> | <a href="login.php"> Выход </a>

</body>
</html>