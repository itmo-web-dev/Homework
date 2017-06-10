index.php
  requiire_once __DIR__."_/_/path"

function runController(){
    $url = parse_url($_SERVER['REQUIRE_URI'], PHP_URL_PATH);
    $action = trim()
}

session_start();
$router = Router::Router()
$router->run();

Router.php
# singelton
class Router(){
    public static $instance;

    public static function getInstance(){
        if(!(self::$instance instanceof self)){
            self::$instance = new self();
        }
        return self::$instance;
    }

    protected $controller;
    protected $action;
    protected $param;

    private function __construct(){
        $url = $_SERVER['REQUEST_URI'];
        $parse_uri = parse_url($url, 'PHP_URL_QUERY');
        $parse_str($parse_uri, $arr);

        $uri_parts = explode('/', trim($url, '/'));
        # по идее надо сначала все буквы опустить и потом поднять первую букву
        $this->controller =  !empty($uri_parts[0]) ? ucfirst($uri_parts[0]).'Controller' : 'IndexController';
        $this->action =      !empty($uri_parts[1]))? strtolower($url_parts[1]).'Action'  : 'indexAction';
        $this->param = (explode('=', trim($url_parts[2], '?')));

        # расчитывается каждый раз поэтому выносим из цикла
        $len = count($param_arr);
        for($i=0; $i < $len; $i++){
            if($i%2 == 0){
               $this->params = [$params_arr[$i] => $params_arr[$i+1]+1];
            }
        }
        # ....
        $this->params = $arr
    }

    public function run(){
        if(class_exists($this->getController())){
            if()
        }else{
            throw new Exception(Нет такого контроллера не существует", 1);
        }
    }
    public function getController(){
        return $this->contriller;
    }
}

строка
?id=7&param=90
['id'=>7, 'param'=>90]
............
Писать Router - долго
не просто разделить

если будут четко известный пути с id-3
логику роутера надо менять
 - примитивная вещь

контроллер экшен параметоров

приходим к symphony -> router
frame work - symphony

установить composer
 можно установить локально или глобально
 композер парт
Глобально
    composer
Или локально
    curl -s$ https://getcomposer.org/installer
    composer.phar
устанавливаем зависимости
cmd:    php composer.phar require symphony/routing
если будет композер json
  - будут прописаны зависимости
  если есть написанный json
  composer install

 symfony/routing
 symfony/http-kernel
 symfony/http-foundation

 разобраться в Router



шаблонизаторы





