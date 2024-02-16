<?php
session_start();
if ($_SESSION['user']) {
    header('Location: index.php');
}

if (empty($_POST['password']) or empty($_POST['login'])) {
    $_SESSION['message'] = "Вы что-то не заполнили";
    header('Location: index.php');
    die();
}

$login = $_POST['login'];
$password = md5($_POST['password']);

$link = mysqli_connect("127.0.0.1", "root", "", "php5");
$query = "SELECT * FROM users WHERE login = '$login' AND password = '$password'";

$check = mysqli_query($link,$query);

if (mysqli_num_rows($check))
{
    $user = mysqli_fetch_assoc($check);
    $_SESSION['user'] = [
        "id" => $user['id'],
        "login" => $user['login'],
    ];
}
else {
    $_SESSION['message'] = "Неправильный логин или пароль";
    $_SESSION['authForm'] = ['login' => $login, 'password' => $_POST['password']];
}

header('Location: index.php');

