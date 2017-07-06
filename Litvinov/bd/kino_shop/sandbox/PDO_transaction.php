<?php
/**
 * Created by PhpStorm.
 * User: s_i_d
 * Date: 06.07.2017
 * Time: 14:08
 */

const SQL_CREATE_PERSON_TABLE = '
        CREATE TABLE IF NOT EXISTS au_person (
            id INT UNSIGNED NOT NULL AUTO_INCREMENT,
            firstname VARCHAR(50) NOT NULL,
            lastname VARCHAR(50) NOT NULL,
            patro VARCHAR(50) NOT NULL,
            PRIMARY KEY (id)
            )
';


const SQL_CREATE_ACCOUNT_TABLE = '
    CREATE TABLE IF NOT EXISTS au_account (
          id INT UNSIGNED NOT NULL AUTO_INCREMENT,
          username VARCHAR(50) NOT NULL,
          password VARCHAR(100) NOT NULL,
          au_person_id INT UNSIGNED NOT NULL,
          PRIMARY KEY (id),
          INDEX fk_au_account_au_person_idx (au_person_id ASC),
          CONSTRAINT fk_au_account_au_person
            FOREIGN KEY (au_person_id)
            REFERENCES au_person (id)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
          )
';

const SQL_INSERT_PERSON ='
    INSERT INTO au_person (firstname, lastname, patro)
    VALUES (:firstname, :lastname, :patro)
';

const SQL_INSERT_ACCOUNT ='
    INSERT INTO au_account (au_person_id, username, password)
    VALUES (:au_person_id, :username, :password)
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

    $pdo->exec(SQL_CREATE_PERSON_TABLE);
    $pdo->exec(SQL_CREATE_ACCOUNT_TABLE);
}catch (PDOException $e){
    exit($e->getMessage());
}

try{
    $pdo->beginTransaction();

    $stmt = $pdo->prepare(SQL_INSERT_PERSON);
    $stmt->execute([
        ":firstname"=>"Kirill",
        ":lastname"=> "Versetti",
        ":patro" => 'Alex'
    ]);
    // получить его идентификационный номер
    $id = $pdo->lastInsertId(); // индентификатор последней вставленной записи
    $stmt = $pdo->prepare(SQL_INSERT_ACCOUNT);
    $stmt-> execute([
        ':au_person_id'=>$id,
        ':username'=>'kuzima-spb',
        ':password' => '123456789'
    ]);
    $pdo->commit();
}catch(PDOException $e){
    echo $e->getMessage();
    $pdo->rollBack();
}