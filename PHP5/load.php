<?php
$user = trim($_POST['user']);
$comment = trim($_POST['comment']);
if (!empty($user) and !empty($comment)) {
    $user = preg_replace('/\s+/', ' ', $user);
    $comment = preg_replace('/\s+/', ' ', $comment);
    if ($user === ' ' or $comment === ' ') {
        header("Location: index.php");
        die();
    }


    $link = mysqli_connect("127.0.0.1", "root", "", "php5");
    if ($link === false) {
        die("Ошибка подключения" . mysqli_connect_error());
    }
    $query = "INSERT INTO comments (user,comment) VALUES (?,?)";

    $stmt = mysqli_prepare($link, $query);

    if ($stmt) {
        mysqli_stmt_bind_param($stmt, "ss", $user, $comment);
        mysqli_stmt_execute($stmt);
        if (mysqli_stmt_error($stmt)) {
            die("Ошибка выполнения запроса: " . mysqli_stmt_error($stmt));
        }

        mysqli_stmt_close($stmt);
    } else {
        echo ("Ошибка при подготовке запроса: " . mysqli_error($link));
    }

    mysqli_close($link);
}

header("Location: index.php");
