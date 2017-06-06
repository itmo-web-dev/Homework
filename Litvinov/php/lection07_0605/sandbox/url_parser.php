<?php
/**
 * Created by PhpStorm.
 * User: sid
 * Date: 06.06.2017
 * Time: 19:21
 */

$url = 'http://www.mydomain.com/abc/';

print_r(parse_url($url));

echo parse_url($url, PHP_URL_PATH);


cmd = '?id=7&param=90';