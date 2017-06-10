<?php
    echo "Вы вошли в личный кабинет, " . $_SESSION["name"];
?>
    <h1>Добавьте новый товар</h1>
    <form method="get" action="/addGood">
        <label for="goodID">ID товара</label>
        <input name="goodID" id="goodID" type="text"><br><br>       
        <label for="goodName">Название</label>
        <input name="goodName" id="goodName" type="text"><br><br>
        <label for="description">Описание</label>
        <input name="description" id="description" type="text"><br><br>
        <label for="img">Картинка</label>
        <input name="img" id="img" type="text"><br><br>
        <button id="sbm" type="submit">Добавить</button>
    </form>