<?php
/**
 * Created by PhpStorm.
 * User: s_i_d
 * Date: 16.05.2017
 * Time: 2:19
 */
/**
#TODO: добавить удоление полей из админской вкладки
#TODO:
 prg01: сохранять время и задачи
 prg02: кнопки начала работы над задачей, окончания, паузы, общее время
*/
//echo PHP_VERSION;echo "<br/>";
//echo PHP_VERSION_ID;
/// var_dump(PHP_VERSION_ID);

error_reporting(E_ALL | E_STRICT);
ini_set('display_errors', 1);
ini_set("log_errors", 1);
ini_set("log_errors_max_len", 0);
ini_set("error_log", 'php_errors.log');
echo '<h1> work with data base  </h1>';
if(isset($error)) {
    var_dump($error);
}


# ini_set('memory_limit', '1K');
# var_dump((object) range(0, 1000));


/*

# ini_set('display_errors', 0); # подавляет сообщения об ошибках
*/
/*
include_once("Database.php");
include_once("ModelTodo.php");
include_once("config.inc.php");
include_once("Log.php");
include_once("Controller.php");


$db = new Database($cfg['host'],
                   $cfg['username'],
                   $cfg['pass'],
                   "todo" );

# ??? Куда безопасно писать логи (т.к. все файлы кроме php браузер
# ??? откроет и покажет)
# $log = new FsLog('log.txt');
$log = new DbLog($db);

$controller = new Controller($db, $log);
$controller->request();
*/


$server = 'localhost';
$username = "sid_db_12345";
$password = "password";
$dbname = "kinoshop";

include_once("connect.php");
include_once("init_tables.php");

$link = connect_db($server, $username, $password, $dbname);
// create_film_table($link);
source_film_sql($link);


mysqli_close($link);

?>


