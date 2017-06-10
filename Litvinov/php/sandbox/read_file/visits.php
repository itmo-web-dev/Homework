<?php
/**
 * Created by PhpStorm.
 * User: sid
 * Date: 31.05.2017
 * Time: 0:30
 */

$lines = file('visits.txt'); // ? чтение в кодировке

?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <title>Наш сайт</title>
    <meta charset='utf-8'>
</head>
<body>
<h1> Журнал посещений <h1>
        <a href="index.php"> На главную </a>
<br/><br/>
        <table border="1">
            <tr>
                <td> Время </td>
                <td> IP- адрес</td>
                <td> Откуда </td>
            </tr>

        <?php
             $n = count($lines);

             for($i = 0; $i < $n; $i +=3){
                 echo '<tr>';
                 echo '<td>' . $lines[$i+0].'</td>>';
                 echo '<td>' . $lines[$i+1].'</td>>';
                 echo '<td>' . $lines[$i+2].'</td>>';
                 echo '</tr>';
             }
        ?>
        </table>
</body>
</html>


