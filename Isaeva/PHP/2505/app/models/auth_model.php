<?php


function auth_user($login, $pwd) {
//	var_dump($pwd);
	$check_pass = password_verify('123', $pwd);
	
	if ($login == 'user1'&& $check_pass == 'true') {
		$_SESSION['name'] = $login;
		
		return true;
		
	}
	return false;
}

//хеширование пароля (сохранение секретности пароля) пароля сохраняются только так

$hash_pwd = password_hash($pwd, PASSWORD_DEFAULT);

password_verify($pwd, $hash_pwd);
