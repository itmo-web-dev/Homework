<?php

function login($login, $pwd) {
	if ($login == 'user1' && $pwd == '123') {
		$_SESSION['name'] = $login;
		return true;
	} elseif ($login == 'admin' && $pwd == 'admin') {
		$_SESSION['name'] = $login;
		return true;
	}
	return false;
}

function is_session(){
    if (isset($_SESSION['name'])) {
        return true;
    } else {
        return false;
    }
      
}

function logout() {
    if (isset($_GET['exit'])) {
        unset($_SESSION['name']);
        session_unset();
        session_destroy();
    }
}

// $hash_pwd = password_hash($pwd,  PASSWORD_DEFAULT);
// password_verify($pwd, $hash_pwd);

// hash();