<?php

//Задание 1:
//Создать массив из дней недели.
//С помощью цикла foreach вывести все дни недели,
//а текущий день выведите жирным.
//Текущий день можно получить с помощью функции date
//Названия дней выводить по-русски

$arr_days = array("Поенедельник", "Вторник","Среда","Четверг","Пятница","Суббота","Воскресение");
$calendar = "";
$today = date("w");
foreach ($arr_days as $value) {
	
  if(array_search($value, $arr_days) == $today-1) {
   $calendar = "<b>$value</b>"; 
 }
 else {
  $calendar = $value;
} echo "$calendar <br>";

}

//Вывести все счастливые билеты в формате 000 000 .
//Задание  2:
//Доделать задачу про счастливые билетики - вывести процент от общего числа билетов

$i = 0;
$sum = 0;
$prop = 0;

while ($i < 1000000) {

      $ticket = str_pad($i, 6, '0', STR_PAD_LEFT); //000 003
      $first_half = substr($ticket, 0, 3); // '000'
      $second_half = substr($ticket, 3); // '003'

      $first = $first_half[0] + $first_half[1]+$first_half[2];
      $second = $second_half[0]+$second_half[1]+$second_half[2];

      if ($first == $second) {
        $sum++;
      }

      $i++;
    }

    $prop = $sum/10000;

    echo "Количество счастливых билетов: $prop % </br>";


//Задание 3:
//Создать переменную, присвоить ей значение - год.
//Используя тернарный оператор определить, високосный год или нет

    $year = date("Y");

    $year = (date("L")) ? "$year - високосный" : "$year - не високосный год";

    echo "$year </br>";
    echo "</br>";
// Задание 4:
// Вывести все положительые числа, меньше 40,
// у которых есть хотя бы одна цифра 3
// и которые не делятся на 5.

    $num;

    for ($num = 0; $num <= 40; $num++) {
      $num = (string)$num;  
      if ($num[0] == 3 || $num[1] == 3 )
        echo "$num ";
      else if ($num%5 != 0)
        echo "$num ";
    }
    echo "</br>";
    echo "</br>";
//Задание 5:
//Нарисовать ромб из символов * . 
//Высота произвольная

function create_romb($a, $b, $k, $u) {
    $center_romb = $b/2+1;
    for ($j = 1; $j <= $b; $j++) {
      for ($i=1; $i <= $a ; $i++) { 
        if ((($i == 1) || ($i == $a) || ($j == 1) || ($j == $a))){
          echo "*";
        } else {
          echo " ";
        }
      }
    }
    for ($i=1; $i <= $a-$k; $i++)
      echo " ";
    for ($i=1; $i <= $u; $i++)
      echo "*";
    if ($j < $center_romb) {
     $k++; 
     $u+=2; 
   } else {
   $k--; 
   $u-=2;
   }
   echo "\n";
 }
   
create_romb(12, 16, 1, 1);

//Задание 6:
//Вывести таблицу умножения чисел до 10 с помощью циклов for

$res = 0;

for ($i=2; $i <= 9; $i++) { 
  for ($j=2; $j <= 9 ; $j++) { 
    $res = $i*$j;
    echo "$i * $j = $res </br>";
  }
}

//Задание 7**:
//Отсортировать массив по 'price'
$arr = [
    
'1'=> [
       'price' => 10,
        'count' => 2
        ],
    
'2'=> [
        'price' => 5,
        'count' => 5
        ],
    
'3'=> [
        'price' => 8,
        'count' => 5
        ],
    
'4'=> [
        'price' => 12,
       'count' => 4
     ],
    
'5'=> [
        'price' => 8,
        'count' => 4
        ],
];

foreach ($arr as $value => $key) {
  $sort_price[] = $key['price'];}
  array_multisort($sort_price, SORT_ASC, $arr);
  var_dump("$sort_price");




   ?>