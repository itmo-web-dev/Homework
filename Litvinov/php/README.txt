[�������] ��������� PHP 7 � Windows (Composer, PhpStorm)
https://www.youtube.com/watch?v=6LOYKoE-mog

�������� Apache
https://www.youtube.com/watch?v=YapYCvxATZ8
download
httpd-2.4.25-x64-vc14-r1.zip
��������� ����� � ����� 
c:\Apache24
� ��������� ������
c:\Apach24\bin\httpd.exe -k install
������� ����� � (��� ������� � ����������� Apache)
c:\Apache24\bin\ApacheMonitor.exe  

��������� MySQL � phpMyAdmin
https://www.youtube.com/watch?v=QiAzu3lfOj0

�������� ���������� 
������� Server Only MySQL Server 5.6.35
������ ��� ���������� ������� toor 

�������� phpMyAdmin-4.7.0-all-languages.zip
������������ � ����� 
c:\Apache24\htdocs\phpMyAdmin\
� ����� 
c:\Apache24\conf\httpd.conf

-- ����� ������� ������ !!!
��������� � ��������� apache - ������� ������ 
http://php-myadmin.ru/learning/instrument-apache.html
-- ������������ ����� �� ��� 

����������:   c:\Apache24\conf\httpd.conf
������ DirectoryIndex
��������� index.php - ��� ������ ��� �� ����� ����������� �� ��������� 
<IfModule dir_module>
    DirectoryIndex index.php index.html
</IfModule>

-- ���������������
AddType text/html .shtml
AddOutputFilter INCLUDES .shtml
-- �� ���� ������� 2 ������ 
AddType application/x-httpd-php .php
AddType application/x-httpd-php-source .phps
-- ������� � ����� ����� 
LoadModule rewrite_module modules/mod_rewrite.so
LoadModule php7_module "C:/php/php7apache2_4.dll"
PHPIniDir "C:/php"
ServerName localhost:8080

������������ ��������� apache
c:\Apach24\bin\httpd.exe -k install

���������:
��� �������� ������ � �������� 
http://localhost/phpMyAdmin/
������� ������ -> ����� ���������� mysqli
� ���� php.ini ��������������� 
extension=php_mbstring.dll
extension=php_mysqli.dll
-----------------
http://localhost/phpMyAdmin/index.php
-- ����������� phpMyAdmin

�� ������ 
http://localhost/homework01/
����������� ������ �������� ������ 



C:\www>php hello_world.php
Hello world
C:\www>php -S localhost:8080

composer
https://getcomposer.org/download/
C:\php>echo @php "%~dp0composer.phar" %*>composer.bat
C:\php>composer -v

https://packagist.org/search/?q=JSON