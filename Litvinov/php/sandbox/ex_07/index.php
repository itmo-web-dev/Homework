<?php
/**
 * Created by PhpStorm.
 * User: sid
 * Date: 29.05.2017
 * Time: 23:45
 */

$menu = array(
    1 => "Главная",
    2 => "О компании",
    3 => "Контакты"
);

// Содержимое страницы
$content = array(
    1 => "Это главная страница",
    2 => "Здесь информация о компании",
    3 => "на этой странице телефоны и адреса"
);

$pages_id = $_GET['page_id'];
//  если не указан поакжем главную
if ($pages_id == null)
    $pages_id = 1;
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <title>Сайт визитка</title>
    <meta charset='utf-8'>
    <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Menu -->
  <?php
    foreach($menu as $key => $value)
    {
        if($key == $pages_id) {
            $value ="<b>".$value."</b>";
            echo $value;
        }else {
            echo "<a href=\"index.php?page_id=$key\">$value</a>";
            }
        echo ' &nbsp; ';
    }
  ?>
    <br/>
    <br/>
    <?php echo $content[$pages_id]; ?>
</body>
</html>