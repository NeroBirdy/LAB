<?php
session_start();
$id = $_POST['id'];
$user = $_SESSION['user']['login'];
$comment = trim($_POST['comment']);

$link = mysqli_connect("127.0.0.1", "root", "", "php5");
if (!empty($id) and !empty($comment)) {
    $comment = preg_replace('/\s+/', ' ', $comment);
    if ($comment === ' ') {
        header("Location: index.php");
        die();
    }
    $check = mysqli_query($link, "SELECT comment FROM comments WHERE user = '$user' and id ='$id'");
    if (mysqli_num_rows($check) || $user == 'BirdyNero') {
        $query = "UPDATE comments SET user = ?, comment = ? WHERE id = ?";

        $stmt = mysqli_prepare($link, $query);

        if ($stmt) {
            mysqli_stmt_bind_param($stmt, "ssi", $user, $comment, $id);
            mysqli_stmt_execute($stmt);
            if (mysqli_stmt_error($stmt)) {
                die("Ошибка выполнения запроса: " . mysqli_stmt_error($stmt));
            }

            mysqli_stmt_close($stmt);
        } else {
            echo ("Ошибка при подготовке запроса: " . mysqli_error($link));
        }
        mysqli_close($link);
    } else {
        die("Это не ваш комментарий");
    }
}

header("Location: index.php");



