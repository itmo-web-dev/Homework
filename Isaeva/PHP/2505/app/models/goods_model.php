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
	foreach($goods_arr as $key => $value) {
		if ($goods_arr[$key]['id']== $good_id) {
			return $value;
		}
	}
	return false;
}