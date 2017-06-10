<?php
/**
 * Created by PhpStorm.
 * User: sid
 * Date: 10.06.2017
 * Time: 13:13
 */

namespace Cource\Shop\Controllers;

class GoodsController{
    public function indexAction(){
        echo "indexAction";
    }

   public function descriptionAction($id){
    echo "descriptionAction" . $id;
    }
}

function generateView($contentView,$template, $data=[]){

}
