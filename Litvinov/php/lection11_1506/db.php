<?php
/**
 * Created by PhpStorm.
 * User: sid
 * Date: 15.06.2017
 * Time: 21:40
 */


private function dbConnect(){
    $connection = new PDO ......
}

publuc function selectAllFromTable($sql_string):
{
    $conn = $this->dbConnect();
    $statement = $conn->query($sql_string);
    $data = $statement->fetchAll(fetch_style::FETCH_ASSOC);
    return $data;
}

public function selectByFrame($sql_string, array $params){
    $conn = $this->dbConnect();
    $statement = $conn->prepare($sql_string);
    $statement->execute($param);
    $data = $statement->fetch(fetch_style PDO::FETCH_ASSOC);
    return $data; ['id=>1, 'login'=>'qwe, ...]

}