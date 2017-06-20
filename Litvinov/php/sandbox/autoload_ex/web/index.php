<?php
/**
 * Created by PhpStorm.
 * User: sid
 * Date: 10.06.2017
 * Time: 13:37
 */
error_reporting(E_ALL);
ini_set('display_error', 1);

/*
function myAutoload($className){
    $class_pieces = explode('\\', $className);
    var_dump($class_pieces); echo"<br/>";

    switch($class_pieces[0]) {
       case 'app': require __DIR__.'/../' . implode(DIRECTORY_SEPARATOR, $class_pieces).'.php';
    }
   echo "Loaded classes/$className.php<br>";
}


# один функция для автозагрузчика второй параметр
# param2 - выбрасывать ли exception
# param3 - в нвчало ли или в конце true
spl_autoload_register('myAutoload', true, true);
*/

# подгрузить автозагрузчик из сценария
require __DIR__.'/../vendor/autoload.php';

# прописываю имя класса
use liw\app\App;
use liw\app\B;


# require_once __DIR__ . "/../app/App.php";

echo(__DIR__ . "/../app/App.php");
echo('<br/>');

$app = new App();
$app->run();
$b = new B();

// autoload.loc