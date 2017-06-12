<?php

class Router {
	
	private static $instance; //за счет static обращаемся без создания объекта
	
	public static function getinstance() {
		if(!(self::$instance instanceof self)) {
			self::$instance = new self();
		}
		return self ::$instance;
	}
	
	protected $controller;
	protected $action;
	protected $params;

	private function __construct() {
		$uri = $_SERVER['REQUEST_URI'];
		var_dump($uri);
		$uri_parts = explode('/',trim($uri,'/'));
		var_dump($uri_parts);
	
	
	$this->controller = !empty($uri_parts[0]) ? ucfirst(strtolower($uri_parts[0])) . 'Controller' : 'IndexController';
	var_dump($this->controller);
	
	$this->action = !empty($uri_parts[1]) ? strtolower($uri_parts[1]) . 'Action' : 'indexAction';
	var_dump($this->action);
	
	$param_uri = parse_url($uri, PHP_URL_QUERY);
	var_dump($param_uri);
	parse_str($param_uri, $arr);
	var_dump($arr);
	$this->params = $arr;
	
	
//	$this->params = trim($uri_parts[2], '?');
//	$params_arr = (explode('=', trim($uri_parts[2], '?')));
//	var_dump($params_arr);
		
//		$len = count($params_arr);
//		for ($i=0; $i<$len; $i++) {
//			if($i%2 == 0) {
//				$this->params = [$params_arr[$i] => $params_arr[$i+1]];
//			}
//		}
//			var_dump($this->params);
}
		
	public function run() {
		if(class_exists($this->getController())) {
			if(method_exists($this->getController(), $this->getAction())) {
//			var_dump('ok');
				$controllerName = $this->getController();
				$actionName = $this->getAction();
				$var = new $controllerName(); //вызываем метод класса
				$var->$actionName();
			} else {
			throw new Exception("Такого контроллера не существует");
		}
		} else {
			throw new Exception("Такого контроллера не существует");
		}
	}
		
	public function getController() {
		return $this->controller;
		}
			
	
	
public function getAction() {
	return $this->action;
	}

}
	