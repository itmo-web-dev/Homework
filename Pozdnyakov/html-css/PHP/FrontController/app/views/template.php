<!DOCTYPE html>
<html lang="ru">

<head>
    <title>Главная</title>
    <meta charset="utf-8">
    <script src="https://code.jquery.com/jquery.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Roboto&amp;subset=cyrillic" rel="stylesheet">
    <link rel="stylesheet" href="/public/style/font-awesome.min.css">
    <link rel="stylesheet" href="/public/style/bootstrap.min.css">
    <link rel="stylesheet" href="/public/style/style.css">
</head>

<body>
    <header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-3">
                    <a href="/">ГЛАВНАЯ</a>
                </div>
                <div class="col-xs-3">
                    <a href="/personalAcc">ЛИЧНЫЙ КАБИНЕТ</a>
                </div>
                <div class="col-xs-3">
                    <a href="/login">ВОЙТИ</a>
                </div>
                <?php if ($auth): ?>
                    <div class="col-xs-3">
                        <a href="/logout">ВЫЙТИ</a>
                    </div>
                <?php endif; ?>
            </div>
        </div>
        <div class="row header__greeting">
            <div class="col-xs-3 col-xs-offset-4 header__greeting__text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, labore pariatur! Cum eligendi eos hic, libero magnam quaerat tempora temporibus?</p>
            </div>
            <div class="col-xs-5 header__greeting__logo">
                <img class="header__greeting__logo__img" src="../../public/assets/Tomik.png" alt="Элемент отвечающий за стиль">
            </div>
        </div>

    </header>

    <?php include $contentView; ?>

    <script src="/public/js/comment.js"></script>
    <script src="/public/js/auth.js"></script>
    <script src="/public/js/jquery-3.2.1.min.js"></script>

</body>

</html>