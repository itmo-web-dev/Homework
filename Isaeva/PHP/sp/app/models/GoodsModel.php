<?php


namespace Course\Shop\models;
use Sky\Frame\DB;


class GoodsModel
{
	private $db;
	private $tablename = 'goods';
	
	public function __construct()
	{
		$this->db = DB::getInstance();
//		var_dump($this->db);

		
	}
	
	public function getAllGoods(){
		$sql = "SELECT * FROM $this->tablename";
		$data = $this->db->selectAllFromTable("SELECT * FROM goods");
//		var_dump($data);
		return $data;
		
	}
	
	public function getGoodById($good_id) {
		$sql = "SELECT * FROM $this->tablename WHERE id = :id";
		$params = [
			'id' => $goods_id
		];
		$data = $this->db->selectByParams($sql, $params);
		return $data;
	}
	
	public function addGood($good_data){
	$sql = "SELECT count FROM $this->tablename WHERE article =: article";
	$param = [
		'article'=>$good_data['article']
	];
	$result = $this->db->selectByParams($sql, $param); //false или ['count' => ]
		if ($result) { //если товар существует, увеличиваем количество
		$update_sql = "UPDATE $this->tablename SET count WHERE article =:article;";
		$update_param = [
			'count' => (int)$result['count'] + (int)$good_data['count'],
			'article' => $good_data['article']
		];
			return $this->db->insertIntoTable($update_sql, $update_param);
		}
		
		$new_sql = "INSERT INTO $this->tablename (title, description, preview, price, COUNT, article) VALUES (:title, :description, :preview, :price, :count, :article)";
		$good_data['count'] = (int)$good_data['count'];
		return $this->db->insertIntoTable($new_sql, $good_data);
		
		
	}
	
}