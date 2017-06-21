<?php
namespace Course\Shop\Controllers;   // Course\Shop -это из composer.json, Controllers - имя папки с контроллерами (если тут с большой буквы, значит и папка так должна назыаться)

use Course\Shop\models\GoodsModel;
use Sky\Frame\Controller;



class GoodsController extends Controller   // за одно в базовый Controller (он во frame) вынесла generateView, она стала generateResponse
{
	
	private $goods_model;
	
	public function __construct()
	{
		$this->goods_model = new GoodsModel();

	}
	
	
	
    public function indexAction()
    { 
//        return $this->generateResponse('all_goods_view.php', 'template.php', [
//            'app_title' => 'Главная',
//            'goods_data' => $this->goods_model->getAllGoods(),
//        ]);
		
		 return $this->generateResponse('all_goods_view.twig', [
            'app_title' => 'Главная',
            'goods_data' => $this->goods_model->getAllGoods(),
        ]);
		
		
//        generateView('all_goods_view.php', 'template.php', [
//            'app_title' => 'Главная',
//            'goods_data' => getAllGoods(),
//        ]);
    }
	
	

    public function descriptionAction($id)
    {
		
		echo $id;
//        $comments = getAllComments();  
        $good = $this ->goods_model->getGoodById(isset($id) ? $id : '');
        return $this->generateResponse('good_info_view.php',  [
            'app_title' => $good['title'],
            'current_good' => $good,
//            'comments' => $comments,
            'auth' => false  //is_session(),
            ]);
//        generateView('good_info_view.php', 'template.php', [
//            'app_title' => $good['title'],
//            'current_good' => $good,
//            'comments' => $comments,
//            'auth' => false  //is_session(),
//        ]);
    }
	
	public function addGoodAction() {
		echo "dddd";
//		$good_data должна приходить их формы добавления товара
	$good_data = [
		'title' => 'Apple',
		'description' => 'Производство: Псков`',
		'preview' => 'apple.jpg',
		'price' => '5000',
		'count' => '5',
		'article' => '12345670'
	];
		if($this->goods_model->addGood($good_data)) {
			return $this->generateAjaxResponse('good add');
		}
		return $this->generateAjaxResponse('good add error');
	}

}
//
//
//function generateView($contentView, $template, $data=[]) {
//    if ($data) {
//        extract($data);
//    }
//
//    require_once 'app/views/' . $template;
//}

//models - должны быть вынесены в отдельные классы

//function getGoodsFromFile() {
//    $fp = fopen('app/models/goods_data.txt', 'r');
//    if($fp) {
//        while (($data = fread($fp, 4096)) !== false) {
//
//            return $data;
//        }
//        fclose($fp);
//    }
//    return false;
//}
//
//
//function getAllGoods() {
//    $json_data = getGoodsFromFile();
//    $data = json_decode($json_data, true);
//    return $data;
//}
//
//function getGoodById($good_id) {
//    $goods_arr = getAllGoods();
//    foreach ($goods_arr as $key => $value) {
//        if ($goods_arr[$key]['id'] == $good_id) {
//            return $value;
//        }
//    }
//    return false;
//}
//
//

// пока нет комментариев и фунцкции не нужны))

//
//
//function getCommentsFromFile() {
//    $fp = fopen('app/comments_list.txt', 'r');
//    if($fp) {
//        while (($data = fread($fp, 4096)) !== false) {
//            return $data;
//        }
//        fclose($fp);
//    }
//    return false;
//}
//
//
//function getAllComments() {
//    $json_data = getCommentsFromFile();
//    $json_data .= ']';
//    $data = json_decode($json_data, true);
//    return $data;
//}
//
//function commentAdded($comment){   // TODO комментарии должны быть привязаны к товару!
//    if (in_file($comment)) {
//        return true;
//    }
//    return false;
//}
//
//function in_file($comment){
//    // TODO перед записью в файл обязательна валидация полученного комментария - $comment!!!
//    $filename = 'app/comments_list.txt';
//    $date = date("F j, Y, g:i a");
//    $username = $_SESSION['username'];
//    $user = getUserByLogin($username);
//    $avatar = $user['preview'];
//    $comment_for_json = [
//        ["id" => 11,
//            "username" => $username,
//            "comment" => $comment,
//            "date" => $date,
//            "avatar" => $avatar
//        ]
//    ];
//    $comment_for_add = json_encode($comment_for_json);
//    $comment_for_add = trim($comment_for_add, ']\[');
//    $comment_for_add = "," . $comment_for_add;
//    $ok = file_put_contents($filename, $comment_for_add, FILE_APPEND);
//    return $ok;
//}