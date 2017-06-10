    <h3><? echo $data['title']?></h3>
    <p><? echo $data['description']?></p>

    <?php if ($auth): ?>
    <form id="comment_form">
        <textarea title="Оставить комментарий"></textarea>
        <button type="submit">Написать</button>
    </form>
    <?php else: ?>

    <p>Вы не можете оставлять комментарии</p>

    <? endif;?>
