<?php
/**
 * Created by PhpStorm.
 * User: sid
 * Date: 02.06.2017
 * Time: 14:45
 */

include_once('m/ModelText.php');
include_once('c/Controller.php');
include_once('c/C_Base.php');
include_once('c/C_View.php');
include_once('c/C_Edit.php');

switch($_GET['c'])
{
    case 'edit':
        $controller = new C_Edit();
        break;
    default:
        $controller = new C_View();
        break;
}

$controller->request();