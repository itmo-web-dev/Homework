<?php
    
class Router {
    public static $instance;
    
    public static function getinstance() {
        if(!(self::$instance instanceof self)) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    
    protected $controller;
    protected $action;
    protected $params;
    
    private function __construct() {
        $uri = $_SERVER['REQUEST_URI'];
        $uri_parts = explode('/', trim($uri, '/'));
        
        $this->controller = !empty($uri_parts[0]) ? ucfirst(strtolower($uri_parts[0])) . 'Controller' : 'IndexController';
        
        $this->action = !empty($uri_parts[1]) ? strtolower($uri_parts[1]) . 'Action' : 'indexAction';
        
/*        $params_arr = explode('=', trim($uri_parts[2], '?'));
//        var_dump($params_arr);
        $len = count($params_arr);
        for ($i = 0; $i < $len; $i++) {
            if ($i%2 == 0) {
                $this->params = [$params_arr[$i] => $params_arr[$i + 1]];
            }
        }*/
        $param_uri = parse_url($uri, PHP_URL_QUERY);
        parse_str($param_uri, $arr);
//        var_dump($arr);
        $this->params = $arr;
    }
        
    public function run() {
            if (class_exists($this->getController())) {
                if (method_exists($this->getController(), $this->getAction())) {
                    $controllerName = $this->getController();
                    $var = new $controllerName;
                    $actionName = $this->getAction();
                    $var->$actionName();
                } else {
                    throw new exception('Такого метода не существует');
                }

            } else {
                throw new exception('Такого контроллера не существует');
            }
        }
        
        public function getController() {
            return $this->controller;
        }
        
        public function getAction() {
            return $this->action;
        }    

}