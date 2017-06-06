<!--
Задания ко вторнику (23.05.2017): 
Задание 1
Создайте форму добавления какой-либо информации (регистрация пользователя, добавление товара или статьи - главное, чтобы было какое-то уникальное поле - логин, id и тд)

Эту информацию нужно записывать в файл, если такой записи еще нет


Вывести информацию из файла на экран
Используйте функции!-->


<!DOCTYPE html>
<html>
	<header>
		<meta charset="utf-8">
	</header>
	<body>
		<form method="post">
		
		<label for="city">Город</label>
		<input  id="city" type="text" name="city">
			
		<label for="street">Улица</label>
		<input  id="street" type="text" name="street">
			
		
		<label for="house">Дом</label>
		<input  id="house" type="text" name="house">
		
		<button type="submit" id="sbm">Отправить</button>
		
		</form>
		
	

<?php
//var_dump($_POST);
	
$city = $_POST['city'];
$street = $_POST['street'];
$house = $_POST['house'];

//$data_arr = [
//	'city' => $city,
//	'street' => $street,
//	'house' => $house,
//];

function get_contents($city, $street, $house) {

	$file = 'dz5.txt';
	$current = file_get_contents($file);
	$current .= $city;
	file_put_contents($file, $current);

	$current .= $street;
	file_put_contents($file, $current);

	$current .= $house;
	file_put_contents($file, $current);
	
	$vivod = file_get_contents('dz5.txt');
	echo $vivod;
	
	}
get_contents($city, $street, $house);
		
?>


</body>
</html>


<!--
Самостоятельно разберитесь с загрузкой файла на сервер
Создайте форму для загрузки файла
Обработайте ее-->


