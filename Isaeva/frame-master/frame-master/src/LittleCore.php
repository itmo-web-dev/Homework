<?php namespace Sky\Frame;

use Symfony\Component\Routing;
use Symfony\Component\HttpKernel;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;
use Symfony\Component\HttpFoundation\Response;

class LittleCore
{
	protected $matcher;
	protected $controllerResolver;
	protected $argumentResolver;
	protected $context;

	public function __construct($routes)
	{
		$this->context = new Routing\RequestContext();
		$this->matcher = new Routing\Matcher\UrlMatcher($routes, $this->context);
		$this->controllerResolver = new HttpKernel\Controller\ControllerResolver();
		$this->argumentResolver = new HttpKernel\Controller\ArgumentResolver();
	}

	public function handle(Request $request)
	{
			$this->matcher->getContext()->fromRequest($request);

		try {
			$request->attributes->add($this->matcher->match($request->getPathInfo()));

			$controller = $this->controllerResolver->getController($request);
			$arguments = $this->argumentResolver->getArguments($request, $controller);

			return call_user_func_array($controller, $arguments);
		} catch (ResourceNotFoundException $e) {
			return new Response('Not Found', 404);
		} catch (\Exception $e) {
			return new Response('An error occurred', $e->getMessage());
		}
	}
}