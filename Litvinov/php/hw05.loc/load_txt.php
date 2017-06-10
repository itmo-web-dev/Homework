<?php
/**
 * Created by PhpStorm.
 * User: s_i_d
 * Date: 07.06.2017
 * Time: 8:07
 */

function print_form(){
    echo '<form method="post" enctype="multipart/form-data">';
    echo '<input type="file" name="text" />';
    echo '<br/>';
    echo '<input type="submit" value="Загрузить файл!" />';
    echo '</form>';
}

function print_file($file){
    echo '<a href="load_txt.php"> Еще раз </a>';
    echo '<br/><br/>';

    if ($file['name'] == ''){
        echo 'Файл не выбран!';
        return;
    }

    $basename =  basename($file['name']);
    $dir = __DIR__.'/tmp';
    if(!is_dir($dir)) {
        mkdir($dir);
    }
    $newfile = 'tmp/'. $basename;

    if (!copy($file['tmp_name'], $newfile)) {
        echo "не удалось скопировать" . $file['tmp_name'] . " ...\n";
    }

    $lines = file($newfile);
    $i = 1;

    echo "<b>".$file['name']."</b>";
    echo '<br/><br/>';
    echo "<table>";

    foreach($lines as $s){
        echo "<tr><td><small>$i:</small></td><td>$s</td></tr>";
        $i++;
    }
    echo "</table>";
}
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> Загрузка текста </title>
</head>
<body>
   <?php
        var_dump($_FILES);
        if(isset($_FILES['text'])){
            print_file($_FILES['text']);
        }
        else{
            print_form();
        }
   ?>
</body>
</html>
