� bat ����
"c:\Program Files\MySQL\MySQL Server 5.7\bin\mysql" -u sid -p -h localhost 
����� ������ toor 

CREATE DATABASE my_db CHARACTER SET utf8 COLLATE utf8_general_ci;

show databases;

DROP DATABASE 

CREATE USER 'ivan'@'localhost'    IDENTIFIED BY '123';
CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';

#doc: https://www.digitalocean.com/community/tutorials/mysql-ru

GRANT ALL PRIVILEGES ON  my_db.*  TO 'newuser'@'localhost';
FLUSH PRIVILEGES;

-u newuser -p;

DROP USER �demo�@�localhost�;
mysql -u [��� ������������]-p;
quit

������� ��� ����� ������������� 
"c:\Program Files\MySQL\MySQL Server 5.7\bin\mysql" -u newuser -p -h localhost

��������� ��������� 
status

help contents;

use my_db;  - �������� �������
show tables;
