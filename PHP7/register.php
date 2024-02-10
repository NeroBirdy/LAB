<?php
session_start();
if (isset($_SESSION['user']) && $_SESSION['user']) {
    header('Location: index.php');
}

$link = mysqli_connect("127.0.0.1", "root", "", "php5");

$login = $_POST['login'];

$query = "SELECT * FROM users WHERE login = '$login'";

$check = mysqli_query($link,$query);
if(mysqli_num_rows($check))
{
    $_SESSION['message'] = "Логин уже занят";
    $_SESSION['form'] = ['login' => $login, 'password' => $_POST['password']];
    header('Location: index.php');
}

$password = md5($_POST['password']);

$query = "INSERT INTO users (login,password) VALUES('$login','$password')";

mysqli_query($link, $query);

header('Location: index.php');
