<?php 
function indexAction() {
	// echo "INDEX";
//    var_dump($_COOKIE);
//    setcookie(
//        "name",
//        "value",
//        "time",
//        "path",
//        "domain",
//        "https",
//        "httponly"
//    );
//    logout();
//    session_start();
	generateView('all_goods_view.php', 'template.php', [
			'goods_data' => getAllGoods(),
            'auth' => is_session(),
		]);
}

function descriptionAction() {
	// echo "DESCRIPTION";
//    session_start();
//            logout();
	$good = getGoodById(isset($_GET['id']) ? $_GET['id'] : '');

	generateView('good_info_view.php', 'template.php', [
			'current_good' => $good,
            'auth' => is_session(),
		]);
}

function loginAction() {
//	echo "LOGIN";
//    session_start();
    $login = (isset($_POST['login']) ? $_POST['login'] : '');
    $pwd = (isset($_POST['pwd']) ? $_POST['pwd'] : '');
    
    if (login($login, $pwd) || is_session()) {
//        currentUser($login);
//        header("Location: /personalAcc");
//        echo "$login <br> $pwd";
        echo "ok";
        return;
    }
    
    generateView('auth_form.php', 'template.php');
}

function personalAccAction() {
	// echo "INDEX";
//    logout();
//    session_start();
     $login = (isset($_SESSION['name']) ? $_SESSION['name'] : '');
    if ($login == 'user1') {
	generateView('personal_account.php', 'template.php');
    } elseif ($login == 'admin') {
	generateView('root_account.php', 'template.php');
    }
//    echo $login;
}

function addCommentAction() {
    $comment = (isset($_POST['comment']) ? $_POST['comment'] : '');
    $login = $_SESSION['name'];
    if (comment_add($comment, $login)) { //запись в файл
        echo 'add';   
    }
}

function addGoodAction() {
    $goodID = (isset($_GET['goodID']) ? $_GET['goodID'] : '');
    $goodName = (isset($_GET['goodName']) ? $_GET['goodName'] : '');
    $description = (isset($_GET['description']) ? $_GET['description'] : '');
    $img = (isset($_GET['img']) ? $_GET['img'] : '');
    addGood($goodID, $goodName, $description, $img);
}

function logoutAction() {
        unset($_SESSION['name']);
        session_unset();
        session_destroy();
    header("Location: /");
}

function generateView($contentView, $template, $data=[]){
	if(is_array($data)) {
		extract($data);
	}
	require_once 'app/views/' . $template;
}