<?php

session_start();

require_once __DIR__ . '/app/models/auth_model.php';

$pass1 = $_POST['pwd'];
$pass = password_hash($pass1, PASSWORD_DEFAULT);
$is_auth = auth_user($_POST['login'], $pass);

var_dump($is_auth);
	
include __DIR__ . '/app/views/auth_form.php';