<?php
/**
 * Created by PhpStorm.
 * User: sid
 * Date: 30.05.2017
 * Time: 1:14
 */

if (isset($_POST['x']))
{
    $x = $_POST['x'];
    $md5 = md5($x);
}
else{
    $x = "";
    $md5 = '';
}
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <title>Вычисление</title>
    <meta charset='utf-8'>
</head>
<body>
    <form method="post" action="">
        x = <input type="text" name="x" value="<?php echo $x; ?>" />
        <br/>
        <?php
        if ($md5 != '')
        {
            echo "md5($x) = $md5";
        }
        ?>
        <br/>
        <input type="submit" />
        </form>
    <br/>
    <br/>
    <a href="index.php">index.php</a>
</body>
</html>
