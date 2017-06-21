<?php
/**
 * Created by PhpStorm.
 * User: sid
 * Date: 15.06.2017
 * Time: 19:40
 */

private $tablename = 'goods';

public function __construct():
{
     $this->db = DB::getInstance(); # ���������� ������ ����
}

public function getAllGoods(){
    $sql = 'SELECT * FROM $this->tablename';
    $data = $this->db->selectAllFromTable($sql);
    return $data;
}

public function getGoodById($good_id){
    $sql = "SELECT * FROM $this->tablename WHERE id=$id";
    $param = {
        'id' => $good_id
    };
    $data = $this->db->selectByParam($sql, $param);
    return $data;
}

public function addGood(){
    $sql = 'SELECT count FROM $this->tablenmae WHERE article = :article*';
    # $sql = 'SELECT * FROM $this->tablename WHERE article = :article';
    $param = {
        'article' => $goog_data['article']
    };

    $result = $this->db->selectByParametr($sql, $param);
    if ($result){
        $updeate_sql = "UPDATE $this->tablename SET count = :count WHERE article = :article";
        $update_param = {
            'count' => (int);
        }
        # ajax �������� ������ - ��������� ��� �� �������� - �������� ��� ���
        # ����� �������� ���������
        return $this->db->insertToDate #������ ���� True ���� False
    }

    $new_sql = "INSERT INTO $this->tablename (title, description, preview, price, count, article)
               VALUES (:title, :description, :preview, :price, :count, :article );"
               # ����� �������� ��� ���������� � �������

    return $this->db->insertIntoTable


}