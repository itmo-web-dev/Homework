<?php
/**
 * Created by PhpStorm.
 * User: sid
 * Date: 02.06.2017
 * Time: 15:02
 */
class Controller
{
    public function __construct(){ }

    public function request()
    {
        $this->on_input();
        $this->on_output();
    }
    protected  function on_input(){ }
    protected  function  on_output(){ }

    protected function is_get(){
        return $_SERVER['REQUEST_METHOD'] == 'GET';
    }

    protected function is_post(){
        return $_SERVER['REQUEST_METHOD'] == "POST";
    }

    protected function template($t, $vars){
        /**
         * $x = 10;
         *
         * $varName = 'x';
         * $$varName = 10;
         */
        foreach ($vars as $key => $value)
            $$key = $value;
        # механизм буферизации далее сколько угодно include
        ob_start();
        include($t);
        # ob_get_clean() -выводит всю строку
        return ob_get_clean();
    }
}

class C_Base extends Controller
{
    protected $_title;
    protected $_content;

    public function __construct(){}

    protected  function on_input(){
        $this->_title = "Название сайта";
        $this->_content = '';
    }

    protected function on_output(){
        $vars = array(
            'title' => $this->_title,
            'content' => $this->_content,
        );

        $page = $this->template("v/v_main.php", $vars);
        echo $page;
    }
}

class C_View extends C_Base
{
    private $_text;

    public function __construct()
    {}

    protected function on_input(){
        parent::on_input();

        $model = new ModelText();
        $this->text = $model->get();
        $this->_title .= ' :: Чтение';
    }
    protected function on_output()
    {
        $var = array('text' => $this->_text);
        $this->_content = $this->template('v/v_view.php', $vars);
        parent::on_output();
    }
}

class C_Edit extends C_Base
{
    private $_text;

    public function __construct()
    {}

    protected function on_input(){
        parent::on_input();

        $model = new ModelText();

        if ($this->is_post())
        {
            $text = $_POST['text'];
            $model->set($text);
            header('Location: index.php?c=view');
            exit();
        }

        $this->_text =$model->get();
        $this->_title .= ' :: Рекдактирование';
    }

    protected function on_output()
    {
        $vars = array('text' => $this->_text);
        $this->_content = $this->template('v/v_edit.php', $vars);
        parent::on_output();
    }
}
