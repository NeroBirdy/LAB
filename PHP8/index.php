<?php
session_start();

if (!isset($_SESSION['new_captcha'])) {
    $_SESSION['new_captcha'] = true;
    $_SESSION['try'] = 1;
}

$link = mysqli_connect("127.0.0.1", "root", "", "php5");
$query = "SELECT * FROM comments";
$stmt = mysqli_query($link, $query);
$monthes = ["December", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"];
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
        <div class="link_area">
            <a class="header" href="index.php">Главная</a>
            <a class="header" href="contact.html">Контакты</a>
            <a class="header" href="gallary.php">Галерея</a>
        </div>
       <?php require 'authAndRegArea.php'; ?>
    </header>
    <?php require 'authAndRegForm.php' ?> 
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
            <div class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <p class="change_header">Изменить комментарий: </p><br>
                    <form action="edit.php" method="post">
                        <input type="hidden" name="id" value="">
                        <input type="text" name="comment" value="">
                        <button type="submit">Сохранить</button>
                    </form>
                </div>
            </div>
            <?php
            if (isset($_SESSION['user'])) {
            ?>
                <form action="load.php" method="post" class="form">
                    <input type="text" name="comment" placeholder="Комментарий">
                    <button type="submit">Отправить</button>
                </form>
            <?php
            }
            require 'while.php';
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
    let modal = document.querySelector(".modal");

    function open() {
        modal.style.display = "block";
    }

    function close() {
        modal.style.display = "none";
    }
    let registerAuth = document.querySelector(".register_close");
    if (registerAuth) {
        registerAuth.addEventListener('click', function() {
            document.querySelector(".register").style.display = "none";
        });
    }

    let closeAuth = document.querySelector(".auth_close");
    if (closeAuth) {
        closeAuth.addEventListener('click', function() {
            document.querySelector(".auth").style.display = "none";
        });
    }

    let registerButton = document.querySelector(".register_b");
    if (registerButton) {
        registerButton.addEventListener('click', function() {
            document.querySelector(".register").style.display = "block";
        });
    }

    let authButton = document.querySelector(".auth_b");
    if (authButton) {
        authButton.addEventListener('click', function() {
            document.querySelector(".auth").style.display = "block";
        });
    }

    let openButtons = document.querySelectorAll('.edit');

    openButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            let parent = button.parentElement.parentElement;
            let comment = parent.childNodes[3].childNodes[2].innerHTML;
            let id = button.getAttribute('id');
            document.querySelector('input[type = "hidden"][name = "id"]').value = id;
            document.querySelector('input[type = "text"][name = "comment"]').value = comment;
            open();
        });
    });

    let closeButtons = document.querySelectorAll('.close');

    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            close();
        });
    });
</script>

</html>