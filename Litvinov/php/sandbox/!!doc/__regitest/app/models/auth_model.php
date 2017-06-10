<?php
function Login($login, $pwd){
	if ($login == 'user2' && $pwd == '1234') {
		$_SESSION['name'] = $login;
		return true;
	} 
	return false;
}
#проверка на запущенность сессии
function is_session(){
	if(isset($_SESSION['name'])) {
		return true;
	} else {
		return false;
	}
}
#корявый ЛОГАУТ
function logout () {
	if (isset($_GET['exit'])) {
		unset($_SESSION['name']);
		session_unset();
		session_destroy();
	}
}