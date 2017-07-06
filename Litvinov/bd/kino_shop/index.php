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

require_once('create_tables.php');
require_once('queries.php');
require_once('insert_data.php');

$server = 'localhost';
$username = "sid_db_12345";
$password = "password";
$dbname = "kinoshop";

print_r( PDO::getAvailableDrivers() );
echo "<br/>";
echo "<br/>";



$reset = false;
$pdo = NULL;

try {
    $pdo = new PDO('mysql:host=localhost;dbname=kinoshop', 'sid_db_12345', 'password');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($reset) {
        $pdo->exec(SQL_DROP_TABLES);
    }
    create_tables($pdo);
}
catch (PDOException $e){
     exit($e->getMessage());
}


try{
    insert_data_carrire_table($pdo);
    //$pdo->exec(SQL_DELETE_ROW_CARRIRE_TABLE);
}catch(PDOException $e){
    echo $e->getMessage();
}
finally{
    print_all_row_carrier_table($pdo);
}








/*
try{
    $pdo->beginTransaction();

    $stmt = $pdo->prepare(SQL_INSERT_PERSON);
    $stmt->execute([
                    ":firstname"=>"Kirill",
                    ":lastname"=> "Versetti",
                    ":patro" => 'Alex'
    ]);
    // получить его идентификационный номер
    $id = $pdo->lastInsertId(); // индентификатор последней вставленной записи
    $stmt = $pdo->prepare(SQL_INSERT_ACCOUNT);
    $stmt-> execute([
        ':au_person_id'=>$id,
        ':username'=>'kuzima-spb',
        ':password' => '123456789'
        ]);
    $pdo->commit();
}catch(PDOException $e){
    echo $e->getMessage();
    $pdo->rollBack();
}
*/
































// include_once("connect.php");
// include_once("init_tables.php");

//$link = connect_db($server, $username, $password, $dbname);
// create_film_table($link);
//source_film_sql($link);
//mysqli_close($link);

?>


