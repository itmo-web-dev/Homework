<?php

function getGoodsFromFile() {
	$fp = fopen('app/models/goods_data.txt', 'r');
	if($fp) {
		while (($data = fread($fp, 4096)) !== false) {
			return $data;
		}
		fclose($fp);
	}
	return false;
}


function getAllGoods() {
	$json_data = getGoodsFromFile();
	$data = json_decode($json_data, true);
	return $data;
}

function getGoodById($good_id) {
	$goods_arr = getAllGoods();
	foreach ($goods_arr as $key => $value) {
		if ($goods_arr[$key]['id'] == $good_id) {
			return $value;
		}
	}
	return false;
}

function addGood($goodID, $goodName, $description, $img) {
    $newGood = [
        'id' => $goodID,
        'title' => $goodName,
        'description' => $description,
        'preview' => $img];
    $goods_arr = getAllGoods();
    array_push($goods_arr, $newGood);
    $data = json_encode($goods_arr);
    $fp = fopen('app/models/goods_data.txt', 'w+');
    $test = fwrite($fp, $data);
    if ($test) {
        echo 'Данные в файл успешно занесены.';
    } else {
        echo 'Ошибка при записи в файл.';
    }
    fclose($fp);
//    var_dump($goods_arr);
}; 










// function getGoodById($good_id) {
// 	$allGoods = getAllGoods();
//     foreach ($allGoods as $value) {
//         $one_god = $value;
//         foreach ($one_god as $one_god_value) {
//             if ($good_id == $one_god['id']) {
//                 return $one_god;
//             }
//         }
//     }
//     return false;
// }

