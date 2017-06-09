<?php
echo "Вы вошли в личный кабинет, " . $_SESSION["name"] . ", но вы не администратор";
//var_dump($_SESSION);