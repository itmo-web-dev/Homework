<?php
/**
 * Created by PhpStorm.
 * User: sid
 * Date: 31.05.2017
 * Time: 23:14
 */
class ModelTodo
{
    private  $_db;

    public function __construct($db)
    {
        $this->_db = $db;
    }

    public function get_all()
    {
        $cmd = 'SELECT * FROM tasks ORDER by  status';
        return $this->_db->query($cmd);
    }

    public function add($text)
    {
        if ($text == '') {
            return;
        }

        $text = mysql_real_escape_string($text);
        # только текст 2 остальных столбца автоматически
        $sql = "INSERT INTO tasks (text) VALUES ('$text')";
        $this->_db->execute($sql);
    }

    public function finish($id)
    {
        $id = mysql_real_escape_string($id);
        $sql = "UPDATE tasks SET status='1' WHERE id_task='$id'";
        $this->_db->execute($sql);
    }
}