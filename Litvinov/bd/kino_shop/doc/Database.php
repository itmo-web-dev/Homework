<?php
/**
 * Created by PhpStorm.
 * User: sid
 * Date: 01.06.2017
 * Time: 23:38
 */

class Database
{
    private $_link_identifier;

    public function __construct($server, $user, $password, $db_name)
    {
        $this->_link_identifier = mysql_connect($server, $user, $password);
        mysql_select_db($db_name, $this->_link_identifier);
        #TODO: проверить успешно или нет произошло подключение к базе данных
    }

        public function query($sql){
        $result = mysql_query($sql, $this->_link_identifier);
        while ($row = mysql_fetch_assoc($result)) {
            $arr[] = $row;
        }
        return $arr;
    }

    public function execute($sql){
        mysql_query($sql, $this->_link_identifier);
    }
}