<?php
#Задача 1
echo "Задача 1<br>";
$r_b = "<input type='radio' name='php' ";
echo "Неактивная радио кнопка ".$r_b ."><br>";
function make_checked (&$r_b) {
     $r_b .= " checked";
}
make_checked($r_b); 
echo "Активная радио кнопка " . $r_b ."><br><br>";
#Задача 2
echo "Задача 2<br>";
function hello_func ($name = 'Гость') {
    echo "Приветствую, $name!<br><br>";
}
hello_func();
#Задача 3
echo "Задача 3<br>";
$towns = "Киров Мурманск Архангельск Ялта Севастополь Москва";
echo "Исходная строка:<br>";
echo $towns."<br>";
function sort_towns (&$str) {
    #считаем количество пробелов
    $spaces = substr_count($str, ' ');
    $format = '';
    $i = 0;
    #записываем формат, который будем передавать в
    #функицю sscanf
    while ($i <= $spaces) {
        $format .= "%s ";
        $i++;
    }
    #Удаляем пробел в конце
    $format = rtrim($format);
    #Записываем строку в массив
    $arr_towns = sscanf($str, $format);
    #Сортируем массив
    natcasesort($arr_towns); 
    #Записываем отсортированный массив обратно в строку:
    $str = join(' ', $arr_towns);
}
sort_towns($towns);
echo "Строка после сортировки:<br>";
echo $towns."<br><br>";
#Задача 4
echo "Задача 4<br>";
$t_str = 'Test StRinG foR Upper LoweR funCTioN';
echo "Исходная строка:<br>";
echo $t_str."<br>";
function convert_str (&$str, $f = 1) {
    if ($f == 1) {
        $str = strtoupper($str); 
    } else if ($f == 2) {
        $str = strtolower($str); 
    } else if ($f = 3) {
        $str = strtolower($str); 
        $str = ucwords($str);
    }
}
convert_str($t_str, 3);
echo "Строка после преобразования:<br>";
echo $t_str."<br><br>";
#Задача 5
echo "Задача 5<br>";
$str_tags = "<h1>Hello, world!</h1>";
    
echo "Исходная строка:<br>";
echo $str_tags."<br>";
echo "Строка после преобразования:<br>";
echo strip_tags($str_tags)."<br><br>";
#Задача 6
echo "Задача 6<br>";
$base_arr = ["Киров", "Мурманск", "Архангельск", "Ялта", "Севастополь", "Москва"];
    
$to_str = join(' ', $base_arr);
var_dump($to_str);
echo "<br><br>";
#Задача 7
echo "Задача 7<br>";
$date = "30-11-2017";
echo date("Y.m.d", strtotime($date))."<br><br>";
#Задача 8
echo "Задача 8<br>";
$var_php = "/php/";
echo trim($var_php, '/')."<br><br>";
#Задача 9
echo "Задача 9<br>";
$just_string = 'просто строка';
function add_dot (&$str) {
    $str1 = rtrim($str, '.');
    if ($str1 != $str) {
        return;
    } else {
       $str .= '.'; 
    }
}
add_dot($just_string);
echo $just_string;
echo "<br><br>";
#Задача 10
echo "Задача 10<br>";
function NY_timer ($date) {
    $year = date("Y", strtotime($date));
    $res = (int)((strtotime("31.12.$year") - strtotime($date))/60/60/24);
    echo "Дней до нового года: " . $res . "<br><br>";
}
$date2 = "28.10.1992";
NY_timer($date2);
#Задача 11*
echo "Задача 11*<br>";
function try_to_func ($num) {
    for ($i = 1; $i <= $num; $i++) {
    	echo $num.' / '.$i.' = ';
        $result = (int)($num/$i);
        echo $result.";<br>";
    }
    return;
} 
$num = 18;
try_to_func ($num);
#var_dump(func_gen($num));