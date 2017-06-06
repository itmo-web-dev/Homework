<?php
function getAllGoodsFromDB() {
    $fp = fopen(__DIR__ .'/goods_list.txt', 'r');
    if ($fp) {
        while (($data = fread($fp, 4096)) !== false) {
            return $data;
        }
        fclose($fp);
    }
    return false;
}

function getAllGoods() {
    $json_data = getAllGoodsFromDB();
    $data = json_decode($json_data, true);
    return $data;
}


function getGoodById($good_id) {
    $arr = getAllGoods();
    foreach ($arr as $value) {
        $one_god = $value;
        foreach ($one_god as $one_god_value) {
            if ($good_id == $one_god['id']) {
                return $one_god;
            }
        }
    }
    return false;
}