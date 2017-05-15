<?php

//Задание 1:
//Создать массив из дней недели.
//С помощью цикла foreach вывести все дни недели,
//а текущий день выведите жирным.
//Текущий день можно получить с помощью функции date
//Названия дней выводить по-русски


$week = array(1, 2, 3, 4, 5, 6, 7);

$week = [
'1' => 'понедельник',
'2' => 'вторник',
'3' => 'среда',
'4' => 'четверг',
'5' => 'пятница',
'6' => 'суббота',
'7' => 'воскресенье',
];

$current_day = date("N");


switch ($current_day):
	case 1:
	$d = 'понедельник';
	break;
	case 2:
	$d = 'вторник';
	break;
	case 3:
	$d = 'среда';
	break;
	case 4:
	$d = 'четверг';
	break;
	case 5:
	$d = 'пятница';
	break;
	case 6:
	$d = 'суббота';
	break;
	case 7:
	$d = 'воскресенье';
	break;
endswitch;

foreach ($week as $value) {
	if ($value != $d) {
	echo "$value <br>";
	}
	else {
	echo "<b>$value</b> <br>";
	}
};

//$current_day = date("N");
//
//switch ($current_day):
//	case 1:
//	case 2:
//	case 3:
//	case 4:
//	case 5:
//		echo "рабочая неделя";
//	case 6:
//	case 7:
//		echo "выходные";
//	break;
//endswitch;

//Задание 2:
//Доделать задачу про счастливые билетики - вывести процент от общего числа билетов

//$i = 0;
//$n = 0;
//while ($i < 1000000) {
//	$ticket = str_pad($i, 6, 0, STR_PAD_LEFT);
//	$f_half = substr($ticket, 0, 3);
//	$s_half = substr($ticket, 3);
//	
//	$first_sum = $f_half[0] + $f_half[1] + $f_half[2];
//	$second_sum = $s_half[0] + $s_half[1] + $s_half[2];
//	
//	if($first_sum == $second_sum) {
//		echo "$ticket <br>";
//		$n = $n+1;
//	};
//		
//	$i++;
//}
//
//$proc = (($n/1000000)*100).'%';
//echo "$proc";


//Задание 3:
//Создать переменную, присвоить ей значение - год.
//Используя тернарный оператор определить, високосный год или нет

$god = date(L);
echo ($god == 1) ? "високосный год <br>" : "не високосный год <br>" ;


//Задание 4:
//Вывести все положительые числа, меньше 40,
//у которых есть хотя бы одна цифра 3
//и которые не делятся на 5.
//
//$chislo = 44;
//$a = strpbrk($chislo, '3');
//echo $a;

$chislo = 0;
while ($chislo < 40) {
if(($chislo > 0)&(($chislo%5)>0)&((strpbrk($chislo, '3'))>0)) {
	echo "$chislo <br>";
};
	
$chislo++;
};



//Задание 6:
//Вывести таблицу умножения чисел до 10 с помощью циклов for

$a = 1;
$b = 1;

for ($a = 1; $a < 11; $a++) {
//	echo "$a";
	for ($b = 1; $b <11; $b++) {
		$c = $a*$b;
		echo "$c";
	}; echo " <br>";
	
};


//Задание 7**:
//Отсортировать массив по 'price'
//$arr = [
//    '1'=> [
//        'price' => 10,
//        'count' => 2
//        ],
//    '2'=> [
//        'price' => 5,
//        'count' => 5
//        ],
//    '3'=> [
//        'price' => 8,
//        'count' => 5
//        ],
//    '4'=> [
//         'price' => 12,
//         'count' => 4
//         ],
//    '5'=> [
//        'price' => 8,
//        'count' => 4
//        ],
//];
//
//
//foreach($arr as $c=>$key)
//         $sort_price[] = $key['price']; 
// 
//array_multisort($sort_price, SORT_DESC, $arr);


	