<?php
/**
 * Created by PhpStorm.
 * User: s_i_d
 * Date: 06.07.2017
 * Time: 2:28
 */

function create_film_table($link){
    // sql to create table
    $sql = "CREATE TABLE film (
                id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(30) NOT NULL,
                director VARCHAR(30) NOT NULL,
                artists VARCHAR(50),
                ganre  VARCHAR(50),
                about TEXT
                )";

    if (mysqli_query($link, $sql)) {
        echo "Table MyGuests created successfully";
    } else {
        echo "Error creating table: " . mysqli_error($link);
    }
}

function insert_film_data($link, $title, $director, $artists, $ganre, $about){
    $sql = "INSERT INTO film (title, director, artists, ganre, about)
              VALUES ($title, $director, $artists, $ganre, $about )";

    if (mysqli_query($link, $sql)) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($link);
    }
}

function source_film_sql($link){
    echo __FILE__;echo '\n';
    $filename = "d:/!!!itmo/home_task/Litvinov/bd/kino_shop/sql/kinoshop_table_data_model.sql";
    echo $filename;echo '\n';

    $templine = '';
    $lines = file($filename);
    foreach ($lines as $line)
        {
            // Skip it if it's a comment
            if (substr($line, 0, 2) == '--' || $line == '')
                continue;
            $templine .= $line;
            if (substr(trim($line), -1, 1) == ';')
            {
                echo $templine;
                echo '\n';
                 mysqli_query($link, $templine) or print('Error performing query \'<strong>' . $templine . '\': ' . mysqli_error($link) . '<br /><br />');
                 $templine = '';
            }
        }
    echo "Tables imported successfully";
    /*
    if (mysqli_query($link, $sql)) {
        echo "Table MyGuests created successfully";
    } else {
        echo "Error creating table: " . mysqli_error($link);
    }
    */
}
