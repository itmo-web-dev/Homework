<?php
/**
 * Created by PhpStorm.
 * User: sid
 * Date: 02.06.2017
 * Time: 9:12
 */
# для скрытия сообщения при включенном date (прописываем в начале файла)
date_default_timezone_set("Europe/Moscow");

class Log
{
    public function __construct()
    {}

    public function add($msg)
    {
        #TODO: избавиться от warning о timezone
        $ip = $_SERVER['REMOTE_ADDR'];
        $time = date("Y-m-d H-i-s");
        $this->save($msg, $ip, $time);
    }

    protected function save($msg, $ip, $time)
    {

    }
}

class FsLog extends Log
/** класс записывает log в простой файл */
{
    private $_filename;
    public function __construct($fname){
        $this->_filename = $fname;
    }

    protected function save($msg, $ip, $time){
        $f = fopen($this->_filename, 'a+');
        fwrite($f, "$time | $ip | $msg \n");
        fclose($f);

        #вызов метода из базового класса
        parent::Save($msg, $ip, $time);
        }
}

class DbLog extends Log
    /** класс записывает log в простой файл
     ??? в phpAdmin русский текст отображается обракадаброй
     */
{
    private $_db;

    public function __construct($db){
        $this->_db = $db;
    }

    protected function save($msg, $ip, $time){
        $msg = mysql_real_escape_string($msg);
        $sql = "INSERT
                INTO log (time, ip, msg)
                VALUES ('$time', '$ip', '$msg')";
        $this->_db->execute($sql);
        parent::save($msg, $ip, $time);
    }


}
