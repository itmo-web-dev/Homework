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

function paint_line($n, $begin, $end){
    for($i=0, $str=""; $i<$n ; $i++){
        if(($i < $begin) or ($i >= $end)){
            $str = $str."=";
            continue;
        }
        $str = $str."*";
    }
    echo $str."<br>";
}
paint_line(6, 2, 4);
paint_line(6, 0, 3);
paint_line(6, 4, 6);
echo "<br>";

# четный ромб
define("TOP_CORNER", 1);
define("DOWN_CORNER", 3);

function paint_corner($n, $type){
    if( $type ==1 ){
        $length_double = $n*2;
        $left = $n--;
        $right = 1+$n++;
        for ($i = $n; $i > 0; $i--) {
            $left--;
            $right++;
            paint_line($length_double, $left, $right);
        }
    }
    if( $type == 3) {
        $length_double = $n*2;
        for ($i = 0; $i < $n; $i++) {
            paint_line($length_double, $i, $length_double-$i);
        }
    }
}
$n = 5;
paint_corner($n, TOP_CORNER);
paint_corner($n, DOWN_CORNER);
echo "<br>";
# нечетный ромб
function paint_corner_acute($length, $n, $type){
    if( $type ==1 ){
        $left = $n;
        $right = $n-1;
        for ($i = $n; $i > 0; $i--) {
            $left--;
            $right++;
            paint_line($length, $left, $right);
        }
    }
    if( $type == 3) {
        $right = $length+1;
        for ($i = 0; $i < $n; $i++) {
            $left = $i;
            $right--;
            if($i==0) {
                continue;
            }
            paint_line($length, $left, $right);
        }
    }
}
$n = 5;
$length = 9;
paint_corner_acute($length, $n, TOP_CORNER);
paint_corner_acute($length, $n, DOWN_CORNER);
echo "<br>";

# ---- результат ---------
echo "---- результат ---------"."<br>";
$input = 10;
function draw_romb($input)
{
    echo "Высота ромба: $input";echo "<br>";
    if ($input % 2 == 0) {
        $n = $input / (float)2.0;
        paint_corner($n, TOP_CORNER);
        paint_corner($n, DOWN_CORNER);
    } else {
        $n = round($input / 2.0, 0, PHP_ROUND_HALF_DOWN)+1;
        $length = $input;
        paint_corner_acute($length, $n, TOP_CORNER);
        paint_corner_acute($length, $n, DOWN_CORNER);
    }
}
echo "<br>";
$input = 10;
draw_romb($input);
echo "<br>";
$input = 7;
draw_romb($input);
echo "<br>";
$input = 13;
draw_romb($input);

echo "<br>";
echo TASK06;
echo "<br>";echo "<br>";


function table_mult($input)
{
    echo '<table>';
    echo "<caption> Таблица умножения до $input </caption>";
    echo "<tr>";
    for ($i = 0, $str = ""; $i < $input + 1; $i++) {
        if ($i == 0) {
            $str = $str . "<th>N</th>";
            continue;
        }
        $str = $str . "<th>$i</th>";
    }
    echo $str;
    echo "</tr>";


    for ($j = 1; $j < $input + 1; $j++) {
        echo "<tr>";
        for ($i = 1, $str = ""; $i < $input + 1; $i++) {
            if ($i == 1) {
                $str = $str . "<td>$j</td>";
                # continue;
            }
            $mult = $i * $j;
            $str = $str . "<td>$mult</td>";
        }
        echo $str;
        echo "</tr>";
    }

    echo "</table>";
}
$input = 7;
table_mult($input);
$input = 10;
table_mult($input);
$input = 13;
table_mult($input);
?>