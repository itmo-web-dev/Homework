<?php

namespace Course\Shop\models;
use Sky\Frame\DB;

class GoodsModel{
    private $db;
    private $tablename = 'goods';
    
    public function __construct() {
        $this->db = DB::getinstance();
    }
    
    public function getAllGoods() {
        $sql = "SELECT * FROM $this->tablename;";
        $data = $this->db->selectAllFromTable($sql);
        //$data = '123124dsdf';
        return $data;
    }
    
    public function getGoodById($good_id) {
        $sql = "SELECT * FROM $this->tablename where id=:id;";
        $params = [
            'id' => $good_id
        ];
        $data = $this->db->selectByParams($sql, $params);
        return $data;
    }
    
    public function addGood(array $goods_data) {
        $sql = "SELECT count FROM $this->tablename WHERE article = :article;";
        $params = [
            'article' => $goods_data['article']
        ];
        $result = $this->db->selectByParams($sql, $params);
        //если товар существует добавляем количество
        if ($result) {
            $update_sql = "UPDATE $this->tablename SET count = :count where article = :article;";
            $update_param = [
                'count' => (int)$result['count'] + (int)$goods_data['count'],
                'article' => $goods_data['article']
            ];
            return $this->db->insertIntoTable($update_sql, $update_param);
        }  
        //Если не существует, добавить его в базу
        $new_sql = "INSERT INTO $this->tablename (title, description, preview, price, count, article) values (:title, :description, :preview, :price, :count, :article);";
        
        $good_data['count'] = (int)$goods_data['count'];
        return $this->db->insertIntoTable($new_sql, $good_data);
    }
}