-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Май 18 2017 г., 00:12
-- Версия сервера: 5.6.35-log
-- Версия PHP: 7.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `hometasks`
--

-- --------------------------------------------------------

--
-- Структура таблицы `practika`
--

CREATE TABLE `practika` (
  `id_task` int(11) NOT NULL,
  `text` varchar(1024) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '0',
  `data_creation` varchar(64) NOT NULL,
  `template_html` varchar(1024) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `practika`
--

INSERT INTO `practika` (`id_task`, `text`, `status`, `data_creation`, `template_html`) VALUES
(31, 'Задача 1\n   //Дана радиокнопка\n   $radio_but = \"&ltinput type=\'radio\' name=\'php\';\n   echo $radio_but .\"&gt &lt br &gt\"; // неактивная радиокнопка\n   //напишите функцию make_checked, которая сделает радиокнопку активной (атрибут checked)\n   make_checked($radio_but); // вызов функции\n   echo $radio_but .\"&gt &lt br &gt\"; // активная радиокнопка\"', 0, '18-05-2017', 'template_01.php'),
(32, 'Задача 2\nсоздать функцию с аргументом для вывода приветствия (Например, \"Здравствуйте, ИМЯ\").\nУстановить значение по умолчанию для аргумента равное «Гость»', 0, '18-05-2017', 'template_01.php'),
(33, 'Задача 3\nДопустим, пользователь вводит названия городов через пробел. Вы их присваиваете переменной.\nПереставьте названия так, чтобы названия были упорядочены по алфавиту.', 0, '18-05-2017', 'template_01.php'),
(34, 'Задача 4\nНаписать функцию - конвертер строки.\nВозможности:\nперевод всех символов в верхний регистр,\nперевод всех символов в нижний регистр,\nперевод всех символов в нижний регистр и первых символов слов в верхний регистр.\nЭто должна быть одна функция', 0, '18-05-2017', 'template_01.php'),
(35, 'Задача 5\nИспользуя функцию удаления HTML и PHP-тегов из строки, выведите на экран строку «&lt h1 &gt Hello, world! &lt /h1 &gt».\nСтрока не должна выглядеть как заголовок первого уровня – все теги должны быть удалены.', 0, '18-05-2017', 'template_01.php'),
(36, 'Задача 6\nСоздайте массив. Объедините все элементы массива в строку и выведите её на экран.', 0, '18-05-2017', 'template_01.php'),
(37, 'Задача 7\nВ переменной $date лежит дата в формате \'30-11-2017\'. Преобразуйте эту дату в формат \'2017.11.30\'.', 0, '18-05-2017', 'template_01.php'),
(38, 'Задача 8\nДана строка \'/php/\'. Сделайте из нее строку \'php\', удалив концевые слеши.', 0, '18-05-2017', 'template_01.php'),
(39, 'Задача 9\nДана строка \'просто строка.\'. В конце этой строки может быть точка, а может и не быть.\nСделайте так, чтобы в конце этой строки гарантировано стояла точка.\nТо есть: если этой точки нет - ее надо добавить, а если есть - ничего не делать. Задачу решите через rtrim', 0, '18-05-2017', 'template_01.php'),
(40, 'Задача 10\nНаписать функцию, которая выводит количество дней, оставшихся до нового года.\nФункция должна корректно работать при запуске в любом году.', 0, '18-05-2017', 'template_01.php'),
(41, 'Задача 11*\nФункция принимает число, в цикле for пытается поделить (без остатка) его на числа из диапазона 1..num и выводит результат', 0, '18-05-2017', 'template_01.php');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `practika`
--
ALTER TABLE `practika`
  ADD PRIMARY KEY (`id_task`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `practika`
--
ALTER TABLE `practika`
  MODIFY `id_task` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
