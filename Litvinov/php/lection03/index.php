<?php
/**
 * Created by PhpStorm.
 * User: sid
 * Date: 16.05.2017
 * Time: 19:11
 */

function xrange($start, $limit, $step = 1)
{
    for ($i = $start; $i <= $limit; $i += $step) {
        yield $i;
    }
}
# out of memory
foreach(range(1,2000000,1) as $value){
    echo $value;
    echo "<br/>";echo "<br/>";
}

/*
foreach(xrange(1,9000000,1) as $value){
    echo $value;
    echo "<br/>";echo "<br/>";
}
*/

$some_func = function($arg){
    echo "$arg";
    };
$some_func("12");


print "глобальные переменные ";
$data='My data';
function menugen(){
    global $data; // <-- add this line
    echo "[".$data."]";
}
menugen();


print "передача ";
echo "<br/>";echo "<br/>";

function get_sum_mega($a, $b){
    return $a + $b;
}
echo(get_sum_mega(1,4));
echo "<br/>";

$arr = [1,6];
echo(get_sum_mega(...$arr));
echo "<br/>";

$arr = [1,45, 45];
echo(get_sum_mega(...$arr));
echo "<br/>";

echo "<br/>";echo "<br/>";
print "проверка bool ";
echo "<br/>";echo "<br/>";

function tst_bool($booo){
    if(!$booo){
        echo "FALSE";
        return;
    }
    echo "TRUE";
    return;
}
tst_bool(true);
echo "<br/>";

print "любое кол-во аргументов: ";
echo "<br/>";
function get_sum($res, ...$numbs){
    foreach($numbs as $value){
        $res += $value;
    }
    return $res;
}
echo get_sum(10,1,2,3,4,5);
echo "<br/>";

function get_su1(...$numbs){
    $res = 0;
    foreach($numbs as $value){
        $res += $value;
    }
    return $res;
}
echo get_su1(10,1,2,3,4,5);
echo "<br/>";


print "параметры по умолчанию";
echo "<br/>";

function show_file_path($dir, $file= "test.txt"){
    return $dir . "/" . $file;
}

echo show_file_path("test/var", "file.txt");
