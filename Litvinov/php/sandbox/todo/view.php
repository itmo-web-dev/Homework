<!DOCTYPE>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <title> Работа с БД </title>
    <link rel="stylesheet" href="styles.css" media="screen" />
</head>
<body>
<h1>TODO</h1>
<hr/>

<form method="post">
    <input type="text" name="task" placeholder="что сделать" />
    <input type="submit" value="Добавить задачу"/>
</form>
</hr>

<? foreach ($list as $task): ?>
    <? if ($task['status'] == 0): ?>

        <form method="post">
            <?= $task['text'] ?>
            <input type="submit" value="Выполнено!" />
            <input type="hidden" value="<?= $task['id_task'] ?>" name="id_task" />
        </form>

    <? else: ?>
        <s><?= $task['text'] ?></s>
        <br/>
        <br/>

    <? endif ?>
<? endforeach ?>

</body>
</html>