<?php

$p = $_POST;

//var_dump($p);

$login = $p['login'];
$pwd = $p['pwd'];
$check = $p['ck'];

$filename = 'login.txt';

$data_arr = [
    'login' => $login,
    'pwd' => $pwd,
    'ck' => $check
];

/*Задание 1
Создайте форму добавления какой-либо информации (регистрация 
пользователя, добавление товара или статьи - главное, чтобы было какое-то 
уникальное поле - логин, id и тд)
Эту информацию нужно записывать в файл, если такой записи еще нет
Вывести информацию из файла на экран
Используйте функции!*/

function addUser($arr, $filename) {
    $fl = 1;
    if (file_exists($filename) == true) {
    $datafile = file_get_contents($filename);
    $datafile_arr = explode(';', $datafile);
    } else {
        echo 'Указанного файла не существует!';
        return;
    }
    $data = implode(', ', $arr);
    foreach ($datafile_arr as $value) {
        if ($value == $data) {
            $fl = 0;
        }
    }
    $data .= ';';
    if ($fl == 1) {
    file_put_contents($filename, $data, FILE_APPEND);
    echo 'Запись в файл произведена!';
    } else {
        echo 'Введённые значениения уже есть в файле!';
        return;
    }

}

unset($value);

addUser($data_arr, $filename);


/*Задание 2
Самостоятельно разберитесь с загрузкой файла на сервер
Создайте форму для загрузки файла
Обработайте ее*/

?>