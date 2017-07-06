<?php
/**
 * Created by PhpStorm.
 * User: s_i_d
 * Date: 06.07.2017
 * Time: 11:24
 */

$server = 'localhost';
$username = "sid_db_12345";
$password = "password";
$dbname = "kinoshop";


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

print_r( PDO::getAvailableDrivers() );
echo "<br/>";
echo "<br/>";

try{
    $pdo = new PDO('mysql:host=localhost;dbname=kinoshop', 'sid_db_12345', 'password');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    /*
      $result = $pdo->exec(SQL_CREATE_MENU_TABLE);
      var_dump($result);
      for ($i=1; $i < 4; $i++){
            $sql = "INSERT INTO menu (title, url) VALUES('Post #$i', '/post/$i') ";
            $result = $pdo->exec($sql);
            var_dump($result);
      }
    */
    $result = $pdo->query(SQL_GET_MENU, PDO::FETCH_ASSOC);
    var_dump($result);
    var_dump($result->fetchAll());

    /*
    foreach($result as $row){
        var_dump($row);
    }
    */
}catch (PDOException $e){
    exit($e->getMessage());
}
