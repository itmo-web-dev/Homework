<?php
/**
 * Created by PhpStorm.
 * User: s_i_d
 * Date: 07.06.2017
 * Time: 1:22
 */
 function read_file(){
     $row = 1;
     if (($handle = fopen("test.csv", "r")) !== FALSE) {
         while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
             $num = count($data);
             echo "<p> $num полей в строке $row: <br /></p>\n";
             $row++;
             for ($c=0; $c < $num; $c++) {
                 echo $data[$c] . "<br />\n";
             }
         }
         fclose($handle);
     }
 }

function is_login_exists($name){
    $row = 1;
    $arr[] = array();
    if (($handle = fopen("test.csv", "r")) !== FALSE) {
        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
            $num = count($data);
            $row++;
            for ($c=0; $c < $num; $c++) {
                $arr[$row][$c] = $data[$c];
                }
        }
        fclose($handle);
    }

    $size = count($arr);
    for($i=0; $i < $size; $i++ ){
        if(isset($arr[$i][0])) {
            if ($arr[$i][0] == $name) {
                return false;
            }
        }
    }
    return true;
}


 function add_to_file(Array $csv){
     if (($handle = fopen("test.csv", "a" ))!== FALSE){
         foreach ($csv as $value) {
             if (isset($value['user'])) {
                 if (is_login_exists($value['user'])) {
                     fputcsv($handle, $value);
                 }
             }
         }
         fclose($handle);
     }
 }
/*
$data = [
    ['user'=>"Petr", 'pass'=>'wwwwew'],
    ['user'=>"Tigr", 'pass'=>'test']
    ];
*/
// var_dump($_REQUEST);
if( isset($_REQUEST['user']) && ($_REQUEST['user'] !== "") ) {
    $data = [
        ['user'=>$_REQUEST['user'], 'pass'=>$_REQUEST['pass']]
         ];
    // var_dump($data);
    add_to_file($data);
    read_file();
} else{
    read_file();
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title> Форма входа </title>
</head>
<body>
    <form name="form" action="<?=$_SERVER['SCRIPT_NAME']?>" method="post">
        <p>Login     <input type="text" name="user">
        <p>Pass    <input type="text" name="pass">
        <p> <input type="checkbox" запомнить подключение name="save"/> запомнить подключение </p>
        <input type="submit" value="Войти">
    </form>
</body>
</html>