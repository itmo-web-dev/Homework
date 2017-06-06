<?php
/**
 * Created by PhpStorm.
 * User: sid
 * Date: 30.05.2017
 * Time: 1:32
 * вход всегда работает кроме случая когда ввели пустую строку
 */

function Login($username, $remember)
{
    if ($username == '')
        return false;

    $_SESSION['username'] = $username;

    if ($remember)
        setcookie('username', $username, time()+3600*24*7);

    return true;
}

// сброс авторизации
function Logout()
{
    // делает cookie устаревшими
    setcookie("username", '', time()-1);
    unset($_SESSION['username']);
}

session_start();
$enter_site = false;

Logout();
if (count($_POST) > 0) {
    $enter_site = Login($_POST['username'], $_POST['remember'] == "on");
    }

if (is_bool($enter_site) && $enter_site==true){
        header("Location: a.php");
        exit();
    }
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <title>Вход на сайт</title>
    <meta charset='utf-8'>
</head>
<body>

   <h1> Вход на сайт </h1>
   <form method="post" action="">
       Введите имя:
       <br/>
       <input type="text" name="username" />
       <br/>
       <input type="checkbox" name="remember" /> Запомнить меня
       <br/>
       <input type="submit" value="Войти" />
       <br/>
   </form>
<br/>
</body>
</html>