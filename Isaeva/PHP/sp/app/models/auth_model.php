<?php

function login($login, $pwd) {
	if (($login == 'user1' && $pwd == '123')||($login == 'admin' && $pwd == 'admin')) {
		$_SESSION['name'] = $login;
		return true;
	}
	return false;
}

function is_session() {
	if(isset($_SESSION['name'])) {
		return true;
	} else {
		return false;
	}
}



// $hash_pwd = password_hash($pwd,  PASSWORD_DEFAULT);
// password_verify($pwd, $hash_pwd);

// hash();