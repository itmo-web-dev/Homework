<?php
	# task-1
	$a = 2;
	$b = 5;
	$sum = $a + $b;
	$del = $b / $a;
	echo '////sum = '.$sum.' ////del = '.$del;

	# task-2
	$x = 3;
	$y = 4;
	$sqrt_sum = $x**2 + $y**2;
	echo '////sqrt_sum = '.$sqrt_sum;

	# task-3
	$path = 10;
	$time = 0.5;
	$speed = $path / $time;
	echo '////speed = '.$speed.' kmph ';
	echo '////speed = '.($speed*1000/3600).' kmps ';

	# task-4
	define("CON", "354");
	// echo CON;
	// $try_to_change = CON - 14;
	echo '////constant = '.CON;