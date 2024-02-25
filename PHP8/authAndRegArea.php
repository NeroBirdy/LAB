<?php
session_start();
if (isset($_SESSION['user'])) {
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