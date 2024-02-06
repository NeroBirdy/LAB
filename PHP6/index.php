<?php

$link = mysqli_connect("127.0.0.1", "root", "", "php5");
$query = "SELECT * FROM comments";
$stmt = mysqli_query($link, $query);

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <a class="header" href="main.html">Главная</a>
        <a class="header" href="contact.html">Контакты</a>
        <a class="header" href="gallary.html">Галерея</a>
    </header>
    <div class="content">
        <div class="main_m">
            <div class="text">
                <p>ДорАмы – так принято называть телесериалы из Юго-Восточной Азии, в первую очередь, – из Японии и Южной Кореи. Само слово "дорама" – это натурализованный вариант английского drama. Дорамы пользуются огромной любовью миллионов зрителей не только в странах Азии, но и во всем мире</p>
            </div>
            <div class="text">
                <p>Дорамы бывают различных жанров – от мелодраматических до комедийных или детективных</p>
            </div>
            <div class="text">
                <p>Среди отличительных черт дорам можно назвать повышенный эмоциональный фон действия, визуальную насыщенность каждого кадра</p>
            </div>
        </div>
    </div>
    <div class="comments_area">
        <div class="comments">
            <form action="load.php" method="post" class="form">
                <input type="text" name="user" placeholder="Пользователь">
                <input type="text" name="comment" placeholder="Комментарий">
                <button type="submit">Отправить</button>
            </form>
            <?php
            while ($result = mysqli_fetch_assoc($stmt)) {
                $user = $result['user'];
                $comment = $result['comment'];
                $id = $result['id'];
            ?>
                <div class="comment">
                    <div class="comment_info">
                        <p class="user"><?php echo $user ?></b>
                        <p><?php echo $comment ?></p>
                    </div>
                    <div class="change">
                        <button class="edit" id="<?php echo $id ?>"></button>
                        <form action="delete.php" method="post">
                            <input type="hidden" name="id" value="<?php echo $id ?>">
                            <button class="delete" type="submit"></button>
                        </form>
                    </div>
                </div>
                <div class="modal" modal-id="<?php echo $id ?>">
                    <div class="modal-content">
                        <span class="close" id="<?php echo $id ?>">&times;</span>
                        <p class="change_header">Изменить комментарий: </p><br>
                        <form action="edit.php" method="post">
                            <input type="hidden" name="id" value="<?php echo $id ?>">
                            <input type="text" name="user" value="<?php echo $user ?>">
                            <input type="text" name="comment" value="<?php echo $comment ?>">
                            <button type="submit">Сохранить</button>
                        </form>
                    </div>
                </div>
            <?php
            }
            ?>
        </div>
    </div>
    <footer>
        <div class="upper">
            <div class="footer_area">
                <img src="pictures/back/stik.png" alt="" class="stik">
            </div>
            <div class="footer_info">
                <p>Зорин Владислав</p>
                <p>+7 (950) 522-89-97</p>
                <p>31231@gmail.com</p>
            </div>
        </div>
    </footer>
</body>

<script>
    let openButtons = document.querySelectorAll('.edit');

    openButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            let id = button.getAttribute('id');
            open(id);
        });
    });

    function open(id) {
        let modal = document.querySelector('.modal[modal-id="' + id + '"]');
        modal.style.display = "block";
    }

    let closeButtons = document.querySelectorAll('.close');

    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            let id = button.getAttribute('id');
            close(id);
        });
    });

    function close(id) {
        let modal = document.querySelector('.modal[modal-id="' + id + '"]');
        modal.style.display = "none";
    }
</script>

</html>