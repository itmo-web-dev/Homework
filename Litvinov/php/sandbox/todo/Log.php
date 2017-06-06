<?php
/**
 * Created by PhpStorm.
 * User: sid
 * Date: 02.06.2017
 * Time: 9:12
 */
# ��� ������� ��������� ��� ���������� date (����������� � ������ �����)
date_default_timezone_set("Europe/Moscow");

class Log
{
    public function __construct()
    {}

    public function add($msg)
    {
        #TODO: ���������� �� warning � timezone
        $ip = $_SERVER['REMOTE_ADDR'];
        $time = date("Y-m-d H-i-s");
        $this->save($msg, $ip, $time);
    }

    protected function save($msg, $ip, $time)
    {

    }
}

class FsLog extends Log
/** ����� ���������� log � ������� ���� */
{
    private $_filename;
    public function __construct($fname){
        $this->_filename = $fname;
    }

    protected function save($msg, $ip, $time){
        $f = fopen($this->_filename, 'a+');
        fwrite($f, "$time | $ip | $msg \n");
        fclose($f);

        #����� ������ �� �������� ������
        parent::Save($msg, $ip, $time);
        }
}

class DbLog extends Log
    /** ����� ���������� log � ������� ����
     ??? � phpAdmin ������� ����� ������������ ������������
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
