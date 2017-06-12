<?php
namespace Course\Shop\Controllers;

class GoodsController
{
    public function indexAction()
    {
        generateView('all_goods_view.php', 'template.php', [
            'app_title' => 'Главная',
            'goods_data' => getAllGoods(),
        ]);
    }

    public function descriptionAction($id)
    {
        $comments = getAllComments();
        $good = getGoodById(isset($id) ? $id : '');
        generateView('good_info_view.php', 'template.php', [
            'app_title' => $good['title'],
            'current_good' => $good,
            'comments' => $comments,
            'auth' => false  //is_session(),
        ]);
    }

}


function generateView($contentView, $template, $data=[]) {
    if ($data) {
        extract($data);
    }

    require_once '../app/views/' . $template;
}

//models - должны быть вынесены в отдельные классы

function getGoodsFromFile() {
    $fp = fopen('../app/goods_list.txt', 'r');
    if($fp) {
        while (($data = fread($fp, 4096)) !== false) {
            return $data;
        }
        fclose($fp);
    }
    return false;
}


function getAllGoods() {
    $json_data = getGoodsFromFile();
    $json_data .= ']';
    $data = json_decode($json_data, true);
    return $data;
}

function getGoodById($good_id) {
    $goods_arr = getAllGoods();
    foreach ($goods_arr as $key => $value) {
        if ($goods_arr[$key]['id'] == $good_id) {
            return $value;
        }
    }
    return false;
}




function getCommentsFromFile() {
    $fp = fopen('../app/comments_list.txt', 'r');
    if($fp) {
        while (($data = fread($fp, 4096)) !== false) {
            return $data;
        }
        fclose($fp);
    }
    return false;
}


function getAllComments() {
    $json_data = getCommentsFromFile();
    $json_data .= ']';
    $data = json_decode($json_data, true);
    return $data;
}

function commentAdded($comment){   // TODO комментарии должны быть привязаны к товару!
    if (in_file($comment)) {
        return true;
    }
    return false;
}

function in_file($comment){
    // TODO перед записью в файл обязательна валидация полученного комментария - $comment!!!
    $filename = '../app/comments_list.txt';
    $date = date("F j, Y, g:i a");
    $username = $_SESSION['username'];
    $user = getUserByLogin($username);
    $avatar = $user['preview'];
    $comment_for_json = [
        ["id" => 11,
            "username" => $username,
            "comment" => $comment,
            "date" => $date,
            "avatar" => $avatar
        ]
    ];
    $comment_for_add = json_encode($comment_for_json);
    $comment_for_add = trim($comment_for_add, ']\[');
    $comment_for_add = "," . $comment_for_add;
    $ok = file_put_contents($filename, $comment_for_add, FILE_APPEND);
    return $ok;
}