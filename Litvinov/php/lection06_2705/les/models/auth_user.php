<?php
function login($login, $pwd) {
    if ($login == 'user1' && $pwd == '123') {
        $_SESSION['name'] = $login;
        return true;
    }
    return false;
}

function is_session() {
    if (isset($_SESSION['name'])) {
        return true;
    } else {
        return false;
    }
}

function logout () {
    if (isset($_GET['logout'])) {
        session_unset();
        session_destroy();
    }
}

