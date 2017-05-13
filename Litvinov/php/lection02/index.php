<?php
/**
 * Created by PhpStorm.
 * User: sid
 * Date: 13.05.2017
 * Time: 13:30
 */

# switch
print ("lection 02"."<br>");

echo str_pad(34, 6, "0", STR_PAD_LEFT);
echo str_pad(34, 6, "0", STR_PAD_LEFT);

print ("вывести все счастливые билеты, сумма первые 3,  равны 2 3");
$n = 1000000;
$counter=0;
for($i = 0; $i < $n ; $i++)
{
    $data = str_pad($i, 6, "0", STR_PAD_LEFT);
    $var1 = substr($data, 0, 3);
    $var2 = substr($data, 3);
    $v1 = (int)$var1[0]+(int)$var1[1]+(int)$var1[2];
    $v2 = (int)$var2[0]+(int)$var2[1]+(int)$var2[2];

    if($v1 == $v2){
        #echo $data; echo "<br>";
        $counter++;
    }
};
echo '<br>';
echo "counter", $counter;
echo "counter", $counter *100 / 999999, "%";
echo '<br>';


print("светофор с начала каждого часа первые
                   3 мин зеленым,
                   2 три минуты красным в зависимости от времени");
echo '<br>';

$time  = 37; # min;
$time  = 44; # min;
#$time = date('i');
$full_cycles = $time  % 5;
echo $full_cycles;
echo '<br>';
$cmd = $full_cycles < 3 ? "green" : "red";
echo $cmd;
echo '<br>';

print("нарисовать треугольник звездочками");
echo '<br>';
$n = 10;
for($i=0, $str=''; $i < $n; $i++){
    $str = $str."*";
    echo $str;
    echo '<br>';
}

print("нарисовать треугольник звездочками");
echo '<br>';
$n = 10;
for($i=10, $str=''; $i > 0; $i--){
    $str = $str."*";
    echo $str;
    echo '<br>';
}


print("найти сумму квадратов элементов массивов \n увеличить значение каждого элемента массива на 1 ");

print "массивы";
include("array_ex.php");
echo "
<table>
  <caption> Table </caption>
     <th>N</th>
     <th>param01</th>
     <th>param02</th>
     <th>param03</th>
</table>
";


echo '<br>';
$arr2 = [1,3,4,6,7];
list($a, $b, $c) = $arr2;
echo $a, $b, $c;
echo '<br>';

$arr = [
    [1,2],
    [3, 4]
];
foreach($arr as list($a, $b)){
    echo "A: $a, B: $b";
    echo '<br>';
}
echo '<br>';


$arr = array(1, 2, 3);
$arr = ["key1"=>3,
        "key2" => 4,
];
foreach($arr as $key => $value){
    var_dump($key);
    var_dump($value);
}

$arr1 = array(1,2,3,4,5,6);
foreach($arr1 as $value){
    var_dump($value);
}
$str = '';
for($i=1; $i<20;$i++){
    $str = $str."-";
}
echo $str."<br>";

print "for";
print "do-while";
print "while";
print(" день недели ");


function compeare($a, $b)
{
    $res = "";
    switch ($a <=> $b) {
        case 0:
            $res = "равны";
            break;
        case 1:
            $res = "$a > $b";
            break;
        case -1:
            $res = "$a < $b";
            break;
    }
    return $res."<br>";
}
$a = 23; $b = 69;
echo compeare($a, $b);
$a = 23; $b = 23;
echo compeare($a, $b);
$a = 50; $b = 23;
echo compeare($a, $b);

print ("<br>"."space chip");
var_dump(1 <=> 1);
var_dump(1 <=> 2);
var_dump(2 <=> 1);


?>