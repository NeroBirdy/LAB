<?php session_start()  ?>


<div class="auth" <?php if (isset($_SESSION['message']) && in_array($_SESSION['message'], array('False', 'FFalse', 'Неправильный логин или пароль', 'Вы что-то не заполнили'))) {
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
            <input class="auth_input" type="password" name="password" placeholder="Пароль" value='<?php if (isset($_SESSION['authForm'])) {
                                                                                                    if (!empty($_SESSION['authForm']['password'])) {
                                                                                                        echo $_SESSION['authForm']['password'];
                                                                                                        unset($_SESSION['authForm']);
                                                                                                    }
                                                                                                } ?>'>
            <img class='img' src="captcha.php" alt="">
            <input class="auth_input" type="text" name="answer" placeholder="Введите капчу">
            <button class="authButton">Войти</button>
            <?php if (isset($_SESSION['message']) && in_array($_SESSION['message'], array('False', 'FFalse', 'Неправильный логин или пароль', 'Вы что-то не заполнили'))) {
            ?>
                <p><?php if (in_array($_SESSION['message'], array('False', 'FFalse'))) {
                        $message = $_SESSION['message'];
                        if ($message === 'False') {
                            $_SESSION['try'] === 2 ? $try = ' попытки' : $try = ' попытка';
                            $number = 4 - $_SESSION['try'];
                            $text = 'Неправильно, у тебя еще ' . $number . $try;
                            echo $text;
                        } else if ($_SESSION['message'] === 'FFalse') {
                            echo 'Слишком много попыток, новая капча';
                        }
                    } else {
                        echo $_SESSION['message'];
                    } ?></p>
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
            <input class="auth_input" type="password" name="password" placeholder="Пароль" value='<?php if (isset($_SESSION['regForm'])) {
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