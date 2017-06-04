<?php
function indexAction() {
    session_start();
    logout ();

    generateView('all_goods.php', 'template.php', [
        'data' => getAllGoods(),
        'auth' => is_session(),
    ]);
}

function descriptionAction() {
    session_start();
    logout ();
    $data = getGoodById(isset($_GET['id']) ? $_GET['id'] : '');

    if (!$data) {
        header($_SERVER["SERVER_PROTOCOL"] . ' 404 Not Found');
        exit('404 Not Found');
    }

    generateView('one_good.php', 'template.php', [
        'data' => $data,
        'auth' => is_session(),
    ]);
}


function loginAction() {
    session_start();
    logout ();
    $login = (isset($_POST['login'] ) ? $_POST['login'] : '');
    $pwd = (isset($_POST['pwd']) ? $_POST['pwd'] : '');
    if ((login($login, $pwd)) || is_session()) {
        header("Location: /");
    }

    generateView('auth_form.php', 'template.php');
}

function generateView($contentView, $templateView, $data = []) {

    if(is_array($data)) {
        extract($data);
    }
    require_once 'view/' . $templateView;

}