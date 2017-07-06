<?php
/**
 * Created by PhpStorm.
 * User: s_i_d
 * Date: 06.07.2017
 * Time: 12:38
 */

const SQL_CREATE_MENU_TABLE = '
        CREATE TABLE IF NOT EXISTS menu (
        id INT UNSIGNED NOT NULL AUTO_INCREMENT,
        parent_id INT UNSIGNED NULL,
        title VARCHAR(255) NOT NULL,
        url VARCHAR(500) NOT NULL,
          PRIMARY KEY (id)
        )
';

const SQL_GET_MENU = '
    SELECT id, parent_id, title, url FROM menu
';

const SQL_INSERT_MENU_ITEM = '
  INSERT INTO menu (parent_id, title, url) VALUES (?,?,?)
';

const SQL_UPDATE_MENU_ITEM_BY_ID = '
  UPDATE menu SET
      parent_id = :parent_id,
      title = :title,
      url = :url
  WHERE
      id = :id
';

const SQL_GET_MENU_ITEM = '
    SELECT id, parent_id, title, url FROM menu
';


$server = 'localhost';
$username = "sid_db_12345";
$password = "password";
$dbname = "kinoshop";

print_r( PDO::getAvailableDrivers() );
echo "<br/>";
echo "<br/>";

try{
    $pdo = new PDO('mysql:host=localhost;dbname=kinoshop', 'sid_db_12345', 'password');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    /*    $stmt = $pdo->prepare(SQL_INSERT_MENU_ITEM);
        var_dump($stmt);
        $res = $stmt->execute([NULL, "Post #1", '/post/1']);
        var_dump($res);
    */
    /*    $stmt = $pdo->prepare(SQL_UPDATE_MENU_ITEM_BY_ID);
        $res = $stmt->execute([
                            ':parent_id'=> NULL,
                            ':title'=> 'Post1!!!',
                            ':url' => '/post/1',
                            ':id' => 4,
                        ]);
        var_dump($res);
    */
    /*
        $stmt = $pdo->prepare(SQL_GET_MENU_ITEM);
        $res = $stmt->execute([':id' => 1]);
        var_dump($res);

        $item = $stmt->fetch(PDO::FETCH_OBJ);
        if($item){
            var_dump($item);
        }
    */
    $stmt = $pdo->prepare(SQL_UPDATE_MENU_ITEM_BY_ID);
    $stmt->bindValue(':parent_id', null);
    $stmt->bindValue(':title', 'Post 1++ ');
    $stmt->bindValue(':url', '/post/1');
    $stmt->bindValue(':id', 1, PDO::PARAM_INT);

    $res = $stmt->execute();
    var_dump($res);

    /*    $stmt = $pdo->prepare(SQL_INSERT_MENU_ITEM);
        $stmt->bindParam(1, $paramId);
        $stmt->bindParam(2, $title);
        $stmt->bindParam(3, $url);

        for($i=6; $i<10; $i++){
            $parentId = null;
            $title = "Post $i";
            $url = "/post/$i";
            $res = $stmt->execute();
            var_dump($res);
        }
    */
}catch (PDOException $e){
    exit($e->getMessage());
}