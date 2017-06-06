<?php
echo '<pre><h3>
Задание 1:
Создать массив из дней недели.
С помощью цикла foreach вывести все дни недели,
а текущий день выведите жирным.
Текущий день можно получить с помощью функции date
Названия дней выводить по-русски
</h3></pre>';


$arr = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда',
        'Четверг', 'Пятница', 'Суббота'];

$current_day = (int)date("w");

$day = '';

foreach ($arr as $value) {
    if (array_search($value, $arr) == $current_day) {
        $day = "<b>$value</b>";
    } else {
        $day = $value;
    }
    echo "$day<br>";
}
unset($value);

echo '<pre><h3>
Задание 2:
Доделать задачу про счастливые билетики - вывести процент от общего числа билетов
</h3></pre>';

$i = 0;
$sum_lucky = 0;
$prc_lucky = 0;

while ($i < 1000000) {
    $ticket =  str_pad($i, 6, '0', STR_PAD_LEFT);
    
    $fhalf = substr($ticket, 0, 3);
    
    $shalf = substr($ticket, 3);
    
    $first_sum = $fhalf[0] + $fhalf[1] + $fhalf[2];
    
    $second_sum = $shalf[0] + $shalf[1] + $shalf[2];
    
    if ($first_sum == $second_sum) {
        $sum_lucky++;
    }
    
    
    $i++;
}

$prc_lucky = (int)($sum_lucky/10000);
echo "Процент счастливых от общего числа билетов: $prc_lucky%";


echo '<pre><h3>
Задание 3:
Создать переменную, присвоить ей значение - год.
Используя тернарный оператор определить, високосный год или нет
</h3></pre>';

/*если (год не делится на 4) тогда (год обычный)
иначе если (год не делится на 100) тогда (год високосный)
иначе если (год не делится на 400) тогда (год обычный)
иначе (год високосный)*/

$year = 2000;
$yaer_str = '';

$yaer_str = 
($year%4 != 0) ?  "$year не високосный год" :
    (($year%100 != 0) ? "$year високосный год" :
        (($year%400 != 0) ? "$year не високосный год" : 
            "$year високосный год"));

echo $yaer_str;

echo '<pre><h3> 
Задание 4:
Вывести все положительые числа, меньше 40,
у которых есть хотя бы одна цифра 3
и которые не делятся на 5.
</h3></pre>';

$str_num = '';

for ($j = 0; $j < 40; $j++) {
    $str_num = (string)$j;
    if ((($str_num[0] == 3) || ($str_num[1] == 3)) 
        && ($j%5 != 0)) {
        echo "$j<br>";
    }
}


echo '<pre><h3> 
Задание 5:
Нарисовать ромб из символов * . Высота 
произвольная
</h3></pre>';

//Способ решения не укзан, так что..

/*echo '<pre>
        *
       ***
      *****
     *******
      *****
       ***
        *
    </pre>';*/ // =(


$height = 5;

$str_space = '_';

for ($j = 0; $j < $height ; $j++){
    $str_space .= '_';
};

for ($l = 0; $l < $height*2; $l++) {
   if ($l < $height) {
        $a = $height + $l;
        $b = $height - $l;
        $str_space[$a] = '*';
        $str_space[$b] = '*';
        echo "$str_space<br>";
   }
     else if ($l > $height) {
        $a = $l - $height;
        $b = $height - $l; 
        $str_space[$a] = '_';
        $str_space[$b] = '_';
        echo "$str_space<br>";            
    }
}

echo '<pre><h3>     
Задание 6:
Вывести таблицу умножения чисел до 10 с помощью 
циклов for
</h3></pre>';
$mlt = 0;

for ($i = 1; $i < 11; $i++) {
    for ($j = 1; $j < 11; $j++) {
        $mlt = $i * $j;
        echo "$i * $j = $mlt<br>";
    }
    echo '<br>';
}


echo '<pre><h3> 
Задание 7**:
Отсортировать массив по \'price\'
</h3></pre>';
$arr2 = [
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

/*И посмотрите функции для работы с 
массивами!*/
   
//Удалось приспособить метод пузырька:
//мультисорт

$n = count($arr2);

for ($i = 0; $i < $n-1; $i++) {
        for ($j = 1; $j < $n-$i; $j++) {
            $a = $arr2[$j]["price"];
            $b = $arr2[$j+1]["price"];
            if ((int)$b < (int)$a) { 
                $t = $arr2[$j+1];
                $arr2[$j+1] = $arr2[$j];
                $arr2[$j] = $t; 
                }
            }
     }  

var_dump($arr2);

?>