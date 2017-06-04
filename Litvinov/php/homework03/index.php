<?php
/**
 * Created by PhpStorm.
 * User: s_i_d
 * Date: 17.05.2017
 * Time: 23:52
 */
error_reporting(E_ALL | E_STRICT);
ini_set('display_errors', 1);
ini_set("log_errors", 1);
ini_set("log_errors_max_len", 0);
ini_set("error_log", 'php_errors.log');

include_once("tasks.php");

echo(nl2br($arr[0]));
echo "<br/>";
function make_checked(&$radio_but){
    $radio_but .= "checked='checked'";
}

echo "<br/>";
$radio_but = "<input type='radio' name='php' ";
echo $radio_but .">Кнопка не нажата<br>"; // неактивная радиокнопка
//напишите функцию make_checked, которая сделает радиокнопку активной (атрибут checked)
make_checked($radio_but); // вызов функции
echo $radio_but .">Кнопка нажата <br>"; // активная радиокнопка

#-----------------------------------------------------------------------
echo "<br/>";
echo(nl2br($arr[1]));
echo "<br/>";
function hello($user="Гость"){
    echo "Здравствуйте, ".$user."<br/>";
}
hello('Peter');
hello();

#-----------------------------------------------------------------------
echo "<br/>";
echo(nl2br($arr[2]));
echo "<br/>";

$cmd = "Москва Спб Тула Алмаата";
function sort_string($cmd){
    $arr_city = explode(" ", $cmd);
    sort($arr_city);
    return implode(" ", $arr_city);
}
echo "<br/>";
echo $cmd."<br/>";
echo sort_string($cmd)."<br/>";

#-----------------------------------------------------------------------
echo "<br/>";
echo(nl2br($arr[3]));
echo "<br/>";

$cmd = "User items";
define("UPPER_CASE", 1);
define("LOWER_CASE", 2);
define("FIRTS_LETTER", 3);
function convert_str($cmd, $type=0){
    if (is_int($type) != true) {
        return "N/A";
          }
    $output = "";
    if($type == 1){
        $out = strtoupper($cmd);
        }
    if($type == 2) {
        $out = strtolower($cmd);
    }
    if($type == 3) {
        $out = ucwords($cmd);
    }
    return $out;
}
echo "<br/>";
echo convert_str($cmd, UPPER_CASE)."<br/>";
echo convert_str($cmd, LOWER_CASE)."<br/>";
echo convert_str($cmd, FIRTS_LETTER)."<br/>";

#-----------------------------------------------------------------------
echo "<br/>";
echo(nl2br($arr[4]));
echo "<br/>";
echo "<br/>";

$cmd = "<h1>Hello, world!</h1>";
echo strip_tags($cmd)."<br/>";

#-----------------------------------------------------------------------
echo "<br/>";
echo(nl2br($arr[5]));
echo "<br/>";
echo "<br/>";

$cmd =['2', '5', '54'];
var_dump($cmd);
$out = implode(",", $cmd);
echo $out."<br/>";

#-----------------------------------------------------------------------
echo "<br/>";
echo(nl2br($arr[6]));
echo "<br/>";
echo "<br/>";

$date = '30-11-2017';
print_r($date);echo "<br/>";
$arr_date = explode("-", $date);
$arr_date_reversed = array_reverse($arr_date);
echo implode(".", $arr_date_reversed);

#-----------------------------------------------------------------------
echo "<br/>";
echo "<br/>";
echo(nl2br($arr[7]));
echo "<br/>";
echo "<br/>";

$cmd = "/php/";
$str = str_replace('/', '', $cmd);
echo $str."<br/>";

#-----------------------------------------------------------------------
echo "<br/>";
echo "<br/>";
echo(nl2br($arr[8]));
echo "<br/>";
echo "<br/>";

function check_point($str){
    if(is_string($str) != true){
        return "N/A";
    }
    $str = rtrim($str);
    if (mb_substr($str, -1) !== '.'){
        $str .= '.';
    }
    return $str;
}

$cmd = "string.";
echo check_point($cmd)."<br/>";
$cmd = "string";
echo check_point($cmd)."<br/>";
$cmd = "string    ";
echo check_point($cmd)."<br/>";
$cmd = "string.    ";
echo check_point($cmd)."<br/>";

#-----------------------------------------------------------------------
echo "<br/>";
echo "<br/>";
echo(nl2br($arr[9]));
echo "<br/>";
echo "<br/>";
date_default_timezone_set('Europe/Moscow');

function day_to_year_out($date="now"){
     if($date == "now"){
         $day = date("z");
     }else{
         $day = date("z", $date);
     }

     $is_vesokosniy = date("L", (int)$date);
     if($is_vesokosniy){
         echo "Весокосный год"."<br/>";
         $rez = 365-$day;
     }else{
         echo "Обычный год"."<br/>";
         $rez = 364-$day;
     }
    return (string)$rez;
}

echo day_to_year_out()."<br/>";
$cmd = mktime(0, 0, 0, 1, 1, 1999);
echo day_to_year_out($cmd)."<br/>";
$cmd = mktime(0, 0, 0, 1, 1, 2008);
echo day_to_year_out($cmd)."<br/>";

#-----------------------------------------------------------------------
echo "<br/>";
echo "<br/>";
echo(nl2br($arr[10]));
echo "<br/>";
echo "<br/>";

function divide($value, $num=10){
    for($i=1; $i<$num; $i++){
        if($value%$i === 0 )
            $arr[]=$i;
    }
    return $arr;
}

echo  "value=15, range=[1..10]" . "<br/>";
foreach( divide(15, 10) as $value) {
    echo  $value . " ";
}
echo "<br/>";

$v = 25;
$r = 30;
echo  "value=$v, range=[1..$r]" . "<br/>";
foreach( divide($v, $r) as $value) {
    echo  $value . " ";
}