<?php
/**
 * Created by PhpStorm.
 * User: Dell
 * Date: 17.06.2017
 * Time: 14:09
 */

namespace Course\Shop\models;
use Sky\Frame\DB;

class AccountModel {
    private $tablename = 'users';
    private $db;

    public function __construct()
    {
        $this->db = DB::getinstance();
    }

    public function userAdded($red_data) {
        //добавление нового пользователя в базу
        $sql = "select login from $this->tablename where login =:login";
        $params = [
            'login' => $red_data['login']
        ];
        $result = $this->db->selectByParams($sql, $params);
        // $result либо false если пользователь не найден, либо login пользователя
        if ($result) {
            return false;
        }
        $reg_data['avatar'] = 'default_user.jpg';
        $reg_data['role'] = 'user';
        $reg_data['pwd'] = password_hash($reg_data['pwd'], PASSWORD_DEFAULT);
        $sql_new_user = "insert into $this->tablename (login, pwd, email, avatar, role) VALUES (:login, :pwd, :email, :avatar, :role";
        return $this->db->insertIntoTable($sql_new_user, $reg_data);
    }

    public function loginAction($login_data) {

    }
}