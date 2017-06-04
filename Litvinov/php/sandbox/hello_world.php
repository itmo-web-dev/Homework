<!--
<meta charset="UTF-8" />
-->
<?php
120/3.5 =



$strings = array('1820.20', '10002', 'wsl!12');
foreach ($strings as $testcase) {
    if (ctype_digit($testcase)) {
        echo "Строка $testcase состоит только из цифр.\n";
    } else {
        echo "Строка $testcase не состоит только из цифр.\n";
    }
}

$strings = array('KjgWZC', 'arf12');
foreach ($strings as $testcase) {
    if (ctype_alpha($testcase)) {
        echo "Строка $testcase состоит только из букв.\n";
    } else {
        echo "Строка $testcase состоит не только из букв.\n";
    }
}




echo round(3.4).'<br>';         // 3
echo round(3.5).'<br>';         // 4
echo round(3.6).'<br>';         // 4
echo round(3.6, 0).'<br>';      // 4
echo round(1.95583, 2).'<br>';  // 1.96
echo round(1241757, -3).'<br>'; // 1242000
echo round(5.045, 2).'<br>';    // 5.05
echo round(5.055, 2).'<br>';    // 5.06
echo '<br>';
echo round(9.5, 0, PHP_ROUND_HALF_UP);   // 10
echo '<br>';
echo round(9.5, 0, PHP_ROUND_HALF_DOWN); // 9
echo '<br>';
echo round(9.5, 0, PHP_ROUND_HALF_EVEN); // 10
echo '<br>';
echo round(9.5, 0, PHP_ROUND_HALF_ODD);  // 9
echo '<br>';

echo round(8.5, 0, PHP_ROUND_HALF_UP);   // 9
echo '<br>';
echo round(8.5, 0, PHP_ROUND_HALF_DOWN); // 8
echo '<br>';
echo round(8.5, 0, PHP_ROUND_HALF_EVEN); // 8
echo '<br>';
echo round(8.5, 0, PHP_ROUND_HALF_ODD);  // 9
echo '<br>';






function foo($arg_1)
{
    echo "Example function.\n";
    $return_value = $arg_1 * 2;
    return $return_value;
}
print(foo(10)."<br><br>");

/* ссылки с 5.4 не поддерживается
$big_value = int(100);
function big_data(&$arg){
    $arg = $arg * 1000;
}
big_data($big_value);
print($big_value);
*/




$data = array(1, 1., NULL, new stdClass, 'foo');

foreach ($data as $value) {
    echo gettype($value), "\n";
}

$var = 564;
unset($var);
# xdebug_var_dump($var);
#print(gettype($var));

// Начиная с PHP 5.4
$array = [
    "foo" => "bar",
    "bar" => "foo",
];
echo $array['foo'].'<br>';


$a = "hello";
$$a = "test";

echo "$a ${$a}";


# setlocale (LC_CTYPE, "ru_RU.UTF-8");
$num = 100;
$str_test = "результат: $num \n";
$str_test1= "результат: \$num \n";

var_dump($str_test);
echo $str_test;
echo $str_test1;

echo PHP_INT_MAX."<br>";
echo PHP_INT_MIN."<br>";

define("TEST", 45);
if(isset($TEST1)){
    echo "есть <br>";
}else{
    echo "no <br>";
}

if(defined("TEST")){
    echo "true <br>";
}
echo "get define Constants";
var_dump(get_defined_constants());


print("Hello world");

var_dump($GLOBALS);
print($GLOBALS);

echo $GLOBALS;

echo "get define Constants";
var_dump(get_defined_constants());

?>