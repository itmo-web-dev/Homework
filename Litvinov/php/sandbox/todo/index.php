<?php
/**
 * Created by PhpStorm.
 * User: s_i_d
 * Date: 16.05.2017
 * Time: 2:19
 */

$db_handle = mysqli_connect('localhost', 'root', 'toor');
mysqli_select_db($db_handle, "todo");

// обработка POST
if (isset($_POST['task']))
{
    $task = trim($_POST['task']);
    if($task != ''){
        $task = mysqli_real_escape_string($db_handle, $task);
        # только текст 2 остальных столбца автоматически
        $sql = "INSERT INTO tasks (text) VALUES ('$task')";
        mysqli_query($db_handle, $sql);
        #echo $sql;
        # exit;
    }
    # чтобы не было вопроса на повторение запроса -> всегда стоит сделать redirect
    header('Location: index.php');
    exit();
}
else if(isset($_POST['id_task']))
{
    $id_task = $_POST['id_task'];
    $id_task = mysqli_real_escape_string($db_handle, $id_task);
    $sql = "UPDATE tasks SET status='1' WHERE id_task='$id_task'";
    mysqli_query($db_handle, $sql);

    header('Location: index.php');
    exit();
}
?>

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
    <?php
        $result = mysqli_query($db_handle, 'SELECT * FROM tasks ORDER by  status');
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
            if($row['status'] == 0)
            {
                echo '<form method="post">';
                echo $row['text'];
                echo ' ';
                echo '<input type="submit" value="Выполнено!" />';
                echo '<input type="hidden" value="' . $row['id_task'] . '" name="id_task" />';
                echo '</form>';
            }
            else{
                echo '<s>' . $row['text'] . '</s>';
                echo '<br/><br/>';
            }
        }

     ?>
</body>
</html>

