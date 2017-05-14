<?php
include('template.php');
include_once('conf.php');
if (!defined("TITLE_HEADER")){
    define("TITLE_HEADER", "Домашняя работа 01", true);
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?php echo TITLE ?></title>
</head>
<body>
  <h1> <?php echo TITLE_HEADER ?> </h1>
  <?php
      $var01 = 10;
      $var02 = 5;
      $sum = $var01 + $var02;
      $mult = $var01 * $var02;
      $divide = $var01 / $var02;
      $minus = $var01 - $var02;
      $res = (string)$sum."<br>".(string)$minus."<br>".(string)$divide."<br>".(string)$mult."<br>";
      # echo $res;
      $tpl->get_tpl("template.html");
      $tpl->set_value("TASK_TITLE", TASK1);
      $tpl->set_value("RESULT", $res);
      $tpl->tpl_parse();
      echo $tpl->html;

      $var01 = 10;
      $var02 = 5;
      $res = $var01**2+ $var02**2;
      $out = "input: $var01, $var02 результат: ".(string)$res;
      $tpl->get_tpl("template.html");
      $tpl->set_value("TASK_TITLE", TASK2);
      $tpl->set_value("RESULT", $out);
      $tpl->tpl_parse();
      echo $tpl->html;

      $S_meter = 100.0;
      $t_cek = 50.0;
      $v1 = $S_meter/$t_cek;
      $v2 = $S_meter*3600/$t_cek;
      $res = "скорость: <br>".(string)$v1." m/c"."<br>".(string)$v2." км/ч";
      $tpl->get_tpl("template.html");
      $tpl->set_value("TASK_TITLE", TASK3);
      $tpl->set_value("RESULT", $res);
      $tpl->tpl_parse();
      echo $tpl->html;

      $res = '';
      $tpl->get_tpl("template.html");
      $tpl->set_value("TASK_TITLE", TASK4);
      $tpl->set_value("RESULT", "Константа: ".TITLE_HEADER);
      $tpl->tpl_parse();
      echo $tpl->html;



  ?>
</body>
</html>

