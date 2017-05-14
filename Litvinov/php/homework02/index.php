<?php
/**
 * Created by PhpStorm.
 * User: s_i_d
 * Date: 14.05.2017
 * Time: 3:34
 */
include("tasks.php");
echo TASK01;
echo "<br>";echo "<br>";
$eng = 'Monday Tuesday Wednesday Thursday Friday Saturday Sunday';
$eng_arr = explode(" ", $eng);
$rus = 'понедельник вторник среда четверг пятница суббота воскресенье';
$rus_arr = explode(" ", $rus);

$translate_arr = array();

$arr_length = count($eng_arr);
for($i=0 ; $i<$arr_length; $i++){
    $key = $eng_arr[$i];
    $translate_arr[$key] = $rus_arr[$i];
}

$day = date("l");
$current = "";
foreach($translate_arr as $key=>$value){
    $current = $value;
    if (mb_strtolower($day) == mb_strtolower($key)){
        $current = "<b>".$current."</b>";
    }
    $current = $current."<br>";
    echo $current;
}
echo "<br>";
echo "----------------------------------------------------------";echo "<br>";
echo TASK02;
echo "<br>";echo "<br>";
$n = 1000000;
$counter=0;
for($i = 0; $i < $n ; $i++)
{
    $data = str_pad($i, 6, "0", STR_PAD_LEFT);
    $var1 = substr($data, 0, 3);
    $var2 = substr($data, 3);
    $v1 = (int)$var1[0]+(int)$var1[1]+(int)$var1[2];
    $v2 = (int)$var2[0]+(int)$var2[1]+(int)$var2[2];
    if($v1 === $v2){
        $counter++;
    }
};
echo '<br>';
echo "кол-во счастливых билетов:  ", $counter;
echo "<br>";
echo "процент от общего количества  ", round($counter * 100.0 / 999999.0, 4), "%";
echo '<br>';

echo "<br>";
echo TASK03;
echo "<br>";echo "<br>";

$year = 2013;
function leap_year($year)
{
    $is_leap_year = (bool)(($year % 4 == 0) and ($year % 100 != 0) or ($year % 400 == 0));
    $value = $is_leap_year ? "високосный год" : "не високосный год";
    echo "$year это " . $value."<br>";
}
$year = 2013;leap_year($year);
$year = 2000;leap_year($year);
$year = 2012;leap_year($year);
$year = 1900;leap_year($year);
$year = 2017;leap_year($year);

echo "<br>";
echo TASK04;
echo "<br>";echo "<br>";

$num = 40;
$result = array();
for($i=0;$i<$num;$i++ ){
    $value = -1;
    $num_str = str_pad($i, 2, "0", STR_PAD_LEFT);
    if ((($num_str[0]=="3") or ($num_str[1]=="3")) and (($i%5) != 0)){
        $value = $i;
    }
    if($value > 0){
        array_push($result, $value);
    }
}
$str_out =" ";
foreach($result as $value){
    $str_out = $str_out.$value." ";
}
echo $str_out."<br>";
echo "<br>";
echo TASK05;
echo "<br>";echo "<br>";



echo TASK06;
echo "<br>";

?>