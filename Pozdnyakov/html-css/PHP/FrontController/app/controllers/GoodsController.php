<?php

namespace Course\Shop\controllers;

use Sky\Frame\Controller;
use Course\Shop\models\GoodsModel;

//require_once 'C:\OpenServer\domains\FrontController\app\models\GoodsModel.php';

class GoodsController extends Controller {
    private $goods_model;
    
    public function __construct() {
        $this->goods_model = new GoodsModel();
    }
    
    public function indexAction() {
//        echo "fbvfdg";
//        $v = $this->goods_model->getAllGoods();
//        var_dump($v);
         return $this->generateResponse('all_goods_view.php',            'template.php', [
			'goods_data' => $this->goods_model->getAllGoods(),
            'auth' => false,
		]);
    }
    
    public function descriptionAction($id) {
//            $comments = getAllComments();
        	$good = $this->goods_model->getGoodById(isset($id) ? $id : '');

        return $this->generateResponse('good_info_view.php', 'template.php', [
            'app_title' => $good['title'],
            'current_good' => $good,
            'auth' => false//is_session(),
		]);
    }

    public function addGoodAction() {
        //$good_data приходит из формы
        $good_data = [
            'title' => 'Banjo',
            'description' => 'super description Banjo',
            'preview' => 'banjo.jpg',
            'price' => 200,
            'count' => 20,
            'article' => 'uu213'
        ];
        if ($this->goods_model->addGood($good_data)){
            return $this->generateAjaxResponse('good add');
        }
        return $this->generateAjaxResponse('good add error');
    }
}

//function generateView($contentView, $template, $data=[]){
//	if(is_array($data)) {
//		extract($data);
//	}	
//    require_once 'app/views/' . $template;
//}