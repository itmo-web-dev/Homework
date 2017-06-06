<?php
/**
 * Created by PhpStorm.
 * User: sid
 * Date: 02.06.2017
 * Time: 8:57
 */


class Controller
{
    private $_db;
    private $_log;

    public function __construct($db, $log)
    {
        $this->_db = $db;
        $this->_log = $log;
    }

    public function request()
    {
        $model_todo = new ModelTodo($this->_db);

        // обработка POST
        if (isset($_POST['task'])) {
            $task = trim($_POST['task']);
            $model_todo->add($task);
            # чтобы не было запроса на повторение запроса -> всегда стоит сделать redirect
            header('Location: index.php');
            $this->_log->add('новая задача');
            exit();
        } else if (isset($_POST['id_task'])) {
            $id_task = $_POST['id_task'];
            $model_todo->finish($id_task);
            header('Location: index.php');
            $this->_log->add('задача выполнен');
            exit();
        }

        # получить список задач
        $list = $model_todo->get_all();

        include("view.php");
        $this->_log->add('список показан');
    }
}
?>
