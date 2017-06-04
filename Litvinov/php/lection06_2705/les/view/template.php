<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title></title>
</head>
<body>

<li><a href="/">Main</a></li>

<?php if ($auth): ?>
    <li><a href="?logout=logout">Выйти</a></li>
<? else: ?>
    <li><a href="/login">Log in</a></li>
<?php endif; ?>

<?php include $contentView; ?>

</body>
</html>
