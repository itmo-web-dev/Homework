<?php
/**
 * Created by PhpStorm.
 * User: s_i_d
 * Date: 12.05.2017
 * Time: 1:50
 */
    $time_zone = 'Europe/Moscow';
    date_default_timezone_set($time_zone);
    $now = time();

    $H = date('H', $now);
    $i = date('i', $now);
?>

<!DOCTYPE>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <title> Clock </title>
        <link rel="stylesheet" href="styles.css" media="screen" />
    </head>
    <body>
	<p> Test </p>
        <div class="clock">
            <?php echo "$H : $i" ?>
        </div>
        <?php phpinfo(); ?>
    </body>
</html>
