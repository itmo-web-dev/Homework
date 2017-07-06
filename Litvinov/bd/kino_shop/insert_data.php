<?php
/**
 * Created by PhpStorm.
 * User: s_i_d
 * Date: 06.07.2017
 * Time: 17:47
 */

function create_tables($pdo){
    $pdo->exec(SQL_CREATE_FILM_TABLE);
    $pdo->exec(SQL_CREATE_ORDER_CHECK_TABLE);
    $pdo->exec(SQL_CREATE_CARRIER_TABLE);
    $pdo->exec(SQL_CREATE_FILM_CARIER_TABLE);
    $pdo->exec(SQL_CREATE_GANRE_TABLE);

    $pdo->exec(SQL_CREATE_FILM_GANRE_TABLE);

    $pdo->exec(SQL_CREATE_DIRECTOR_TABLE);
    $pdo->exec(SQL_CREATE_FILM_DIRECTOR_TABLE);
    $pdo->exec(SQL_CREATE_ACTOR_TABLE);
    $pdo->exec(SQL_CREATE_FILM_ACTOR_TABLE);
}

function insert_data_carrire_table($pdo){
    $stmt = $pdo->prepare(SQL_INSERT_CARRIER_TABLE);
    $props = array('CD', 'DVD', 'BLUE-RAY');
    foreach ($props as $p){
        $stmt->bindValue(':carrier_type', $p);
        $res = $stmt->execute();
    }
}

function print_all_row_carrier_table($pdo){
    $result = $pdo->query(SQL_SELECT_ALL_CARRIRE_TABLE, PDO::FETCH_ASSOC);
    var_dump($result->fetchAll());
}

