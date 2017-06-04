<?php
/**
 * Created by PhpStorm.
 * User: sid
 * Date: 02.06.2017
 * Time: 14:40
 * в реальном примере все должно бытьв базе данных
 */

class ModelText
{
    public function get()
    {
        return file_get_contents('data/text.txt');
    }

    public function set($text){
        file_put_contents('data/text.txt', $text);
    }
}