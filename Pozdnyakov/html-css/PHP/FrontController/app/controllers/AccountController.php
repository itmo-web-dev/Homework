<?php
/**
 * Created by PhpStorm.
 * User: Dell
 * Date: 17.06.2017
 * Time: 14:09
 */

namespace Course\Shop\controllers;

use Sky\Frame\Controller;
use Sky\Frame\Sessions;
use Course\Shop\models\AccountModel;

class AccountController extends Controller {
    private $account_model;
    private $session;

    public function __construct()
    {
        $this->account_model = new AccountModel();
        $this->session = Session::getinstance();
    }

    public function registrationAction() {
        //регистрация
        $reg_data = [

        ];
        if ($this->account_model->userAdded($reg_data)) {
            return $this->generateAjaxResponse('add user');
        }
        return $this->generateAjaxResponse('add user error');
    }

    public function loginAction() {
        $login_data  = json_decode($_POST['login_data'], true);

        if ($this->account_model->login($login_data)) {
            $this->session->setParam('name', $login_data['login']);
            setcookie('name', $login_data['login'], time()+90, path '/');
            return $this->generateAjaxResponse('login');
        }
        return $this->generateAjaxResponse('login error');
    }

    public function accountAction() {
        //Отображение ЛК
        return $this->generateResponse('personal_account', 'template.php',
            [
                'app_title' => 'Личный кабинет',
                'username' => $this->session->getParam('name'),
                'admin' => false
            ]);
    }

    public function logoutAction() {
        //выход
        $this->session->stopSession();
        return $this->generateResponse('logout');
    }
}