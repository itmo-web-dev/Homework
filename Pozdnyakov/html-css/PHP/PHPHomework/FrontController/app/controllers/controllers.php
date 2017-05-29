<?php 
function indexAction() {
	// echo "INDEX";
    logout();
//    session_start();
	generateView('all_goods_view.php', 'template.php', [
			'goods_data' => getAllGoods(),
            'auth' => is_session(),
		]);
}

function descriptionAction() {
	// echo "DESCRIPTION";
    session_start();
            logout();
	$good = getGoodById(isset($_GET['id']) ? $_GET['id'] : '');

	generateView('good_info_view.php', 'template.php', [
			'current_good' => $good,
            'auth' => is_session(),
		]);
}

function loginAction() {
//	echo "LOGIN";
    session_start();
    $login = (isset($_POST['login']) ? $_POST['login'] : '');
    $pwd = (isset($_POST['pwd']) ? $_POST['pwd'] : '');
    
    if (login($login, $pwd) || is_session()) {
        currentUser($login);
        header("Location: /personalAcc");
//        echo "$login <br> $pwd";
    }
    
    generateView('auth_form.php', 'template.php');
}

function personalAccAction() {
	// echo "INDEX";
//    logout();
    session_start();
//     $login = (isset($_POST['login']) ? $_POST['login'] : 'xz');
	generateView('personal_account.php', 'template.php');
}


function generateView($contentView, $template, $data=[]){
	if(is_array($data)) {
		extract($data);
	}
	require_once 'app/views/' . $template;
}