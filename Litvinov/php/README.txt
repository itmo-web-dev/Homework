[«аметки] ”становка PHP 7 в Windows (Composer, PhpStorm)
https://www.youtube.com/watch?v=6LOYKoE-mog

”стновка Apache
https://www.youtube.com/watch?v=YapYCvxATZ8
download
httpd-2.4.25-x64-vc14-r1.zip
разпковал архив в папку 
c:\Apache24
в командной строке
c:\Apach24\bin\httpd.exe -k install
вынести €рлык с (дл€ запуска и перезапуска Apache)
c:\Apache24\bin\ApacheMonitor.exe  

”становка MySQL и phpMyAdmin
https://www.youtube.com/watch?v=QiAzu3lfOj0

запускаю инстал€тор 
выбираю Server Only MySQL Server 5.6.35
пароль дл€ локального сервера toor 

скачиваю phpMyAdmin-4.7.0-all-languages.zip
разархивирую в папку 
c:\Apache24\htdocs\phpMyAdmin\
в файле 
c:\Apache24\conf\httpd.conf

-- далее хороша€ стать€ !!!
установка и настройка apache - хороша€ стать€ 
http://php-myadmin.ru/learning/instrument-apache.html
-- устанавливаю почти по ней 

редактирую:   c:\Apache24\conf\httpd.conf
нахожу DirectoryIndex
дописываю index.php - что значит что он будет запускатьс€ по умолчанию 
<IfModule dir_module>
    DirectoryIndex index.php index.html
</IfModule>

-- разкоментировал
AddType text/html .shtml
AddOutputFilter INCLUDES .shtml
-- за ними добавил 2 строки 
AddType application/x-httpd-php .php
AddType application/x-httpd-php-source .phps
-- добавил в конец файла 
LoadModule rewrite_module modules/mod_rewrite.so
LoadModule php7_module "C:/php/php7apache2_4.dll"
PHPIniDir "C:/php"
ServerName localhost:8080

перезапускаю установку apache
c:\Apach24\bin\httpd.exe -k install

результат:
при загрузке строки в браузере 
http://localhost/phpMyAdmin/
написал ошибку -> нужно расширение mysqli
в фале php.ini разкоментировал 
extension=php_mbstring.dll
extension=php_mysqli.dll
-----------------
http://localhost/phpMyAdmin/index.php
-- «јѕ”— ј≈“—я phpMyAdmin

по строке 
http://localhost/homework01/
запускаетс€ перва€ домашн€€ работа 



C:\www>php hello_world.php
Hello world
C:\www>php -S localhost:8080

composer
https://getcomposer.org/download/
C:\php>echo @php "%~dp0composer.phar" %*>composer.bat
C:\php>composer -v

https://packagist.org/search/?q=JSON