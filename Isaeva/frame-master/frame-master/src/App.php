<?php namespace Sky\Frame;

use Symfony\Component\Routing;
use Symfony\Component\HttpFoundation\Request;

class App{
	private $request;
	private $frame;
	private $real_routes;


	public function __construct($routes) {
		$this->real_routes = $this->getRealRoutes($routes);
		$this->request = Request::createFromGlobals();
		$this->frame = new LittleCore($this->real_routes);
	}

	private function getRealRoutes($_routes){
		$_real_routes = new Routing\RouteCollection();
		$_routes_arr = json_decode($_routes, true);

		foreach ($_routes_arr as $key => $value) {
			$name = $_routes_arr[$key]['name'];
			$path = $_routes_arr[$key]['path'];
			$controller = $_routes_arr[$key]['controller'];
				$_real_routes->add($name, new Routing\Route($path, 
					array(
						'_controller' => $controller,
						)
					)
				);					
		 } 
		//var_dump($_real_routes);
		return $_real_routes;

	}


	public function run(){
		$this->frame->handle($this->request)->send();
	}
}
