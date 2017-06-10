<?php
function indexAction () {
	session_start();
	logout();
	generateView('all_goods_view.php', 'template.php', [
		'goods_data' => getAllGoods(),
		]);
}

function descriptionAction () {
	session_start();
	logout();
	$good_id = getGoodById(isset($_GET['id']) ? $_GET['id'] : '');
	generateView('good_info_view.php', 'template.php', [
		'current_good' => $good_id,
		'auth' => is_session(),
		]);
}

function loginAction () {
	session_start();
	logout();
	$login = (isset($_POST['login']) ? $_POST['login'] : '');
	$pwd = (isset($_POST['pwd']) ? $_POST['pwd'] : '');
	if(Login($login, $pwd) || is_session()) {
		header('Location: /');
	}
	generateView('auth_form.php', 'template.php');
}

function lkAction () {
	session_start();
	logout();
	$name = $_POST['login'];
	generateView('lk.php', 'template.php');
}

function generateView($contentView, $template, $data = []) {
	if(is_array($data)) {
		extract($data);
	}
	require_once 'app/views/'.$template;
}

