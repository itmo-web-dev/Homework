<?php

namespace Course\Shop\Models;
use Sky\Frame\DB;

class AccountModel
	
{
	
	private $tablename = 'users';
	private $db;
	
	public function __construct()
	{
		$this->db = DB::getInstance();
		
	}
		
	public function userAdded($reg_data) {
//		добавление нового пользователя в базу
		users = id login hash email avatar role
		$sql = 'SELECT login FROM $this->tablename WHERE login=:login';
		$params = [
			'login'=>$reg_data['login']
		
		];
		$result = $this->db->selectByParams($sql, $params);
		$result = либо false (если пользователь не найден) либо login, если пользователя
			if($result) {
				return false;
			}
		$reg_data['avatar'] = 'default_user.jpg';
		$reg_data['role'] = 'user';
		$reg_data['pwd'] = password_hash($reg_data['pwd'], PASSWORD_DEFAULT);
		$sql_new_user = "INSERT INTO $this->tablename (login, pwd, email, avatar, role) VALUES (:login, :pwd, :email, :avatar, :role)";
		return $this->db->insertIntoTable($sql_new_user, $reg_data);
	}
	
	
	
}