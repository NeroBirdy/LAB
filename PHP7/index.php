<?php
session_start();
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
        <?php if (isset($_SESSION['user'])) {
        ?>
            <div class="user_header">
                <?php
                echo  $_SESSION['user']['login'];
                ?>
                <form action="logout.php" method="post" class="logout_form">
                    <button class="logout">Выйти</button>
                </form>
            </div>
        <?php
        } else {
        ?>
            <div class="auth_area">
                <button class="auth_b">Войти</button>
                <button class="register_b">Регистрация</button>
            </div>
        <?php
        }  ?>
    </header>
    <div class="auth" <?php if (isset($_SESSION['message']) && ($_SESSION['message'] === 'Неправильный логин или пароль' or $_SESSION['message'] === "Вы что-то не заполнили")) {
                            echo "style = 'display: block'";
                        } ?>>
        <div class="auth-content">
            <span class="auth_close">&times;</span>
            <p class="welcome">Добро пожаловать</p><br>
            <form action="signin.php" method="post" class="auth_form">
                <p class="auth_p">Логин</p>
                <input class="auth_input" type="text" name="login" placeholder="Логин" value='<?php if (isset($_SESSION['authForm'])) {
                                                                                                    if (!empty($_SESSION['authForm']['login'])) {
                                                                                                        echo $_SESSION['authForm']['login'];
                                                                                                    }
                                                                                                } ?>'>
                <p class="auth_p">Пароль</p>
                <input class="auth_input" type="text" name="password" placeholder="Пароль" value='<?php if (isset($_SESSION['authForm'])) {
                                                                                                        if (!empty($_SESSION['authForm']['password'])) {
                                                                                                            echo $_SESSION['authForm']['password'];
                                                                                                            unset($_SESSION['authForm']);
                                                                                                        }
                                                                                                        
                                                                                                    } ?>'>
                <button class="authButton">Войти</button>
                <?php if (isset($_SESSION['message']) && ($_SESSION['message'] === 'Неправильный логин или пароль' or $_SESSION['message'] === "Вы что-то не заполнили")) {
                ?>
                    <p><?php echo $_SESSION['message'] ?></p>
                <?php
                    unset($_SESSION['message']);
                }  ?>
            </form>
        </div>
    </div>
    <div class="register" <?php if (isset($_SESSION['message']) && ($_SESSION['message'] === 'Логин уже занят' or $_SESSION['message'] === "Ошибка регистрации")) {
                                echo "style = 'display: block'";
                            } ?>>
        <div class="register-content">
            <span class="register_close">&times;</span>
            <p class="welcome">Добро пожаловать</p><br>
            <form action="register.php" method="post" class="register_form">
                <p class="register_p">Логин</p>
                <input class="auth_input" type="text" name="login" placeholder="Логин" value='<?php if (isset($_SESSION['regForm'])) {
                                                                                                    if (!empty($_SESSION['regForm']['login'])) {
                                                                                                        echo $_SESSION['regForm']['login'];
                                                                                                    }
                                                                                                } ?>'>
                <p class="register_p">Пароль</p>
                <input class="auth_input" type="text" name="password" placeholder="Пароль" value='<?php if (isset($_SESSION['regForm'])) {
                                                                                                         if (!empty($_SESSION['regForm']['password'])) {
                                                                                                            echo $_SESSION['regForm']['password'];
                                                                                                            unset($_SESSION['regForm']);
                                                                                                        }
                                                                                                        
                                                                                                    } ?>'>
                <button class="registerButton">Зарегистироваться</button>
                <?php if (isset($_SESSION['message']) && ($_SESSION['message'] === 'Логин уже занят' or $_SESSION['message'] === "Ошибка регистрации")) {
                ?>
                    <p><?php echo $_SESSION['message'] ?></p>
                <?php
                    unset($_SESSION['message']);
                }  ?>
            </form>
        </div>
    </div>
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
            if ($_SESSION) {
            ?>
                <form action="load.php" method="post" class="form">
                    <input type="text" name="comment" placeholder="Комментарий">
                    <button type="submit">Отправить</button>
                </form>
            <?php
            }
            ?>
            <?php
            while ($result = mysqli_fetch_assoc($stmt)) {
                $user = $result['user'];
                $comment = $result['comment'];
                $id = $result['id'];
                $timestamp = $result['date'];
                $pieces = explode(" ", $timestamp);
                $date = $pieces[0];
                $tmp = explode("-", $date);
                $stringMonth = $tmp[1];
                $stringDay = $tmp[2];
                $month = $monthes[intval($date[0])];
                $day = intval($stringDay);
                $trueDate = $day . " " . $month;
            ?>
                <div class="comment">
                    <p class="date"><?php echo $trueDate ?></p>
                    <div class="comment_info">
                        <p class="user"><?php echo $user ?>
                        <p><?php echo $comment ?></p>
                    </div>
                    <?php
                    if (isset($_SESSION['user'])) {
                    ?>
                        <div class="change">
                            <?php
                            if ($_SESSION['user']['login'] === $user or $_SESSION['user']['login'] === "BirdyNero") {
                            ?>
                                <button class="edit" id="<?php echo $id ?>"></button>
                                <form action="delete.php" method="post">
                                    <input type="hidden" name="id" value="<?php echo $id ?>">
                                    <button class="delete" type="submit"></button>
                                </form>
                            <?php
                            }
                            ?>
                        </div>
                    <?php
                    }
                    ?>
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