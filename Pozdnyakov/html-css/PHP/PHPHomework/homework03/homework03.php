<?php

/*Задача 1
//Дана радиокнопка
$radio_but = "<input type='radio' name='php' ";

echo $radio_but ."><br>"; // неактивная радиокнопка

//напишите функцию make_checked, которая сделает радиокнопку активной 

(атрибут checked)

make_checked($radio_but); // вызов функции

echo $radio_but ."><br>"; // активная радиокнопка*/

echo "Задача 1<br>";

$radio_but = "<input type='radio' name='php' ";

echo "Неактивная радио кнопка ".$radio_but ."><br>";

function make_checked (&$radio_but) {
     $radio_but .= " checked";
}

make_checked($radio_but); 

echo "Активная радио кнопка " . $radio_but ."><br><br>";

/*Задача 2
создать функцию с аргументом для вывода приветствия (Например, 

"Здравствуйте, ИМЯ").
Установить значение по умолчанию для аргумента равное «Гость»*/
echo "Задача 2<br>";

function hello_func ($name = 'Гость') {
    echo "Приветствую, $name!<br><br>";
}

hello_func();

/*Задача 3
Допустим, пользователь вводит названия городов через пробел. Вы их 
присваиваете переменной.
Переставьте названия так, чтобы названия были упорядочены по алфавиту.*/
echo "Задача 3<br>";

$towns = "Киров Мурманск Архангельск Ялта Севастополь Москва";

echo "Исходная строка:<br>";
echo $towns."<br>";

function sort_towns (&$str) {
    //считаем количество пробелов
    $count_space = substr_count($str, ' ');
    $format = '';
    $i = 0;
    //записываем формат, который будем передавать в
    //функицю sscanf
    while ($i <= $count_space) {
        $format .= "%s ";
        $i++;
    }
    //Удаляем пробел в конце
    $format = rtrim($format);
    //Записываем строку в массив
    $arr_towns = sscanf($str, $format);
    //Сортируем массив
    natcasesort($arr_towns); 
    //Записываем отсортированный массив обратно в строку:
    $str = join(' ', $arr_towns);
}

sort_towns($towns);

echo "Строка после сортировки:<br>";
echo $towns."<br><br>";


/*Задача 4
Написать функцию - конвертер строки.
Возможности:
перевод всех символов в верхний регистр,
перевод всех символов в нижний регистр,
перевод всех символов в нижний регистр и первых символов слов в верхний регистр.
Это должна быть одна функция*/
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

/*Задача 5
Используя функцию удаления HTML и PHP-тегов из строки, выведите на экран 

строку «<h1>Hello, world!</h1>».
Строка не должна выглядеть как заголовок первого уровня – все теги должны 

быть удалены.*/
echo "Задача 5<br>";

$str_tags = "<h1>Hello, world!</h1>";
    
echo "Исходная строка:<br>";
echo $str_tags."<br>";


echo "Строка после преобразования:<br>";
echo strip_tags($str_tags)."<br><br>";

/*Задача 6
Создайте массив. Объедините все элементы массива в строку и выведите её на экран.*/
echo "Задача 6<br>";

$arr_join = ["Киров", "Мурманск", "Архангельск", "Ялта", "Севастополь", "Москва"];
    
$str_joun = join(' ', $arr_join);

var_dump($str_joun);

echo "<br><br>";

/*Задача 7
В переменной $date лежит дата в формате '30-11-2017'. Преобразуйте эту 

дату в формат '2017.11.30'.*/
echo "Задача 7<br>";

$date = "30-11-2017";
echo date("Y.m.d", strtotime($date))."<br><br>";

/*Задача 8
Дана строка '/php/'. Сделайте из нее строку 'php', удалив концевые слеши.*/
echo "Задача 8<br>";

$var_php = "/php/";

echo trim($var_php, '/')."<br><br>";

/*Задача 9
Дана строка 'просто строка.'. В конце этой строки может быть точка, а 
может и не быть. Сделайте так, чтобы в конце этой строки гарантировано 
стояла точка. То есть: если этой точки нет - ее надо добавить, а если 
есть - ничего не делать. Задачу решите через rtrim*/
echo "Задача 9<br>";

$simple_str = 'просто строка';

function set_note (&$str) {
    $str1 = rtrim($str, '.');
    if ($str1 != $str) {
        return;
    } else {
       $str .= '.'; 
    }
}

set_note($simple_str);
echo $simple_str;
echo "<br><br>";

/*Задача 10
Написать функцию, которая выводит количество дней, оставшихся до нового 
года.
Функция должна корректно работать при запуске в любом году.*/
echo "Задача 10<br>";

function happy_new_func ($date) {
    $year = date("Y", strtotime($date));
    $res = (int)((strtotime("31.12.$year") - strtotime($date))/60/60/24);
    echo "До нового года осталось дней: " . $res . "<br><br>";
}

$date2 = "10.11.1964";
happy_new_func($date2);

//echo date("Y.m.d", strtotime($date))."<br><br>"


/*Задача 11*
Функция принимает число, в цикле for пытается поделить (без остатка) его на числа из диапазона 1..num и выводит результат*/
echo "Задача 11<br>";

//"из диапазона 1..num" - это же от 1-го до вводимого нами числа?

function func_gen($num) {
    for ($i = 1; $i <= $num; $i++) {
        $res_gen = (int)($num/$i);
        echo $res_gen."<br>";
    }
    return;
} 

$num = 10;
func_gen($num);
//var_dump(func_gen($num));
?>