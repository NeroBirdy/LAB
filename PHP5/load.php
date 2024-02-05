<?php
$user = $_POST['user'];
$comment = $_POST['comment'];
if ($user === null or $comment === null) {
    die ("Что-то пустое");
}

$link = mysqli_connect("127.0.0.1","root","","php5");
$query = "INSERT INTO comments (user,comment) VALUES (?,?)";

$stmt = mysqli_prepare($link,$query);

if ($stmt)
{
    mysqli_stmt_bind_param($stmt,"ss",$user,$comment);
    mysqli_stmt_execute($stmt);
    if(mysqli_stmt_error($stmt))
    {
        die("Ошибка выполнения запроса: " . mysqli_stmt_error($stmt));
    }

    mysqli_stmt_close($stmt);
} else {
    echo ("Ошибка при подготовке запроса: " . mysqli_error($link));
}

mysqli_close($link);

header("Location: index.php");

?>