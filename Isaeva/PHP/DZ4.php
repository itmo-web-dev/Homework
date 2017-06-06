<!DOCTYPE html>

<!--
2. Подготовить форму (например форму регистрации).
Помимо полей ввода, у формы должен быть чекбокс или радиокнопка.
Данные, вносимые пользователем валидируются с помощью JavaSctipt
-->

<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>

<body>
	
		<form method="post">
		
		<label for="login">Login</label>
		<input id="login" type="text" name="login">
		
		<label for="pwd">Password</label>
		<input id="pwd" type="password" name="pwd">
		
		<label for="check">Чекбокс</label>
		<input id="check" type="checkbox" name="check">
		
		<button id="sbm" type="submit">Отправить</button>
		
		</form>

<?php
//var_dump($_POST);
	
$login = $_POST['login'];
$pwd = $_POST['pwd'];
$check = $_POST['check'];

$data_arr = [
	'login' => $login,
	'pwd' => $pwd,
	'check' => $check,
];
	
?>
	
<script>

var log = 'Евгения';
var pass = '1234';
	
var obj = <?php echo json_encode($data_arr); ?>;
console.log (obj);

var a = obj.login;
console.log (a)

var b = obj.pwd;
console.log (b)

if ((a===log)&&(b===pass)) {
	alert ('Валидация прошла')
} else {
	if ((a===null)&&(b===null)) {
	console.log ('Требуется ввести пароль')
	} else {
	alert ('Логин или пароль неверный')
}
}
</script>

</body>
</html>



