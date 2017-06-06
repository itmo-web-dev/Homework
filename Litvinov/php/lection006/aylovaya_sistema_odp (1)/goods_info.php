<?php

$data = [
	[
	'id' => 1,
	'title' => 'Title 1',
	'description' => 'Long description 1',
	'preview' => 'doog.jpg'
	],
	[
	'id' => 2,
	'title' => 'Title 2',
	'description' => 'Long description 2',
	'preview' => 'doog.jpg'
	],
	[
	'id' => 3,
	'title' => 'Title 3',
	'description' => 'Long description 3',
	'preview' => 'doog.jpg'
	]
];

function getGoods() {
	$fp = fopen('db.txt', 'r');
	if($fp) {
		while (($data = fread($fp, 4096)) !== false) {
			//echo $data;
			return $data;
		}
		fclose($fp);
	}
	return false;
}

$json_data = getGoods();
var_dump($json_data);

$data = json_decode($json_data, true);
var_dump($data);

// $qw = json_encode($data);
// echo $qw;