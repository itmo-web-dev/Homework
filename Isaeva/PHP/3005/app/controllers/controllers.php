<?php 
function indexAction() {
	generateView('all_goods_view.php', 'template.php', [
			'goods_data' => getAllGoods(),
			'auth' => is_session(),
		]);
}

function descriptionAction() {
	$good = getGoodById(isset($_GET['id']) ? $_GET['id'] : '');

	generateView('good_info_view.php', 'template.php', [
			'current_good' => $good,
			'auth' => is_session()
		]);
}

function loginAction() {
	$login = (isset($_POST['login']) ? $_POST['login'] : '');
	$pwd = (isset($_POST['pwd']) ? $_POST['pwd'] : '');

	if (login($login, $pwd) || is_session()) {
		echo "ok";
		return;
	} else {
		generateView('auth_form.php', 'template.php');
	}
}

function accAction() {
	if ((login($login, $pwd) || is_session()) & ($_SESSION['name'] == 'user1')) {
		generateView('personal_acc.php', 'template.php');
	} else if ((login($login, $pwd) || is_session()) & ($_SESSION['name'] == 'admin')) {
		generateView('admin_acc.php', 'template.php');
	} else {
		echo "Пожалуйста, войдите на сайт под вашей учетной записью";
		}
	}


function addCommentAction() {
	$comment = (isset($_POST['comment']) ? $_POST['comment'] : '');
	$login = $_SESSION['name'];
	if (comment_add($comment, $login)) {
		echo 'add';
	}
}

function logoutAction() {
//	if (isset($_GET['exit'])) {
		unset($_SESSION['name']);
		session_unset();
		session_destroy();
//	}
}



function generateView($contentView, $template, $data=[]){
	if(is_array($data)) {
		extract($data);
	}
	require_once 'app/views/' . $template;
}
