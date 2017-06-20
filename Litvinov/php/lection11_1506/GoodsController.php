<?php
/**
 * Created by PhpStorm.
 * User: sid
 * Date: 15.06.2017
 * Time: 19:30
 */

namespace Cource\Shop\Controller;

use Cource\Shop\Models\GoodsMode;
use Sky\Frame\Controller;


class GoodsController extends Contriller
{
    private $goods_model;

    private function __construct(){
        $this->goods_model = new GoodsModel();
    }

    public functon indexAction(){
        return $this->generateResponse(
                content
)
    }
}