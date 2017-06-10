<?php
/**
 * Created by PhpStorm.
 * User: sid
 * Date: 10.06.2017
 * Time: 13:37
 */
error_reporting(E_ALL);
ini_set('display_error', 1);

function __autoload($className){
    $class_pieces = explode('\\', $className);
    var_dump($class_pieces); echo"<br/>";

    switch($class_pieces[0]) {
       case 'app': require __DIR__.'/../' . implode(DIRECTORY_SEPARATOR, $class_pieces).'.php';
    }
   echo "Loaded classes/$className.php<br>";
}

/*
# ���� ������� ��� �������������� ������ ��������
# param2 - ����������� �� exception
# param3 - � ������ �� ��� � ����� true
spl_autoload_register('myAutoload', true, true);
*/

# ���������� ��� ������
use app\App;
use app\B;


# require_once __DIR__ . "/../app/App.php";

echo(__DIR__ . "/../app/App.php");
echo('<br/>');

$app = new App();
$app->run();
$b = new B();

